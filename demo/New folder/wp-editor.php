<?php 
	add_filter('use_block_editor_for_post', '__return_false');

	require get_template_directory() . '/template-page/custom-new.php';
 ?>

 <?php echo do_shortcode('[rev_slider alias="slider-1"]'); ?>

 <p><?php echo wp_trim_words( get_the_content(), 25, '.' ); ?></p>

 <?php dynamic_sidebar( 'siderbar-product' ); ?>

<?php echo mysql2date( 'F j, Y');  ?>

<?
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page(array(
		'page_title' 	=> 'Theme options', // Title hiển thị khi truy cập vào Options page
		'menu_title'	=> 'Theme options', // Tên menu hiển thị ở khu vực admin
		'menu_slug' 	=> 'theme-settings', // Url hiển thị trên đường dẫn của options page
		'capability'	=> 'edit_posts',
		'redirect'	=> false
	));
}
?>

 <link rel="author" href="https://plus.google.com/u/0/111412027640655042572"/>


<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/assets/css/custom.css">

<script src="<?php bloginfo('template_directory'); ?>/assets/js/custom.js"></script>



<!-- FB -->
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.2&appId=826865041012924&autoLogAppEvents=1"></script>
<div  class="fb-like text-right"  data-share="true"  data-width="500"  data-show-faces="true"></div>



-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
display: -webkit-box;


display: -webkit-box;
-webkit-line-clamp: 2;
overflow: hidden;
text-overflow: ellipsis;
-webkit-box-orient: vertical;

text-align: justify;

<!--  -->

overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
width: 200px;



white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;

// Enable WP_DEBUG mode
define( 'WP_DEBUG', true );
// Enable Debug logging to the /wp-content/debug.log file
define( 'WP_DEBUG_LOG', true );
// Disable display of errors and warnings 
define( 'WP_DEBUG_DISPLAY', false );
@ini_set( 'display_errors', 0 );
// Use dev versions of core JS and CSS files (only needed if you are modifying these core files)
define( 'SCRIPT_DEBUG', true );


/home/9014-cmswebna/applications/cms/views/site/kopo/default
/home/9014-cmswebna/applications/cms/static/site/kopo/template/default/css


<a href="https://www.facebook.com/sharer/sharer.php?u=#url" target="_blank">Share</a>

# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]


</IfModule>

# END WordPress

# Wordfence WAF
<Files ".user.ini">
<IfModule mod_authz_core.c>
	Require all denied
</IfModule>
<IfModule !mod_authz_core.c>
	Order deny,allow
	Deny from all
</IfModule>
</Files>

# END Wordfence WAF
