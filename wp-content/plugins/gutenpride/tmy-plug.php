<?php
/**
 * Plugin Name:       tmy-plug
 * Description:       A wordpress plugin to display some custom post types using gutenberg blocks
 * Version:           0.1.0
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Author:            Thomas Kuhnert
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:BVM    tmy
 *
 * @package           create-block
 */

function create_block_tmy_block_init_render_callback($block_attributes, $content)
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

function create_block_tmy_block_init()
{
	// automatically load dependencies and version
	$asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');

	wp_register_script(
		'tmy-berg',
		plugins_url('build/index.js', __FILE__),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type('create-block/tmy', array(
		'api_version' => 2,
		'render_callback' => 'create_block_tmy_block_init_render_callback',
		'editor_script' => 'tmy-berg',
	));
}
add_action( 'init', 'create_block_tmy_block_init' );
