<?php
function grace_travels_assets() {
    wp_enqueue_style('grace-styles', get_template_directory_uri() . '/app/assets/index-BpGce6eg.css');
    wp_enqueue_script('grace-scripts', get_template_directory_uri() . '/app/assets/index-BqvLi46b.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'grace_travels_assets');
?>