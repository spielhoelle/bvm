<?php


# server side rendered block
require_once(__DIR__ . '/blocks/language-switcher/language-switcher.php');

# dynamic blocks
function create_block_tmy_block_init()
{
	$blocks = array(
		'circletext',
		'employees',
		'employee-single',
		'events',
		'event-single',
		'jobs',
		'miniimage',
		'partners'
	);

	foreach ($blocks as $block) {
		register_block_type(plugin_dir_path(__FILE__) . '/blocks/' . $block . '/block.json');
	}
}
add_action('init', 'create_block_tmy_block_init');

function wpdocs_theme_name_scripts()
{
	wp_register_style('style-name', get_stylesheet_directory_uri() . '/style.css');
	wp_enqueue_style('style-name');
}
add_action('wp_enqueue_scripts', 'wpdocs_theme_name_scripts');

function myguten_enqueue()
{
	$alt_font_path = get_stylesheet_directory_uri() . '/build/alt_font.js';
	wp_enqueue_script('custom_js', $alt_font_path, array(), false);
	$video_path = get_stylesheet_directory_uri() . '/build/video.js';
	wp_enqueue_script('video_js', $video_path, array(), false);
	$hide_on_device = get_stylesheet_directory_uri() . '/build/hide_on_device.js';
	wp_enqueue_script('hide_on_device_js', $hide_on_device, array(), false);

	// Add styles also to gutenberg editor
	wp_register_style('style-name', get_stylesheet_directory_uri() . '/style.css');
	wp_enqueue_style('style-name');
}
add_action('enqueue_block_editor_assets', 'myguten_enqueue');
