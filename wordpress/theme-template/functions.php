<?php
// Remove emojis
include 'scripts/remove_emojis.php';

// Remove gutenberg block editor
include 'scripts/remove_gutenberg.php';

// Remove post via email
add_filter( 'enable_post_by_email_configuration', '__return_false', 100 );
