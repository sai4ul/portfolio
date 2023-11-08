/*----------------------------------------------
    Index Of Script
------------------------------------------------

    :: Loader                   :: include html
    :: Sticky And Scroll Up     :: Progress
    :: data-background          :: Overlay
    :: One Page Nav             :: Slick Nav
    :: Scroll Up                :: Hover section Tilt Effect
    :: WOW active               :: Global slick slicer control

------------------------------------------------
    End-of Script
------------------------------------------------*/


(function ($) {
    "use strict";

        /*-----------------------------------
            Loader
        -----------------------------------*/
        $(document).ready(function () {
            $('.preloader').fadeOut('slow');
        });

        /*-----------------------------------
            Sticky And Scroll Up
        -----------------------------------*/
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 440) {
              $(".header-sticky").removeClass("sticky-bar");
              $('#back-top').fadeOut(530);
            } else {
              $(".header-sticky").addClass("sticky-bar");
              $('#back-top').fadeIn(520);
            }
          });
		  

        /*-----------------------------------
            Data-background
        -----------------------------------*/
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
        });

        /*-----------------------------------
            One Page Nav
        -----------------------------------*/
        if ($(".header-area").length) {
            var top_offset = $('.header-area').height() - 11;
            $('.main-menu nav ul').onePageNav({
            currentClass: 'active',
            scrollOffset: top_offset,
            });
        }

        /*-----------------------------------
            Scroll Up
        -----------------------------------*/
        $('#back-top a').on("click", function () {
            $('body,html').animate({
            scrollTop: 0
            }, 730);
            return false;
        });

        /*-----------------------------------
            slick Nav
        -----------------------------------*/
        var menu = $('ul#navigation');
        if(menu.length){
            menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol:'-'
            });
        };
        /*-----------------------------------
            WOW active
        -----------------------------------*/
        new WOW().init();

                
        /*-----------------------------------
            Global slick slicer control
        -----------------------------------*/
        var globalSlickInit = $('.global-slick-init');
        if (globalSlickInit.length > 0) {

            //todo have to check slider item
            $.each(globalSlickInit, function (index, value) {
                if ($(this).children('div').length > 1) {

                    //todo configure slider settings object
                    var sliderSettings = {};
                    var allData = $(this).data();
                    var infinite = typeof allData.infinite == 'undefined' ? false : allData.infinite;
                    var arrows = typeof allData.arrows == 'undefined' ? false : allData.arrows;
                    var autoplay = typeof allData.autoplay == 'undefined' ? false : allData.autoplay;
                    var focusOnSelect = typeof allData.focusonselect == 'undefined' ? false : allData.focusonselect;
                    var swipeToSlide = typeof allData.swipetoslide == 'undefined' ? false : allData.swipetoslide;
                    var slidesToShow = typeof allData.slidestoshow == 'undefined' ? 1 : allData.slidestoshow;
                    var slidesToScroll = typeof allData.slidestoscroll == 'undefined' ? 1 : allData.slidestoscroll;
                    var speed = typeof allData.speed == 'undefined' ? '500' : allData.speed;
                    var dots = typeof allData.dots == 'undefined' ? false : allData.dots;
                    var cssEase = typeof allData.cssease == 'undefined' ? 'linear' : allData.cssease;
                    var prevArrow = typeof allData.prevarrow == 'undefined' ? '' : allData.prevarrow;
                    var nextArrow = typeof allData.nextarrow == 'undefined' ? '' : allData.nextarrow;
                    var centerMode = typeof allData.centermode == 'undefined' ? false : allData.centermode;
                    var centerPadding = typeof allData.centerpadding == 'undefined' ? false : allData.centerpadding;
                    var rows = typeof allData.rows == 'undefined' ? 1 : parseInt(allData.rows);
                    var autoplay = typeof allData.autoplay == 'undefined' ? false : allData.autoplay;
                    var autoplaySpeed = typeof allData.autoplayspeed == 'undefined' ? 2000 : parseInt(allData.autoplayspeed);
                    var lazyLoad = typeof allData.lazyload == 'undefined' ? false : allData.lazyload; // have to remove it from settings object if it undefined
                    var appendDots = typeof allData.appenddots == 'undefined' ? false : allData.appenddots;
                    var appendArrows = typeof allData.appendarrows == 'undefined' ? false : allData.appendarrows;
                    var asNavFor = typeof allData.asnavfor == 'undefined' ? false : allData.asnavfor;
                    var verticalSwiping = typeof allData.verticalswiping == 'undefined' ? false : allData.verticalswiping;
                    var vertical = typeof allData.vertical == 'undefined' ? false : allData.vertical;
                    var fade = typeof allData.fade == 'undefined' ? false : allData.fade;
                    var rtl = typeof allData.rtl == 'undefined' ? false : allData.rtl;
                    var responsive = typeof $(this).data('responsive') == 'undefined' ? false : $(this).data('responsive');

                    //slider settings object setup
                    sliderSettings.infinite = infinite;
                    sliderSettings.arrows = arrows;
                    sliderSettings.autoplay = autoplay;
                    sliderSettings.focusOnSelect = focusOnSelect;
                    sliderSettings.swipeToSlide = swipeToSlide;
                    sliderSettings.slidesToShow = slidesToShow;
                    sliderSettings.slidesToScroll = slidesToScroll;
                    sliderSettings.speed = speed;
                    sliderSettings.dots = dots;
                    sliderSettings.cssEase = cssEase;
                    sliderSettings.prevArrow = prevArrow;
                    sliderSettings.nextArrow = nextArrow;
                    sliderSettings.rows = rows;
                    sliderSettings.autoplaySpeed = autoplaySpeed;
                    sliderSettings.autoplay = autoplay;
                    sliderSettings.verticalSwiping = verticalSwiping;
                    sliderSettings.vertical = vertical;
                    sliderSettings.rtl = rtl;

                    if (centerMode != false) {
                        sliderSettings.centerMode = centerMode;
                    }
                    if (centerPadding != false) {
                        sliderSettings.centerPadding = centerPadding;
                    }
                    if (lazyLoad != false) {
                        sliderSettings.lazyLoad = lazyLoad;
                    }
                    if (appendDots != false) {
                        sliderSettings.appendDots = appendDots;
                    }
                    if (appendArrows != false) {
                        sliderSettings.appendArrows = appendArrows;
                    }
                    if (asNavFor != false) {
                        sliderSettings.asNavFor = asNavFor;
                    }
                    if (fade != false) {
                        sliderSettings.fade = fade;
                    }
                    if (responsive != false) {
                        sliderSettings.responsive = responsive;
                    }
                    $(this).slick(sliderSettings);
                }
            });
        }

        /*----------------------------------------------
            include html
        ----------------------------------------------*/
        $(function(){$("*[include-html]").each(function(){var t=$(this).attr("include-html"),u=this.id;jQuery.ajax({url:t,success:function(t){$("#"+u).html(t)},error:function(n,c,i){var s=n.status+": "+n.statusText;$("#"+u).html(t+"-"+s)}})})});


        /*----------------------------------------------
            Progress
        ----------------------------------------------*/
        $('.bar-1').rProgressbar({
            percentage: 90,
            fillBackgroundColor: 'var(--main-color-one)',
            height:8,
            borderRadius:'var(--radius-two)'
        });
		
        $('.bar-2').rProgressbar({
            percentage: 80,
            fillBackgroundColor: 'var(--main-color-two)',
            height:8,
            borderRadius:'var(--radius-two)'
        });
		
        $('.bar-3').rProgressbar({
            percentage: 60,
            fillBackgroundColor: 'var(--main-color-three)',
            height:8,
            borderRadius:'var(--radius-two)'
        });
		
        $('.bar-4').rProgressbar({
            percentage: 45,
            fillBackgroundColor: 'var(--main-color-four)',
            height:8,
            borderRadius:'var(--radius-two)'
        });
		
        $('.bar-5').rProgressbar({
            percentage: 20,
            fillBackgroundColor: 'var(--main-color-five)',
            height:8,
            borderRadius:'var(--radius-two)'
        });
		
        $('.bar-6').rProgressbar({
            percentage: 20,
            fillBackgroundColor: 'var(--main-color-two)',
            height:8,
            borderRadius:'var(--radius-two)'
        });

		
        /*-----------------------------------
            Overlay
        -----------------------------------*/
        $(".snake").snakeify({
            speed: 260
        });

		
        /*-----------------------------------
            Hover section Tilt Effect
        -----------------------------------*/
        $('.tilt-effect').tilt({
            maxTilt: 4,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            speed: 400,
            transition: true
        });

     
}(jQuery));
