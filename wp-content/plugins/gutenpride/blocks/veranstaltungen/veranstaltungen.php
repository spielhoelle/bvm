<?php

function create_block_tmy_veranstaltungen_block_init_render_callback($block_attributes, $content)
{
	$allposts = get_posts(array('post_type' => 'event', 'numberposts' => -1));
	$posts = '';
	foreach ($allposts as $post) {
		$gallery_src = get_post_gallery($post->ID, false);
		$posts .= "<div  class='veranstaltungen-wrapper'>";
		$posts .= "<div class='veranstaltungen-1'>".
			"<h4>" . $post->post_title . "</h4>" ;
		$posts .= wp_get_attachment_image(get_post_thumbnail_id($post->ID), 'medium', false, 'class=veranstaltungen-icon'); 
		// $gallery = get_post_gallery($post->ID, true);
		// $posts .= $gallery;
		$posts .= "<p>" . get_post_meta($post->ID, 'date', true) . "</p>";
		$posts .= "</div>";
		$gallery_items = explode(",", $gallery_src['ids']);
		foreach ($gallery_items as $key => $gallery_item) {
			if($key==0){
			// if (count($gallery_items) === 1) {
				$posts .= "<div class='veranstaltungen-2'>";
			// } else if (count($gallery_items) > 1) {
			} else if ($key === 1) {
				$posts .= "<div class='veranstaltungen-3'>";
			} else {
				$posts .= "<div class='veranstaltungen-" . ($key+2) . "'>";
			}
			$posts .= wp_get_attachment_image($gallery_item, 'medium');
			$posts .= "</div>";
		}
		$posts .= "</div>";
	}
	$html =	"<div id='veranstaltungen'>";
	$html .= $posts;
	$html .= "</div>";
	return $html;
}

add_action('init', function () {
	register_block_type(__DIR__ . '/block.json', array(
		'api_version' => 2,
		'render_callback' => 'create_block_tmy_veranstaltungen_block_init_render_callback',
		'editor_script' => 'tmy-berg',
	));
});

register_block_style('create-block/tmy-veranstaltungen', [
	'name' => 'two-column',
	'label' => __('Two column', 'txtdomain'),
	'style_handle' => 'tmy-veranstaltungen'
]);