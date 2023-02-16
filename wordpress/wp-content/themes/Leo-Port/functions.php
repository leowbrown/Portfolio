<?php

///////////////////////////////////
///                             ///
/// linking custom style sheets ///
///                             ///
///////////////////////////////////

function custom_theme_assets() {
    wp_enqueue_style('leo_port_stylesheet', get_stylesheet_uri());
    wp_register_script('leo_port-js-file', get_template_directory_uri() . '/js/script.js', false, null, true);
    wp_enqueue_script('leo_port-js-file');
}

add_action('wp_enqueue_scripts', 'custom_theme_assets');

?>