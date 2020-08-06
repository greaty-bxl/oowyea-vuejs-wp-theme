<?php
/*
 *  Author: Greaty <i@greaty.be>
 *  URL: https://greaty.be/wp-themes
 *  Elegant Vue.js WordPress theme.
 */

define('GREATY_TEMPLATE_PATH', get_template_directory());
define('GREATY_TEMPLATE_URL', get_template_directory_uri());

include GREATY_TEMPLATE_PATH.'/security/security.php';
include GREATY_TEMPLATE_PATH.'/plugins/TGM-Plugin-Activation/class-tgm-plugin-activation.php';
include GREATY_TEMPLATE_PATH.'/plugins/require-plugins.php';

include GREATY_TEMPLATE_PATH.'/vue.config.php';

/*------------------------------------*\
    Vue.js Libraries & functions
\*------------------------------------*/

// $wp_vue_json will be used in Vue as vue.wp or this.wp in components
$wp_vue_json;

include GREATY_TEMPLATE_PATH.'/libs/get_vue_template.php';
include GREATY_TEMPLATE_PATH.'/libs/wp_vue_add_var.php';
include GREATY_TEMPLATE_PATH.'/libs/vue-to-templates.php';
include GREATY_TEMPLATE_PATH.'/libs/menus.php';
include GREATY_TEMPLATE_PATH.'/libs/sidebars.php';
include GREATY_TEMPLATE_PATH.'/libs/sections.php';
include GREATY_TEMPLATE_PATH.'/libs/posts.php';
include GREATY_TEMPLATE_PATH.'/libs/woocommerce.php';
include GREATY_TEMPLATE_PATH.'/libs/ajax-login.php';
include GREATY_TEMPLATE_PATH.'/libs/image-sizes.php';


// Playing with Phaser (do not include in Greaty Theme)
include GREATY_TEMPLATE_PATH.'/libs/phaser/phaser.php';

// Code for greaty new site
include GREATY_TEMPLATE_PATH.'/libs/greaty/greaty.php';

// Last call
include GREATY_TEMPLATE_PATH.'/libs/return_json.php';

/*------------------------------------*\
	Theme Support
\*------------------------------------*/


if (!isset($content_width))
{
    $content_width = 900;
}

if (function_exists('add_theme_support'))
{
    // Add Menu Support
    add_theme_support('menus');

    // Add Thumbnail Theme Support
    add_theme_support('post-thumbnails');

    function remove_extra_image_sizes() {
        foreach ( get_intermediate_image_sizes() as $size ) {
            if ( !in_array( $size, array( 'mini_blur', 'thumbnail', 'medium', 'medium_large', 'large' ) ) ) {
                remove_image_size( $size );
            }
        }
    }
    add_action('init', 'remove_extra_image_sizes');

    add_image_size('mini_blur', 10, 10, 0); // mini
    update_option( 'mini_blur_size_h', 10 );
    update_option( 'mini_blur_size_w', 10 );
    update_option( 'mini_blur_crop', 0 );

    // Enables post and comment RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Localisation Support
    load_theme_textdomain('greatytheme', get_template_directory() . '/languages');
}

/*------------------------------------*\
    ACF
\*------------------------------------*/

// Include ACF pro
// Define path and URL to the ACF plugin.
define( 'MY_ACF_PATH', get_stylesheet_directory() . '/plugins/advanced-custom-fields-pro/' );
define( 'MY_ACF_URL', get_stylesheet_directory_uri() . '/plugins/advanced-custom-fields-pro/' );
// Include the ACF plugin.
include_once( MY_ACF_PATH . 'acf.php' );
// Customize the url setting to fix incorrect asset URLs.
add_filter('acf/settings/url', 'my_acf_settings_url');
function my_acf_settings_url( $url ) {
    return MY_ACF_URL;
}
// (Optional) Hide the ACF admin menu item.
/*add_filter('acf/settings/show_admin', 'my_acf_settings_show_admin');
function my_acf_settings_show_admin( $show_admin ) {
    return false;
}*/

if( function_exists('acf_add_options_page') ) {
    
    acf_add_options_page(array(
        'page_title'    => 'Theme General Settings',
        'menu_title'    => 'Theme Settings',
        'menu_slug'     => 'greaty-theme-general-settings',
        'capability'    => 'edit_posts',
        'redirect'      => false
    ));

    include GREATY_TEMPLATE_PATH.'/plugins/acf-google-fonts/acf-google_font_selector.php';

    include GREATY_TEMPLATE_PATH.'/libs/acf.php';
}


/*------------------------------------*\
	Functions
\*------------------------------------*/



// HTML5 Blank navigation
function greatytheme_nav()
{
	wp_nav_menu(
	array(
		'theme_location'  => 'header-menu',
		'menu'            => '',
		'container'       => 'div',
		'container_class' => 'menu-{menu slug}-container',
		'container_id'    => '',
		'menu_class'      => 'menu',
		'menu_id'         => '',
		'echo'            => true,
		'fallback_cb'     => 'wp_page_menu',
		'before'          => '',
		'after'           => '',
		'link_before'     => '',
		'link_after'      => '',
		'items_wrap'      => '<ul>%3$s</ul>',
		'depth'           => 0,
		'walker'          => ''
		)
	);
}

// Load HTML5 Blank scripts (header.php)
function greatytheme_header_scripts()
{
    if ($GLOBALS['pagenow'] != 'wp-login.php' && !is_admin()) {

        wp_enqueue_script( 'jquery' );

        wp_enqueue_script( 'jquery-effects-core' );

    	wp_register_script('conditionizr', get_template_directory_uri() . '/js/lib/conditionizr-4.3.0.min.js', array(), '4.3.0'); // Conditionizr
        wp_enqueue_script('conditionizr'); // Enqueue it!

        wp_register_script('modernizr', get_template_directory_uri() . '/js/lib/modernizr-2.7.1.min.js', array(), '2.7.1'); // Modernizr
        wp_enqueue_script('modernizr'); // Enqueue it!

        wp_register_script('greatythemescripts', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '1.0.0'); // Custom scripts
        wp_enqueue_script('greatythemescripts'); // Enqueue it!

        //vue js Dev
        if( is_vuejs_dev )
        {
            // vue server
            wp_enqueue_script('vue-app', vuejs_server.'/app.js', array('greatythemescripts'), '1.0', true );
            wp_enqueue_script('vue-chunk-vendors', vuejs_server.'/chunk-vendors.js', array('greatythemescripts'), '1.0', true);
        }
        else
        {
            // vue dist
            wp_enqueue_script('vue-app', get_template_directory_uri() .'/vuejs/dist/app.js', array('greatythemescripts'), '1.0', true );
            wp_enqueue_script('vue-chunk-vendors', get_template_directory_uri() . '/vuejs/dist/chunk-vendors.js', array('vue-app'), '1.0', true);
        }

        
        
    }
}

// Load HTML5 Blank styles
function greatytheme_styles()
{
    wp_register_style('normalize', get_template_directory_uri() . '/normalize.min.css', array(), '1.0', 'all');
    wp_enqueue_style('normalize'); // Enqueue it!

    /*wp_register_style('greatytheme', get_template_directory_uri() . '/style.css', array(), '1.0', 'all');
    wp_enqueue_style('greatytheme'); // Enqueue it!*/

    // vue dist
    if( !is_vuejs_dev )
    {
        wp_register_style('vue-chunk-vendors-css', get_template_directory_uri() . '/vuejs/dist/chunk-vendors.css', array(), '1.0', 'all');
        wp_enqueue_style('vue-chunk-vendors-css'); // Enqueue it!

        wp_register_style('vue-css', get_template_directory_uri() . '/vuejs/dist/app.css', array(), '1.0', 'all');
        wp_enqueue_style('vue-css'); // Enqueue it!
    }
}

// Register HTML5 Blank Navigation
function register_html5_menu()
{
    register_nav_menus(array( // Using array to specify more menus if needed
        'header-menu' => __('Header Menu', 'greatytheme'), // Main Navigation
        'burger-menu' => __('Burger Menu', 'greatytheme'), // Sidebar Navigation
    ));
}

// Remove the <div> surrounding the dynamic navigation to cleanup markup
function my_wp_nav_menu_args($args = '')
{
    $args['container'] = false;
    return $args;
}

// Remove Injected classes, ID's and Page ID's from Navigation <li> items
function my_css_attributes_filter($var)
{
    return is_array($var) ? array() : '';
}

// Remove invalid rel attribute values in the categorylist
function remove_category_rel_from_category_list($thelist)
{
    return str_replace('rel="category tag"', 'rel="tag"', $thelist);
}

// Add page slug to body class, love this - Credit: Starkers Wordpress Theme
function add_slug_to_body_class($classes)
{
    global $post;
    if (is_home()) {
        $key = array_search('blog', $classes);
        if ($key > -1) {
            unset($classes[$key]);
        }
    } elseif (is_page()) {
        $classes[] = sanitize_html_class($post->post_name);
    } elseif (is_singular()) {
        $classes[] = sanitize_html_class($post->post_name);
    }

    return $classes;
}

// If Dynamic Sidebar Exists
if (function_exists('register_sidebar'))
{
    // Define Sidebar Widget Area 1
    register_sidebar(array(
        'name' => __('Burger Menu', 'greatytheme'),
        'description' => __('Description for this widget-area...', 'greatytheme'),
        'id' => 'burger-menu-area',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));

    // Define Sidebar Widget Area 2
    register_sidebar(array(
        'name' => __('Ecommerce Menu', 'greatytheme'),
        'description' => __('Description for this widget-area...', 'greatytheme'),
        'id' => 'ecommerce-menu-area',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));

    register_sidebar(array(
        'name' => __('User Menu', 'greatytheme'),
        'description' => __('Description for this widget-area...', 'greatytheme'),
        'id' => 'user-menu-area',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));

    register_sidebar(array(
        'name' => __('Search Menu', 'greatytheme'),
        'description' => __('Description for this widget-area...', 'greatytheme'),
        'id' => 'search-menu-area',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));
}

// Remove wp_head() injected Recent Comment styles
function my_remove_recent_comments_style()
{
    global $wp_widget_factory;
    remove_action('wp_head', array(
        $wp_widget_factory->widgets['WP_Widget_Recent_Comments'],
        'recent_comments_style'
    ));
}

// Pagination for paged posts, Page 1, Page 2, Page 3, with Next and Previous Links, No plugin
function html5wp_pagination()
{
    global $wp_query;
    $big = 999999999;
    echo paginate_links(array(
        'base' => str_replace($big, '%#%', get_pagenum_link($big)),
        'format' => '?paged=%#%',
        'current' => max(1, get_query_var('paged')),
        'total' => $wp_query->max_num_pages
    ));
}

// Custom Excerpts
function html5wp_index($length) // Create 20 Word Callback for Index page Excerpts, call using html5wp_excerpt('html5wp_index');
{
    return 20;
}

// Create 40 Word Callback for Custom Post Excerpts, call using html5wp_excerpt('html5wp_custom_post');
function html5wp_custom_post($length)
{
    return 40;
}

// Create the Custom Excerpts callback
function html5wp_excerpt($length_callback = '', $more_callback = '')
{
    global $post;
    if (function_exists($length_callback)) {
        add_filter('excerpt_length', $length_callback);
    }
    if (function_exists($more_callback)) {
        add_filter('excerpt_more', $more_callback);
    }
    $output = get_the_excerpt();
    $output = apply_filters('wptexturize', $output);
    $output = apply_filters('convert_chars', $output);
    $output = '<p>' . $output . '</p>';
    echo $output;
}

// Custom View Article link to Post
function html5_blank_view_article($more)
{
    global $post;
    return '... <a class="view-article" href="' . get_permalink($post->ID) . '">' . __('View Article', 'greatytheme') . '</a>';
}

// Remove Admin bar
function remove_admin_bar()
{
    //return false;
}

// Remove 'text/css' from our enqueued stylesheet
function html5_style_remove($tag)
{
    return preg_replace('~\s+type=["\'][^"\']++["\']~', '', $tag);
}

// Remove thumbnail width and height dimensions that prevent fluid images in the_thumbnail
function remove_thumbnail_dimensions( $html )
{
    $html = preg_replace('/(width|height)=\"\d*\"\s/', "", $html);
    return $html;
}

// Custom Gravatar in Settings > Discussion
function greatythemegravatar ($avatar_defaults)
{
    $myavatar = get_template_directory_uri() . '/img/gravatar.jpg';
    $avatar_defaults[$myavatar] = "Custom Gravatar";
    return $avatar_defaults;
}

// Threaded Comments
function enable_threaded_comments()
{
    if (!is_admin()) {
        if (is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
            wp_enqueue_script('comment-reply');
        }
    }
}

// Custom Comments Callback
function greatythemecomments($comment, $args, $depth)
{
	$GLOBALS['comment'] = $comment;
	extract($args, EXTR_SKIP);

	if ( 'div' == $args['style'] ) {
		$tag = 'div';
		$add_below = 'comment';
	} else {
		$tag = 'li';
		$add_below = 'div-comment';
	}
?>
    <!-- heads up: starting < for the html tag (li or div) in the next line: -->
    <<?php echo $tag ?> <?php comment_class(empty( $args['has_children'] ) ? '' : 'parent') ?> id="comment-<?php comment_ID() ?>">
	<?php if ( 'div' != $args['style'] ) : ?>
	<div id="div-comment-<?php comment_ID() ?>" class="comment-body">
	<?php endif; ?>
	<div class="comment-author vcard">
	<?php if ($args['avatar_size'] != 0) echo get_avatar( $comment, $args['180'] ); ?>
	<?php printf(__('<cite class="fn">%s</cite> <span class="says">says:</span>'), get_comment_author_link()) ?>
	</div>
<?php if ($comment->comment_approved == '0') : ?>
	<em class="comment-awaiting-moderation"><?php _e('Your comment is awaiting moderation.') ?></em>
	<br />
<?php endif; ?>

	<div class="comment-meta commentmetadata"><a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>">
		<?php
			printf( __('%1$s at %2$s'), get_comment_date(),  get_comment_time()) ?></a><?php edit_comment_link(__('(Edit)'),'  ','' );
		?>
	</div>

	<?php comment_text() ?>

	<div class="reply">
	<?php comment_reply_link(array_merge( $args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
	</div>
	<?php if ( 'div' != $args['style'] ) : ?>
	</div>
	<?php endif; ?>
<?php }

/*------------------------------------*\
	Actions + Filters + ShortCodes
\*------------------------------------*/

// Add Actions
add_action('init', 'greatytheme_header_scripts'); // Add Custom Scripts to wp_head
add_action('get_header', 'enable_threaded_comments'); // Enable Threaded Comments
add_action('wp_enqueue_scripts', 'greatytheme_styles'); // Add Theme Stylesheet
add_action('init', 'register_html5_menu'); // Add HTML5 Blank Menu
add_action('widgets_init', 'my_remove_recent_comments_style'); // Remove inline Recent Comment Styles from wp_head()
add_action('init', 'html5wp_pagination'); // Add our HTML5 Pagination

// Remove Actions
remove_action('wp_head', 'feed_links_extra', 3); // Display the links to the extra feeds such as category feeds
remove_action('wp_head', 'feed_links', 2); // Display the links to the general feeds: Post and Comment Feed
remove_action('wp_head', 'rsd_link'); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action('wp_head', 'wlwmanifest_link'); // Display the link to the Windows Live Writer manifest file.
remove_action('wp_head', 'index_rel_link'); // Index link
remove_action('wp_head', 'parent_post_rel_link', 10, 0); // Prev link
remove_action('wp_head', 'start_post_rel_link', 10, 0); // Start link
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0); // Display relational links for the posts adjacent to the current post.
remove_action('wp_head', 'wp_generator'); // Display the XHTML generator that is generated on the wp_head hook, WP version
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);

// Add Filters
add_filter('avatar_defaults', 'greatythemegravatar'); // Custom Gravatar in Settings > Discussion
add_filter('body_class', 'add_slug_to_body_class'); // Add slug to body class (Starkers build)
add_filter('widget_text', 'do_shortcode'); // Allow shortcodes in Dynamic Sidebar
add_filter('widget_text', 'shortcode_unautop'); // Remove <p> tags in Dynamic Sidebars (better!)
add_filter('wp_nav_menu_args', 'my_wp_nav_menu_args'); // Remove surrounding <div> from WP Navigation
// add_filter('nav_menu_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected classes (Commented out by default)
// add_filter('nav_menu_item_id', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected ID (Commented out by default)
// add_filter('page_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> Page ID's (Commented out by default)
add_filter('the_category', 'remove_category_rel_from_category_list'); // Remove invalid rel attribute
add_filter('the_excerpt', 'shortcode_unautop'); // Remove auto <p> tags in Excerpt (Manual Excerpts only)
add_filter('the_excerpt', 'do_shortcode'); // Allows Shortcodes to be executed in Excerpt (Manual Excerpts only)
add_filter('excerpt_more', 'html5_blank_view_article'); // Add 'View Article' button instead of [...] for Excerpts
add_filter('show_admin_bar', 'remove_admin_bar'); // Remove Admin bar
add_filter('style_loader_tag', 'html5_style_remove'); // Remove 'text/css' from enqueued stylesheet
add_filter('post_thumbnail_html', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to thumbnails
add_filter('image_send_to_editor', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to post images

// Remove Filters
remove_filter('the_excerpt', 'wpautop'); // Remove <p> tags from Excerpt altogether



?>
