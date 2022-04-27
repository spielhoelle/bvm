<?php
add_action('wp_enqueue_scripts', 'menu_scripts');
function menu_scripts()
{
	wp_enqueue_script('animation', get_bloginfo('stylesheet_directory') . '/three/dist/client/bundle.js', array('jquery'), '1.0.0');
	$parent_style = 'parent-style';
	wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css');
	wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array($parent_style), wp_get_theme()->get('Version'));
}

//[jobs]
function jobs_shortcode($atts)
{
	$allposts = get_posts(array('post_type' => 'job', 'numberposts' => -1));
	$posts = '';
	foreach ($allposts as $post) {
		$image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail');
		$posts .= "<div>" .
			"<h2>" . $post->post_title . "</h2>" .
			"<img src='" . $image[0] . "'/>" .
			"</div>";
	}
	$html =	"<div id='jobs'>";
	$html .= $posts;
	$html .= "</div>";
	return $html;
}
add_shortcode('jobs', 'jobs_shortcode');

//[employes]
function employees_shortcode($atts)
{
	$allposts = get_posts(array('post_type' => 'employee', 'numberposts' => -1));
	$posts = '';
	foreach ($allposts as $post) {
		$image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail');
		$posts .= "<div>" .
			"<h2>" . $post->post_title . "</h2>" .
			"<img src='" . $image[0] . "'/>" .
			"</div>";
	}
	$html =	"<div id='employees'>";
	$html .= $posts;
	$html .= "</div>";
	return $html;
}
add_shortcode('employees', 'employees_shortcode');

/*
* Creating a function to create our CPT
*/

function custom_post_type()
{

	// Set UI labels for Custom Post Type
	$labels = array(
		'name'                => _x('Jobs', 'Post Type General Name', 'twentytwenty'),
		'singular_name'       => _x('Job', 'Post Type Singular Name', 'twentytwenty'),
		'menu_name'           => __('Jobs', 'twentytwenty'),
		'parent_item_colon'   => __('Parent Job', 'twentytwenty'),
		'all_items'           => __('All Jobs', 'twentytwenty'),
		'view_item'           => __('View Job', 'twentytwenty'),
		'add_new_item'        => __('Add New Job', 'twentytwenty'),
		'add_new'             => __('Add New', 'twentytwenty'),
		'edit_item'           => __('Edit Job', 'twentytwenty'),
		'update_item'         => __('Update Job', 'twentytwenty'),
		'search_items'        => __('Search Job', 'twentytwenty'),
		'not_found'           => __('Not Found', 'twentytwenty'),
		'not_found_in_trash'  => __('Not found in Trash', 'twentytwenty'),
	);

	// Set other options for Custom Post Type

	$args = array(
		'label'               => __('job', 'twentytwenty'),
		'description'         => __('Job news and reviews', 'twentytwenty'),
		'labels'              => $labels,
		'rewrite' => array(
			'slug'       => 'job',
			'with_front' => false,
		),
		// Features this CPT supports in Post Editor
		'supports'            => array('title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'page-attributes'),
		// You can associate this CPT with a taxonomy or custom taxonomy. 
		'taxonomies'          => array('job-category'),
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
	register_post_type('job', $args);
}
add_action('init', 'custom_post_type', 0);

function tr_create_my_taxonomy_job()
{
	register_taxonomy(
		'job-category',
		'job',
		array(
			'label' => __('Job category'),
			'rewrite' => array('slug' => 'Job category'),
			'hierarchical' => true,
		)
	);
}
add_action('init', 'tr_create_my_taxonomy_job');

/*
* Creating a function to create our CPT
*/

function custom_post_type_team()
{

	// Set UI labels for Custom Post Type
	$labels = array(
		'name'                => _x('Employees', 'Post Type General Name', 'twentytwenty'),
		'singular_name'       => _x('Employee', 'Post Type Singular Name', 'twentytwenty'),
		'menu_name'           => __('Employees', 'twentytwenty'),
		'parent_item_colon'   => __('Parent Employee', 'twentytwenty'),
		'all_items'           => __('All Employees', 'twentytwenty'),
		'view_item'           => __('View Employee', 'twentytwenty'),
		'add_new_item'        => __('Add New Employee', 'twentytwenty'),
		'add_new'             => __('Add New', 'twentytwenty'),
		'edit_item'           => __('Edit Employee', 'twentytwenty'),
		'update_item'         => __('Update Employee', 'twentytwenty'),
		'search_items'        => __('Search Employee', 'twentytwenty'),
		'not_found'           => __('Not Found', 'twentytwenty'),
		'not_found_in_trash'  => __('Not found in Trash', 'twentytwenty'),
	);

	// Set other options for Custom Post Type

	$args = array(
		'label'               => __('employee', 'twentytwenty'),
		'description'         => __('Employee news and reviews', 'twentytwenty'),
		'labels'              => $labels,
		'rewrite' => array(
			'slug'       => 'employee',
			'with_front' => false,
		),
		// Features this CPT supports in Post Editor
		'supports'            => array('title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'page-attributes'),
		// You can associate this CPT with a taxonomy or custom taxonomy. 
		'taxonomies'          => array('employee-category'),
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
	register_post_type('employee', $args);
}
add_action('init', 'custom_post_type_team', 0);

// function tr_create_my_taxonomy_team()
// {
// 	register_taxonomy(
// 		'employee-category',
// 		'employee',
// 		array(
// 			'label' => __('Employee category'),
// 			'rewrite' => array('slug' => 'Employee category'),
// 			'hierarchical' => true,
// 		)
// 	);
// }
// add_action('init', 'tr_create_my_taxonomy_team');

// function tmy_markdown_plugin_setup_menu()
// {
// 	add_menu_page('Markdown upload page', 'Markdown upload', 'manage_options', 'tmy_markdown-plugin', 'tmy_markdown_init');
// }
// add_action('admin_menu', 'tmy_markdown_plugin_setup_menu');