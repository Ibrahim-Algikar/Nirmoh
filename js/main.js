$( document ).ready(function() {

    // vedio-btn
    // $('.play-button').click(function(){
    //     $('.home-banner-wrp .left-wrp').addClass('active');
	// 	$('.home-banner-slider iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
	// 	// $('.slider-3-1.owl-carousel .owl-item .slider-3-play-button').addClass('active');
    // })

	// $('.pause-button').click(function(){
	// 	$('.home-banner-slider iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    //     $('.home-banner-wrp .left-wrp').removeClass('active');
	// });

    // Home Great Vibe section
    setTimeout(function(){
        $('.tabcontent').removeClass('tabcontent-on-load');
    }, 100)
    $('.tab-wrp .tab').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('data-tab');

        $(this).closest('.tab-wrp').siblings('.tabcontent').hide().css("display", "none");
        $('#' + target).fadeIn().css("display", "flex");

        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        $('.home-project-section .tab-wrp select').removeClass('active');
        $('.select-' + target).addClass('active');
    })

    // click on tab scroll to that section
    // $(".navbar-menu .navbar-start a, #anchorage-nav, .sub-nav-wrp .tab").click(function(t) {
    $("#anchorage-nav, .sub-nav-wrp .tab").click(function(t) {
        t.preventDefault();
        var e = $(this).attr("data-tab");
        $("html, body").animate({
            scrollTop: $('#'+e).offset().top - $("header").innerHeight() - 2
        }, 500), $(this).addClass("active").siblings().removeClass("active");
    })

    //HamBurger
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $(".navbar-item").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
    });
    
    // Header Enquire Now Button
    $(".enquire-button-fixed, .eq-btn-mobile, .dwnBro, .header .enquire-button, .brochure-btn, .get-in-touch .button, .price-btn").click(function() {
        $(".sec-eq").addClass("show");
        $(".sec-eq").removeClass("static");
        $("body").addClass("scroll-none body-form-active");
    });
    $(".closeIcon").click(function() {
        $(".sec-eq").removeClass("show");
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
        $(".sec-eq").addClass("static");
        $("body").removeClass("scroll-none body-form-active");
    });
    
    // Disclaimer Button
    $(".disclaimer-agree-btn").click(function() {
        $(".disclaimer-wrp").removeClass("active");
    });

    // Expand div on click
    $(".add-image").click(function() {
        $(this).toggleClass("is-active");
        $(this).siblings('.heading-wrapper').toggleClass("is-active");
    });

    // Accordion
      $('.tab-accordion .accordion-section-title').click(function(e) {
        var currentAttrValue = $(this).attr('data-acc');
  
        if ($(e.target).is('.active')) {
            $(this).removeClass('active');
            $(this).siblings().slideUp(300).removeClass('open');
        } else {
            $(this).parent().siblings().children('.accordion-section-title').removeClass('active');
            $(this).parent().siblings().children('.accordion-section-content').slideUp(300).removeClass('open');
  
            $(this).addClass('active');
            $('#' + currentAttrValue).slideDown(300).addClass('open');
        }
      });

    // Google map
    $('.map-btn').click(function(e){
        e.preventDefault();
        if($('.s-map').hasClass('active')){
            $('.s-map').removeClass('active');
            $('.g-map').addClass('active');
            $(this).text('View on Street map')
        }else{
            $('.s-map').addClass('active');
            $('.g-map').removeClass('active');
            $(this).text('View on Google map')
        }
    });

    // Play pause video
	$('.video-thumb').click(function(){
		$(this).siblings('.iframe-wrp').children('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
		$(this).parent('.normal-video').addClass('active');
	});
	$('.pause-button').click(function(){
		$(this).siblings('.iframe-wrp').children('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
		$(this).parent('.normal-video').removeClass('active');
	});

	$('.home-spaces-section .video-thumb').click(function(){
		$('.slider-main').addClass('video-active');
		$('.close-burger-btn').addClass('is-active');
		$(this).parents('.normal-video').addClass('active');
		$(this).siblings('.iframe-wrp').children('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
	});
	$('.home-spaces-section .pause-button').click(function(){
		$(this).siblings('.iframe-wrp').children('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
		$(this).parents('.normal-video').removeClass('active');
		$('.slider-main').removeClass('video-active');
		$('.close-burger-btn').removeClass('is-active');
	});

    // mob-dropdown
    $(window).load(function(){
        $('.mob-dropdown').each(function(){
            var tab_val = $(this).find('.tab.active').text();
            // console.log(tab_val)
            $(this).attr('data-before', tab_val);
        })
        setTimeout(function(){
            $('a[data-src="#down_broch"]').fancybox().trigger('click');
        }, 5000)
    })
    if($(window).width()<1200){
        $('.mob-dropdown').children('div').slideUp();
        $('.mob-dropdown').on('click',function(){
            // $(this).toggleClass('open')
            if($(this).hasClass('open')){
                $(this).children('div').slideUp();
                $(this).removeClass('open');
            }else{
                $(this).children('div').slideDown();
                $(this).addClass('open');
            }
        });
        // $('.mob-dropdown').addClass('open');
    }

    /* Horizontal slider */
    $(window).bind('mousewheel', function(e){
        if($(window).width() > 1023){
            // if (e.originalEvent.deltaX > 0 || e.originalEvent.deltaX < 0) {
            //     // Prevent the default action of the touchpad's horizontal scroll
            //     console.log('s');
            //     e.preventDefault();
            // }
            if ($('body').hasClass('scroll-none')) {
            }else{
                if(e.originalEvent.wheelDelta /120 >= 0) {
                    console.log(e.originalEvent.wheelDelta);
                    if($('body').hasClass('up')){
                        // console.log('up');
                        owl.trigger('prev.owl.carousel');
                        $('body').removeClass('up');
                        $('body').removeClass('down');
                        setTimeout(function(){
                            $('body').addClass('up');
                            $('body').addClass('down');
                        }, 2000);
                    }
                }
                else{
                    console.log(e.originalEvent.wheelDelta);
                    if($('body').hasClass('down')){
                        // console.log('down');
                        owl.trigger('next.owl.carousel');
                        $('body').removeClass('up');
                        $('body').removeClass('down');
                        setTimeout(function(){
                            $('body').addClass('up');
                            $('body').addClass('down');
                        }, 2000);
                    }
                }
            }
        }
    });

    // animation
    function anim_r_t_l_wrp(){
        $('.anim_r_t_l_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 90 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_r_t_l');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    function anim_l_t_r_wrp(){
        $('.anim_l_t_r_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 90 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_l_t_r');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    function anim_t_t_b_wrp(){
        $('.anim_t_t_b_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 90 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_t_t_b');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    function anim_b_t_t_wrp(){
        $('.anim_b_t_t_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 90 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_b_t_t');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    function anim_t_t_t_wrp(){
        $('.anim_t_t_t_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 90 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_t_t_t');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    function anim_fade_in_wrp(){
        $('.anim_fade_in_wrp').each(function(){
            var window_scrollTop = $(window).scrollTop();
            var window_60 = 90 /  100 * $(window).height();
            var scroll_item = $(this);
            var item_scrollTop = $(scroll_item).offset().top - window_60;
    
            if (window_scrollTop > item_scrollTop) {
                $(this).addClass('anim_fade_in');
            } else {
                // $(this).removeClass('img-l-r-anim');
            }
        })
    };
    
    anim_r_t_l_wrp();
    anim_l_t_r_wrp();
    anim_t_t_b_wrp();
    anim_b_t_t_wrp();
    anim_t_t_t_wrp();
    anim_fade_in_wrp();
    
    $(window).scroll(function() { 

        if($(window).scrollTop() > 50){
            $('.header').addClass('active')
        }else{
            $('.header').removeClass('active')
        }
    
        // console.log('scorll');
        anim_r_t_l_wrp();
        anim_l_t_r_wrp();
        anim_t_t_b_wrp();
        anim_b_t_t_wrp();
        anim_t_t_t_wrp();
        anim_fade_in_wrp();
    }).scroll();
});

$(document).on('click', '.swiper-pagination-bullet, .mob-dropdown .tab', function(){
    var tab_val = $(this).text();
    $(this).parents('.mob-dropdown').attr('data-before', tab_val);
    // console.log(tab_val)
});