<?php
function gutenberg_color_palette() {
  // Adding custom colors
	add_theme_support(
		'editor-color-palette', array(
                array(
                    'name'  => esc_html__( 'Black', 'velcron' ),
                    'slug' => 'black',
                    'color' => '#2a2a2a',
                ),
                array(
                    'name'  => esc_html__( 'Gray', 'velcron' ),
                    'slug' => 'gray',
                    'color' => '#727477',
                ),
                array(
                    'name'  => esc_html__( 'White', 'velcron' ),
                    'slug' => 'white',
                    'color' => '#FFFFFF',
                ),
                array(
                    'name'  => esc_html__( 'Velcron Green', 'velcron' ),
                    'slug' => 'velcrongreen',
                    'color' => '#9cc550',
                )
            )
    );
    // Snippet to remove custom gradients
    add_theme_support('editor-gradient-presets', array());
    add_theme_support('disable-custom-gradients', true );
}
add_action( 'after_setup_theme', 'gutenberg_color_palette' );
