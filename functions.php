<?php
/**
 ** activation theme
 **/
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles()
{
	wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
	

}

/**
 ** Call js files
 **/

function custom_scripts()
{
	//custom scripts
	wp_enqueue_script('add-span-for-divi-buttons', get_stylesheet_directory_uri() . '/js/scripts/add-span-for-divi-buttons.js', array(), '5.5.1', true);
	wp_enqueue_script('scroll-x-section', get_stylesheet_directory_uri() . '/js/scripts/scroll-x-section.js', array(), '5.5.1', true);
	
	//Tilt js resources
	wp_enqueue_script('tilt-js-resources', get_stylesheet_directory_uri() . '/node_modules/tilt.js/src/tilt.jquery.js', array('jquery'), '1.0.0', true);
	wp_enqueue_script('tilt-js', get_stylesheet_directory_uri() . '/js/tilt.js', array('jquery'), '1.0.0', false);
	
	//GSAP resources
	wp_enqueue_script('gsap-js-resources', get_stylesheet_directory_uri() . '/node_modules/gsap/dist/gsap.min.js', array(), '5.5.1', true);
	wp_enqueue_script('MorphSVG-js', get_stylesheet_directory_uri() . '/node_modules/gsap/dist/MorphSVGPlugin.min.js', array(), '5.5.1', true);
	wp_enqueue_script('ScrollTrigger-js', get_stylesheet_directory_uri() . '/node_modules/gsap/dist/ScrollTrigger.min.js', array(), '5.5.1', true);
	wp_enqueue_script('Draggable-js', get_stylesheet_directory_uri() . '/node_modules/gsap/dist/Draggable.min.js', array(), '5.5.1', true);
	wp_enqueue_script('InertiaPlugin-js', get_stylesheet_directory_uri() . '/node_modules/gsap/dist/InertiaPlugin.min.js', array(), '5.5.1', true);
	
	//GSAP custom animation
	wp_enqueue_script('logo-animation', get_stylesheet_directory_uri() . '/js/gsap-animations/logo-animation.js', array(), '5.5.1', true);
	wp_enqueue_script('display-burger', get_stylesheet_directory_uri() . '/js/gsap-animations/display-burger.js', array(), '5.5.1', true);
	wp_enqueue_script('magnetic-cursor', get_stylesheet_directory_uri() . '/js/gsap-animations/magnetic-cursor.js', array(), '5.5.1', true);
	wp_enqueue_script('menu-animation', get_stylesheet_directory_uri() . '/js/gsap-animations/menu-animation.js', array('jquery'), '5.5.1', true);
	wp_enqueue_script('menu-link', get_stylesheet_directory_uri() . '/js/gsap-animations/menu-link.js', array('jquery'), '5.5.1', true);
	wp_enqueue_script('scroll-effects-titles', get_stylesheet_directory_uri() . '/js/gsap-animations/scroll-effects-titles.js', array(), '5.5.1', true);
	wp_enqueue_script('scroll-effects-logo', get_stylesheet_directory_uri() . '/js/gsap-animations/scroll-effects-logo.js', array(), '5.5.1', true);
	wp_enqueue_script('scroll-x-section-auto', get_stylesheet_directory_uri() . '/js/gsap-animations/scroll-x-section-auto.js', array(), '5.5.1', true);
	wp_enqueue_script('carrousel', get_stylesheet_directory_uri() . '/js/gsap-animations/carrousel.js', array(), '5.5.1', true);
	wp_enqueue_script('hero-header-arrow', get_stylesheet_directory_uri() . '/js/gsap-animations/hero-header-arrow.js', array(), '5.5.1', true);
}

add_action('wp_enqueue_scripts', 'custom_scripts');
