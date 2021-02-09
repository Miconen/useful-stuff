if ( is_shop() ) { // Any woocommerce conditional
  add_filter( 'loop_shop_columns', 'wc_loop_shop_columns', 1, 10 );
}

function wc_loop_shop_columns( $number_columns ) {
  return 3; // Rows
}
