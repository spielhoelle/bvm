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

require_once(__DIR__ . '/blocks/events/events.php');
require_once(__DIR__ . '/blocks/employees/employees.php');
require_once(__DIR__ . '/blocks/jobs/jobs.php');
require_once(__DIR__ . '/blocks/partners/partners.php');

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
}
add_action('init', 'create_block_tmy_block_init');
