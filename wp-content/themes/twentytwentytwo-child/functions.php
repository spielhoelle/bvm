<?php
require_once('tmy-plug.php');
// require_once('./gutenpride/tmy-plug.php');
add_action('after_setup_theme', function () {
	add_theme_support('align-wide');
	// add_theme_support('wp-block-styles');
});
add_action('wp_enqueue_scripts', 'menu_scripts');
function menu_scripts()
{
	$parent_style = 'parent-style';
	wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css');
	wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array($parent_style), wp_get_theme()->get('Version'));
}
function custom_render_block_core_navigation(string $block_content, array $block)
{
	if (
		$block['blockName'] === 'core/navigation' &&
		!is_admin() &&
		!wp_is_json_request()
	) {
		return preg_replace('/\<svg width(.*?)\<\/svg\>/', '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> <circle fill="#d2a117" cx="50" cy="50" r="50"/> </svg>
', $block_content);
	}

	return $block_content;
}

add_filter('render_block', 'custom_render_block_core_navigation', null, 2);

// Allow SVG
add_filter('wp_check_filetype_and_ext', function ($data, $file, $filename, $mimes) {

	global $wp_version;
	if ($wp_version !== '4.7.1') {
		return $data;
	}

	$filetype = wp_check_filetype($filename, $mimes);

	return [
		'ext'             => $filetype['ext'],
		'type'            => $filetype['type'],
		'proper_filename' => $data['proper_filename']
	];
}, 10, 4);

function cc_mime_types($mimes)
{
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

function fix_svg()
{
	echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
             width: 100% !important;
             height: auto !important;
        }
        </style>';
}
add_action('admin_head', 'fix_svg');
