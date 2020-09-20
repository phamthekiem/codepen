
(function($) {
	'use strict';

	$(function() {
        // menu sidebar //
        $('.menu-item-has-children > a').removeAttr('href');
		$('.menu-item-has-children > a').click(function(event) {
            $(this).next('.sub-menu').slideToggle();
        });
         jQuery(".chat_fb").click(function() {
         jQuery('.fchat').toggle('slow');
          });
		//////sticky
		 //$(".rst-bottom-header").sticky({topSpacing:0});
		/* ==========================================================================
	   		Main Slide
	    	========================================================================== */
        $(".slider-gallery").owlCarousel({
            items : 3,
            itemsCustom : false,
            itemsDesktop : [1199,3],
            itemsTablet: [768,2],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            singleItem : false,
            itemsScaleUp : false,
         
            //Basic Speeds
            slideSpeed : 200,
            paginationSpeed : 800,
            rewindSpeed : 1000,
         
            //Autoplay
            autoPlay : true,
            stopOnHover : false,
            //Pagination
            pagination : true,
            paginationNumbers: false,
         
            // Responsive 
            responsive: true,
            responsiveRefreshRate : 200,
            responsiveBaseWidth: window,
        });
        
        $(".rst-dichvu-home").owlCarousel({
            items : 4,
            itemsCustom : false,
            itemsDesktop : [1199,3],
            itemsTablet: [768,2],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            singleItem : false,
            itemsScaleUp : false,
         
            //Basic Speeds
            slideSpeed : 200,
            paginationSpeed : 800,
            rewindSpeed : 1000,
         
            //Autoplay
            autoPlay : true,
            stopOnHover : false,
            //Pagination
            pagination : true,
            paginationNumbers: false,
         
            // Responsive 
            responsive: true,
            responsiveRefreshRate : 200,
            responsiveBaseWidth: window,
        });

        $(".taxi-blog").owlCarousel({
            items : 3,
            itemsCustom : false,
            itemsDesktop : [1199,3],
            itemsTablet: [768,2],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            singleItem : false,
            itemsScaleUp : false,
         
            //Basic Speeds
            slideSpeed : 200,
            paginationSpeed : 800,
            rewindSpeed : 1000,
         
            //Autoplay
            autoPlay : true,
            stopOnHover : false,
            //Pagination
            pagination : true,
            paginationNumbers: false,
         
            // Responsive 
            responsive: true,
            responsiveRefreshRate : 200,
            responsiveBaseWidth: window,
        });
        $(".rst-right-giothieu").owlCarousel({
            navigation      : true,
            slideSpeed      : 300,
            paginationSpeed : 400,
            singleItem      : true,
            xautoPlay        : 5000,
            dots: false,
            transitionStyle : "fade"  // goDown,backSlide,fadeUp,fade
        });
        $(".slider-taxi").owlCarousel({
            navigation      : true,
            slideSpeed      : 300,
            paginationSpeed : 400,
            singleItem      : true,
            /* autoPlay        : 5000, */
            transitionStyle : "fade"  // goDown,backSlide,fadeUp,fade
        });
        $(".rst-main-slide").owlCarousel({
            navigation      : true,
            slideSpeed      : 300,
            paginationSpeed : 400,
            singleItem      : true,
            /* autoPlay        : 5000, */
            transitionStyle : "fade"  // goDown,backSlide,fadeUp,fade
        });
        $(".rst-single-slide").owlCarousel({
            navigation      : true,
            slideSpeed      : 300,
            paginationSpeed : 400,
            singleItem      : true,
            autoPlay        : 5000,
            transitionStyle : "fade"  // goDown,backSlide,fadeUp,fade
        });
        $(".rst-gioithieu-slide").owlCarousel({
            navigation      : true,
            slideSpeed      : 300,
            paginationSpeed : 400,
            singleItem      : true,
            autoPlay        : 5000,
            transitionStyle : "goDown"  // goDown,backSlide,fadeUp,fade
        });

        /* ==========================================================================
            Menu Mobile
            ========================================================================== */
        $(".rst-main-navigation li.menu-item-has-children").prepend("<span class='rst-open-menu-mobile'></span>");
        $(".rs-toggle-menu-sidebar").click(function() {
            $(this).toggleClass("active");
            // Sidebar menu
            if ($(this).hasClass("active")) {
                $(".rst-main-navigation").stop().animate({
                    right: 0,
                }, 300);
                $(".overlay-mobile").show();
            } else {
                $(".rst-main-navigation").stop().animate({
                    right: -320,
                }, 300);
                $(".overlay-mobile").hide();
            }
        });
        $(".rst-open-menu-mobile").on("click", function(event) {
            $(this).toggleClass("active");
            $(this).parent("li").siblings().find("ul").slideUp();
            $(this).parent("li").siblings().find(".rst-open-menu-mobile").removeClass("active");
            $(this).siblings('ul').slideToggle();
        });

        $(".overlay-mobile,.rst-top-main-navigation .rst-toggle-menu").click(function(){
            $(".rs-toggle-menu-sidebar").click();
        });

        var wow = new WOW(
            {
                boxClass:     'rst-box-category',
                animateClass: 'animated',
                offset:       0,
                mobile:       true,
                live:         true
            }
        )
       wow.init();

        $('.rs-counter').counterUp({
            delay: 5,
            time: 500
        });
		
        // Back to top
        jQuery('.rst-backtotop i').on('click',function(e){
            e.preventDefault();
            jQuery('html, body').animate({scrollTop:0}, 'slow');
        });

        // $('.rst-info-tabs').not(":first").hide();
        //  $('.rst-title-tabs:first .rst-inner-tabs').addClass('active');

        // $('.rst-title-tabs').click(function(){
        //     $(this).next().slideToggle();
        //     $(this).find ('.rst-inner-tabs').toggleClass( "active" );
        //     $(this).parent().siblings().find('.rst-info-tabs').slideUp();
        //     $(this).parent().siblings().find('.rst-inner-tabs').removeClass("active");
        // });   

         $(".rst-progess-bar").each(function(){
            var percent = $(this).attr("data-percent");
            $(this).animate({
                width: percent
            },1000);
        });

         $(".rst-slider-logo").owlCarousel({
            items : 5,
            itemsCustom : false,
            itemsDesktop : [1199,4],
            itemsTablet: [768,3],
            itemsTabletSmall: false,
            itemsMobile : [479,2],
            singleItem : false,
            itemsScaleUp : false,
         
            //Basic Speeds
            slideSpeed : 200,
            paginationSpeed : 800,
            rewindSpeed : 1000,
         
            //Autoplay
            autoPlay : true,
            stopOnHover : false,
            //Pagination
            pagination : true,
            paginationNumbers: false,
         
            // Responsive 
            responsive: true,
            responsiveRefreshRate : 200,
            responsiveBaseWidth: window,
         
        })
		// share social
        $(".rst-bottom-new > a").click(function(event) {
			event.preventDefault();
			$(this).next('.rst-list-social').slideToggle(400);         
        });
		
		$('.rst-info-page').matchHeight();
	}); // end document ready

    $(window).resize(function(){

    });// end window resize

})(jQuery) // end JQuery namespace