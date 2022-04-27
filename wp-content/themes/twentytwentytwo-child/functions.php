<?php

add_action('wp_enqueue_scripts', 'menu_scripts');
function menu_scripts()
{
	wp_enqueue_script('animation', get_bloginfo('stylesheet_directory') . '/three/dist/client/bundle.js', array('jquery'), '1.0.0');
	$parent_style = 'parent-style';
	wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css');
	wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array($parent_style), wp_get_theme()->get('Version'));
}

//[animation]
function animation_func($atts)
{
	$html =	"<div id='animation'>
				Test
			</div>";
	echo $html;
}
add_shortcode('animation', 'animation_func');

/*
* Creating a function to create our CPT
*/

function custom_post_type()
{

	// Set UI labels for Custom Post Type
	$labels = array(
		'name'                => _x('Archives', 'Post Type General Name', 'twentytwenty'),
		'singular_name'       => _x('Archive', 'Post Type Singular Name', 'twentytwenty'),
		'menu_name'           => __('Archives', 'twentytwenty'),
		'parent_item_colon'   => __('Parent Archive', 'twentytwenty'),
		'all_items'           => __('All Archives', 'twentytwenty'),
		'view_item'           => __('View Archive', 'twentytwenty'),
		'add_new_item'        => __('Add New Archive', 'twentytwenty'),
		'add_new'             => __('Add New', 'twentytwenty'),
		'edit_item'           => __('Edit Archive', 'twentytwenty'),
		'update_item'         => __('Update Archive', 'twentytwenty'),
		'search_items'        => __('Search Archive', 'twentytwenty'),
		'not_found'           => __('Not Found', 'twentytwenty'),
		'not_found_in_trash'  => __('Not found in Trash', 'twentytwenty'),
	);

	// Set other options for Custom Post Type

	$args = array(
		'label'               => __('archive', 'twentytwenty'),
		'description'         => __('Archive news and reviews', 'twentytwenty'),
		'labels'              => $labels,
		'rewrite' => array(
			'slug'       => 'archive',
			'with_front' => false,
		),
		// Features this CPT supports in Post Editor
		'supports'            => array('title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'page-attributes'),
		// You can associate this CPT with a taxonomy or custom taxonomy. 
		'taxonomies'          => array('archive-category'),
		/* A hierarchical CPT is like Pages and can have
        * Parent and child items. A non-hierarchical CPT
        * is like Posts.
        */
		'hierarchical'        => true,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
		'show_in_rest' => true,

	);

	// Registering your Custom Post Type
	register_post_type('archive', $args);
}
function tr_create_my_taxonomy()
{

	register_taxonomy(
		'archive-category',
		'archive',
		array(
			'label' => __('Archive category'),
			'rewrite' => array('slug' => 'Archive category'),
			'hierarchical' => true,
		)
	);
}
add_action('init', 'tr_create_my_taxonomy');
/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/

add_action('init', 'custom_post_type', 0);

add_action('admin_menu', 'tmy_markdown_plugin_setup_menu');
function tmy_markdown_plugin_setup_menu()
{
	add_menu_page('Markdown upload page', 'Markdown upload', 'manage_options', 'tmy_markdown-plugin', 'tmy_markdown_init');
}