<?php

function create_block_tmy_events_block_init_render_callback($block_attributes, $content)
{
	$allposts = get_posts(array('post_type' => 'event', 'numberposts' => -1));
	$posts = '';
	foreach ($allposts as $post) {
		$gallery_src = get_post_gallery($post->ID, false);
		$image = wp_get_attachment_image(get_post_thumbnail_id($post->ID), 'medium');
		$posts .= "<div>" .
			"<h4>" . $post->post_title . "</h4>" .
			$image;
		$gallery = get_post_gallery($post->ID, true);
		// $posts .= $gallery;
		$posts .= "<p>" . get_post_meta($post->ID, 'date', true) . "</p>";
		foreach (explode(",", $gallery_src['ids']) as $gallery_item) {
			$posts .= wp_get_attachment_image($gallery_item, 'medium');
		}
		$posts .= "</div>";
	}
	$html =	"<div id='events'>";
	$html .= $posts;
	$html .= "</div>";
	return $html;
}

add_action('init', function ()
{
	register_block_type('create-block/tmy-events', array(
		'api_version' => 2,
		'render_callback' => 'create_block_tmy_events_block_init_render_callback',
		'editor_script' => 'tmy-berg',
	));
});
