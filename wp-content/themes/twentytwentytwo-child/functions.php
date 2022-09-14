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
