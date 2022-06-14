<?php

add_action('init', function () {
	register_block_type(__DIR__ . '/block.json', array(
		'api_version' => 2,
		'editor_script' => 'tmy-berg',
	));
});
