<?php

add_filter( 'status_header', 'your_status_header_function', 10, 2 );

/**
 * Substitutes a 202 Accepted header for 404s.
 *
 * @param string $status_header The complete status header string
 * @param string $header HTTP status code
 * @return string $status_header
 */
function your_status_header_function( $status_header, $header ) {

    // if a 404, convert to 202
    if ( (int) $header == 404 )
        return status_header( 202 );

    // otherwise, return the unchanged header
    return $status_header;
}