<?php
add_filter( 'upload_mimes', 'test_my_myme_types');

function test_my_myme_types( $mime_types ) {
    // Adding .svg extension
  $mime_types['json'] = 'text/plain';// Adding .json extension

  return $mime_types;
}

