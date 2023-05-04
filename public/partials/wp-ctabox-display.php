<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       https://www.matrixmarketers.com
 * @since      1.0.0
 *
 * @package    Wp_Ctabox
 * @subpackage Wp_Ctabox/public/partials
 */



// Creating shortcode with multiple attributes

function cta_box($atts){

    $output = '';

    $atts = shortcode_atts( array(
            'title' => 'Start Using Divi',
            'message' => 'Discover the power and flexibility of Divi, the ultimate WordPress theme and visual page builder. Create stunning websites with ease and elevate your web design game. Click the button below to get started with Divi today!',
            'button_label' => 'Try it for free',
            'button_url' => 'https://elegantthemes.com'

        ), $atts );

    $html  = '<div class="cta-banner1">';
    $html .= '<div class="cta-text">';
    $html .= '<h2>'.$atts["title"].'</h2>';
    $html .= '<p>'.$atts["message"].'</p>';
    $html .= '<div class="btn-shape"> <a href="'.$atts['button_url'].'" id="cta_btn" target="_blank" class="btn_link">'.$atts['button_label'].'</a> </div>';
    $html .='<div id="click-count">Button clicked: <span class="loadCount">0</span> times</div>';
    $html .= '</div>';
    $html .= '</div>';
 
    $output = $html;

    return $output;

}

add_shortcode( 'cta_box' , 'cta_box' );

?>

<!-- This file should primarily consist of HTML with a little bit of PHP. -->
