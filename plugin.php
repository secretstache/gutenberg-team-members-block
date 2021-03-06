<?php
/**
 * Plugin Name: Gutenberg Team Members Block
 * Description: Gutenberg plugin that adds support of Team Members block (created via create-guten-block).
 * Author: Secret Stache Media, LLC
 * Author URI: https://secretstache.com/
 * Version: 1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
