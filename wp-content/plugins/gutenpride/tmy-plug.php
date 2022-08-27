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
