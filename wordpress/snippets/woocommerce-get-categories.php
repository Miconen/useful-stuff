<?php
if ( ! function_exists( 'woocommerce_sidebar_widgets' )) {
    function superyellow_woocommerce_sidebar_widgets() {
        
        $args = array(
            'taxonomy'   => "product_cat"
        );
        $product_categories = get_terms($args);

        $categories = array();

        foreach ($product_categories as $key => $value) {
            $categoryUrl = get_term_link( $value->slug, 'product_cat' );
            $categories[$value->name] = $categoryUrl;
        }

        get_template_part('partials/woocommerce/sidebar', null, $categories);
    }
}
