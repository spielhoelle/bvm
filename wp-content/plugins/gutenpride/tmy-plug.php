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
		'partners',
		'veranstaltungen'
	);

	foreach ($blocks as $block) {
		register_block_type(plugin_dir_path(__FILE__) . '/blocks/' . $block . '/block.json');
	}
}
add_action('init', 'create_block_tmy_block_init');

function wpdocs_theme_name_scripts()
{
	wp_register_style('style-name', plugins_url('src/style.css', __FILE__));
	wp_enqueue_style('style-name');
	wp_register_style('heading-name', plugins_url('build/style-heading.css', __FILE__));
	wp_enqueue_style('heading-name');
}
add_action('wp_enqueue_scripts', 'wpdocs_theme_name_scripts');

function myguten_enqueue()
{
	$heading_path = plugins_url('build/heading.js', __FILE__);
	wp_enqueue_script('custom_js', $heading_path, array(), false);
}

add_action('enqueue_block_editor_assets', 'myguten_enqueue');
add_action('after_setup_theme', function () {
	$version = 3;
	add_theme_support('editor-styles');
	add_editor_style('editor.css');
});