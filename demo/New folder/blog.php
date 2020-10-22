<?php

    /* Template Name: Blog */

    get_header();

?>

    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

      <!-- end:main-header -->

    <div class="rst-main-content rst-content-page">

        <?php get_template_part( 'template-parts/banner'); ?>

        <?php 

            $query = new Wp_Query (array(

                    'posts_per_page' => '5',

            ));

         ?>

        <div class="container">

            <div class="rst-content-left">

            <?php if ($query->have_posts()): while ($query->have_posts()) : $query->the_post() ?>



                   <div class="rst-tour-item rst-blog-item ">

                    <div class="rst-inner-blog-item clearfix">

                        <div class="v_thumbnail">

                        <?php 

                        if (has_post_thumbnail()) {

                            printf('<a href="%s" title="%s" class="rst-thumb-post">%s</a>',get_permalink(  ),get_the_title(),get_the_post_thumbnail());

                         } ?>

                        </div>

                        <div class="v_content">

                        <h2><a title="<?php the_title()?>" href="<?php the_permalink()?>"><?php the_title(); ?></a></h2>

                       <div class="rst-meta-post">

                            <span><i class="fa fa-calendar" aria-hidden="true"></i><i><?php //the_date( ); ?></i></span>

                          <!-- <span><i class="fa fa-user" aria-hidden="true"></i><i><?php the_author( ); ?></i></span>  -->

                            <span><i class="fa fa-comments-o" aria-hidden="true"></i><i><?php echo $post->comment_count ?> Comments</i></span>

                        </div>

                        <!-- end rst-meta-post -->

                        <div class="rst-inner-des-shot">

                        <?php echo wp_trim_words( get_the_content(), 30, '(...)' ); ?>

                        </div>

                        <a class="v_readmore" href="<?php the_permalink()?>">(see more)</a>

                        </div>

                        <!-- end rst-inner-des-shot -->

                    </div>

                    <!--  <?php get_template_part( 'template-parts/social'); ?>  -->

                    <!-- end rst-social -->

                </div>

                <!-- end rst-tour-item -->

            <?php endwhile;endif; wp_reset_query(); ?>

                

                

            </div>

            <!-- end rst-content-left-->

           <?php get_sidebar(); ?>

            <div class="clear"></div>

        </div>

    </div>

    <!-- end: main-content  -->

        <?php get_template_part( 'template-parts/edit','page'); ?>

    </article><!-- #post-## -->



<?php

get_footer();



