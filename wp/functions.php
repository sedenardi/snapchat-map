<?php
function snapchatdbmap() {
  wp_enqueue_script('gmaps', 'http://maps.google.com/maps/api/js?sensor=false');
  wp_enqueue_script('heatmap', get_stylesheet_directory_uri() . '/snapchat-map/heatmap.js');
  wp_enqueue_script('heatmap-gmaps', get_stylesheet_directory_uri() . '/snapchat-map/heatmap-gmaps.js', array('gmaps','heatmap'));  
  wp_enqueue_script('snapchatCoords', get_stylesheet_directory_uri() . '/snapchat-map/snapchatCoords.js', array('jquery'));
  wp_enqueue_script('snapchat-map', get_stylesheet_directory_uri() . '/snapchat-map/snapchat-map.js', array('jquery','heatmap-gmaps','snapchatCoords'));
  return '<div id="map-canvas"></div>';
}
add_shortcode('snapchatdbmap', 'snapchatdbmap');
?>