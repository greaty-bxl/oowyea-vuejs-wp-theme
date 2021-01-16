<?php 

acf_form_head();

do_action( 'before_document' );

$previous_url = $_SERVER['HTTP_REFERER'];
$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
?><!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php the_title() ?> | <?php bloginfo('name'); ?></title>
		<!-- Previous url: <?php echo $previous_url ?> -->
		<!-- Current url: <?php echo $actual_link ?> -->

        <!-- <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed"> -->

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">
		<script>
			window.ajaxurl = "<?= admin_url('admin-ajax.php'); ?>";
			window.wp = {};
		</script>
		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_template_directory_uri(); ?>',
            tests: {}
        });

        
        </script>

	</head>
	<body <?php //body_class(); ?>>

		<!-- wrapper -->
		<div class="wrapper">