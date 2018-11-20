<?php
/**
 * Creates object post types.
 */

require_once ( 'SimpleDate.php' );
require_once ( 'MetaBox.php' );
require_once ( 'object_functions.php' );
require_once ( 'ObjectPostType.php' );

/**
 * Creates the custom museum object post types.
 *
 * Iterates through the user-created museum objects and creates a custom post type
 * for each. Each object has a table of custom fields that are presented to users
 * on the edit post screen. The bulk of this function is devoted to creating and
 * saving that form. Object posts are hierarchical--users can create child objects
 * from the edit post page. Objects and their custom fields are accessible to the
 * Wordpress REST api if they are marked as 'public' in the object admin page.
 * Objects have image galleries using ajax to add and manipulate image attachments.
 *
 * @see object_admin.php
 */
function create_object_types() {
    global $wpdb;
    $object_type_table = $wpdb->prefix . WPM_PREFIX . "object_types";
    $object_rows = $wpdb->get_results( "SELECT * FROM $object_type_table" );

    $object_type_list = array();
    foreach ( $object_rows as $object_row ) {
        $new_object_post_type = new ObjectPostType( $object_row );
        $new_object_post_type->register();
        $object_type_list[] = $new_object_post_type->object_type;
    }

    // Adds a list of the museum objects to the REST api.
    // Typically accessed at /wp-json/wp-museum/v1/object_types/
    add_action ( 'rest_api_init', function() use( $object_type_list) {
        register_rest_route( 'wp-museum/v1', '/object_types/', array (
            'methods'   => 'GET',
            'callback'  => function() {
                return $this->object_type_list;
            }
        ) );
    } );
}
add_action( 'plugins_loaded', 'create_object_types' );

/**
 * Adds a link to the parent object post for child posts.
 */
function add_object_parent_link ( WP_POST $post ) {
    if ( substr($post->post_type, 0, strlen(WPM_PREFIX)) !== WPM_PREFIX ) return;
    $parent_ID = wp_get_post_parent_ID( $post->ID );
    if ( !$parent_ID ) return;
    $parent  = get_post( $parent_ID );
    if ( isset( $parent ) ) {
        echo "<div class='postbox' style='font-size:1.2em; padding:10px; margin-bottom:10px;'>Parent Object: {$parent->post_title} (<a href='post.php?post={$parent->ID}&action=edit'>Edit</a>)</div>";
    }
}
add_action ( 'edit_form_top', 'add_object_parent_link');

