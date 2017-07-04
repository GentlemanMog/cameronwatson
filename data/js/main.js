
(function ($) {
    'use strict';


    jQuery(document).ready(function () {

        
       /* Preloader */
        
        $(window).on('load', function() {
          $('body').addClass('loaded');
        });
        
        
        
       /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
        


       
       /* Scroll Naviagation Background Change with Sticky Navigation */
         
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
        
        
        
        
       /* Mobile Navigation Hide or Collapse on Click */
        
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
         });
         
        
        
        
        /* Scroll To Top */
        
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
       });
    
    
        $('.scroll-to-top').click(function(){
          $('html, body').animate({scrollTop : 0},800);
          return false;
        });
        
        
        
        
        /* Typed.js */
        
        $(window).load(function(){
        $(".typing").typed({
            strings: ["I am a Media Designer.", "I Design All sorts of things.", "Websites,", "Video Content,", "Games.", "Welcome to my Story."],    /* You can change the home section typing text from
                                                                                                here and do not use "&" use "and" */
            typeSpeed: 50,
            backDelay: 700,
            showCursor: false,
          });
         });
        
         
        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });

        
        
        
        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();


        /* Random background */

         
        /* Testimonial Carousel/Slider */

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: false,
            navigation: false,
            //navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "backSlide"
        });
        
        
        
        
        /* Statistics Counter */
        
        $('.statistics').appear(function() {
           var counter = $(this).find('.statistics-count');
           var toCount = counter.data('count');
      
           $(counter).countTo({
           from: 0,
           to: toCount,
           speed: 5000,
           refreshInterval: 50
           })
           });
           
          
         
         
              
           
            });

   })(jQuery);




