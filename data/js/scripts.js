(function($){
    "use strict";

    $(window).load(function() {

        // Preloader
        $('.loader').fadeOut();
        $('.loader-mask').delay(350).fadeOut('slow');

        $(window).trigger("resize");
        

    });

    $(document).ready(function(){

        $(window).trigger("resize");
        initOwlCarousel();
        initTextrotator();
        initOnepagenav();
    });
   



    // Closes the Responsive Menu on Menu Item Click
    function initOnepagenav(){
        
        $('.navigation-overlay .navbar-collapse ul li a, .nav-type-4 .navbar-collapse ul li a').on('click',function() {
            $('.navbar-toggle:visible').click();
        });

        // Smooth Scroll Navigation
        $('.local-scroll').localScroll({offset: {top: -60},duration: 1500,easing:'easeInOutExpo'});
        $('.local-scroll-no-offset').localScroll({offset: {top: 0},duration: 1500,easing:'easeInOutExpo'});
    }



    /* Text Rotator
    -------------------------------------------------------*/
    function initTextrotator(){

        $(".rotate").textrotator({
            animation: "dissolve",
            separator: ",",
            speed: 3000 
        });

    }


    /* Lightbox popup
    -------------------------------------------------------*/

    $('.lightbox-gallery').magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            titleSrc: 'title',
            verticalFit: true
        }
    });


    $(".lightbox-video").magnificPopup(); 



    /* Owl Carousel
    -------------------------------------------------------*/
    function initOwlCarousel(){
        (function($){
            "use strict";

            var owlPromo = $("#owl-promo");
            owlPromo.owlCarousel({
         
                slideSpeed: 300,
                pagination: false,
                paginationSpeed: 400,
                singleItem: true
         
            });


        })(jQuery);
    };


    // Wow Animations

    var wow = new WOW({
        offset: 50,
        mobile: false
    });

    wow.init();

})(jQuery);



