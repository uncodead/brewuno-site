/*
------------------------------------------------------------------------
* Template Name    : Softie | SaaS & Software Html5 Landing Page      * 
* Author           : ThemesBoss                                       *
* Version          : 1.0.0                                            *
* Created          : September 2018                                   *
* File Description : Main Js file of the template                     *
*-----------------------------------------------------------------------
*/
$(window).on('scroll',function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".sticky").addClass("stickyadd");
    } else {
        $(".sticky").removeClass("stickyadd");
    }
});

$('.nav-item a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 50
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

$(document).on('click','.navbar-collapse.show',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

$("#navbarCollapse").scrollspy({
    offset: 70
});

$('.img-zoom').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
});


$("#owl-demo").owlCarousel({
    autoPlay:10000,
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
});

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
        $('.back_top').fadeIn();
    } else {
        $('.back_top').fadeOut();
    }
});
$('.back_top').on('click', function() {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
    return false;
});