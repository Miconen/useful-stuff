<?php
// Template language inclusive content
add_action('template_redirect', function () {
    $currentLanguage = function_exists('pll_current_language') ? pll_current_language() : '';
    if (
        is_page_template('templates/works.php') ||
        (is_page_template('templates/works.php') &&
            $currentLanguage === 'fi')
    ) {
        add_action('wpex_hook_content_top', function () {
        });
    };
});
