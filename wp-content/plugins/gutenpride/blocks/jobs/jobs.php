<?php


function create_block_tmy_jobs_block_init_render_callback($block_attributes, $content)
{
	$allposts = get_posts(array('post_type' => 'job', 'numberposts' => -1));
	$html =	"<div id='jobs'>";
	foreach ($allposts as $post) {
		$image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail');
		$html .= "<div>" ;
		$html .= "<div>" ;
		$html .= "<a href='".get_the_permalink($post->ID)."'>" ;
		$html .= "<h3>";
		$html .= $post->post_title;
		$html .= '<span>+</span>';
		$html .= "</h3>";
		$html .= "</a>";
		$html .= "</div>" ;
		$html .= "</div>";
	}
	$html .= "</div>";
	return $html;
}


add_action('init', function () {
	register_block_type(__DIR__ . '/block.json', array(
		'api_version' => 2,
		'render_callback' => 'create_block_tmy_jobs_block_init_render_callback',
		'editor_script' => 'tmy-berg',
	));
});

register_block_style('create-block/tmy-jobs', [
	'name' => 'two-column',
	'label' => __('Two column', 'txtdomain'),
	'style_handle' => 'tmy-jobs' // TODO link with stylesheet partial???
]);

register_block_style('create-block/tmy-jobs', [
		'name'         => 'four-column',
		'label'        => __('Four column', 'textdomain'),
		'inline_style' => '.is-style-four-column #jobs { display: flex; }',
	]
);