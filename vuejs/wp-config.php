<?php
define( 'WP_CACHE', true ); // Added by WP Rocket
// Generic variables for a global environment
define( 'APP_ROOT'          , dirname(realpath(__FILE__)) );
define('WP_HOME','https://mic-brussels.be' );
define( 'PLL_CACHE_HOME_URL', false );
// Must Use Plugins
define( 'WPMU_PLUGIN_DIR'   , APP_ROOT . '/app/mu-plugins' );
define( 'WPMU_PLUGIN_URL'   , WP_HOME . '/app/mu-plugins' );
// SSL Data
define( 'FORCE_SSL_ADMIN', false );
define( 'FORCE_SSL_LOGIN'   , false );
define( 'DB_USER'           , "micbrussrynew" );
define( 'DB_PASSWORD'       , "NjgYnER94DQS" );
define( 'DB_HOST'           , "micbrussrynew.mysql.db" );
// Development variables
// define( 'WP_DEBUG'            , isset( $_GET[ 'mic_debug' ] ) );
define( 'WP_DEBUG', true );
// define( 'WP_DEBUG', false );
define( 'CONCATENATE_SCRIPTS' , false );
// Database configuration variables
define( 'DB_NAME'           , "micbrussrynew" );
define( 'DB_CHARSET'        , 'utf8' );
// Let WP Skip the wp-content directory while updating
define( 'CORE_UPGRADE_SKIP_NEW_BUNDLED', true );
// Security salts and variables
define( 'AUTH_KEY',         'A7^IBM3rGs^uPkw_(k/@RPv^x=?X!Z4:8NH=7&$7UuE.aF{8|-PVq+Ae9^!{4?<S' );
define( 'SECURE_AUTH_KEY',  '-?CWa7]$q4]o*sU4X[6AY%3g+51;@nhO5=Ac5ObH;ww]lUtt07K|,{4JbJHY;e==' );
define( 'LOGGED_IN_KEY',    'HIQXSBcxR}0]-6B*{/Zj t[:e/].mJ84{Qw|66lpcH!uB$JOt*Thc.@|yU.uvz)%' );
define( 'NONCE_KEY',        'Px,F9heDVagO+j/c^s/cXmb}t=8nr3%eVy,of66XfuRc0nY+Ax{so(uIilloZ((D' );
define( 'AUTH_SALT',        'qpAW{dw2DQlBo U29t^5Kt-{Ym/&v767luBI HNT3!AAx^vy.D}Q]|N~S<1jK(-E' );
define( 'SECURE_AUTH_SALT', '%>v158_gqKa}8B#@)Qh<WLIV#@{*xu%Y[/}|xfCIs+Rip#u{{qcc=@7w<G`]Z!ib' );
define( 'LOGGED_IN_SALT',   '[d|O#9n:uT%,$4$Zp!Q[03K@dN9F+nYQ-zz8qVI{Y+:-Qrn/aMC`wo@z,rmFd!wl' );
define( 'NONCE_SALT',       '/Q;h~5U.$X|~KQ#7a|nE^5>;.7n8g=s-Dy.b<X+r#yJJ<./;CHbUTu3$]D*C`~`-' );
$table_prefix  = 'mic_';
define( 'WPLANG', 'fr_FR' );
if ( ! defined( 'ABSPATH' ) ) define( 'ABSPATH', dirname(__FILE__) . '/wordpress/' );
require_once(ABSPATH . 'wp-settings.php');
