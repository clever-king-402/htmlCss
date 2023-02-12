<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name');?></title>
    <?php  wp_head(); ?>
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url');?>">
</head>
<body>
    <div class="container">
    <header class='flex'>
        <div class="logo"><?php the_custom_logo(); ?></div>
        <div><?php bloginfo('admin_email');?></div>
    </header>
    <nav>
        <?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>
</nav>
<main>
<?php
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
        the_title('<h3>','</h3>');
        the_content();
    endwhile;
endif;
?>
</main>
    </div>
    <?php wp_footer(); ?>
</body>
</html>