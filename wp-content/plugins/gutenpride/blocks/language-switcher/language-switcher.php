<?php

function create_block_tmy_language_switcher_block_init_render_callback($block_attributes, $content)
{
	if (function_exists('pll_the_languages')) {
		$args = [
			'show_flags' => 0,
			'show_names' => 1,
			'hide_if_empty' => 0,
			'echo'       => 0,
		];
		$output = '<ul class="polylang_langswitcher">' . pll_the_languages($args) . '</ul>';
	}
	return $output;
}

add_action('init', function () {
	register_block_type(__DIR__ . '/block.json', array(
		'api_version' => 2,
		'render_callback' => 'create_block_tmy_language_switcher_block_init_render_callback'
	));
});
