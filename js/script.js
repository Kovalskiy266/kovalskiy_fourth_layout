//Другий слайдер

// var screen = window.matchMedia("(max-width:850px)");
// console.log(screen)


$(document).ready(function(){

    $('.second_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true, 
        autoplaySpeed: 10000,
        // pauseOnHover: false,
        fade: true
        // draggable: false,
        // pauseOnFocus: false,
        // pauseOnDotsHover: false,
        // fade: true, 
        // waitForAnimate: false
    });

    $('.thirth_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true, 
        autoplaySpeed: 10000
        
    });

    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
    // $('.menu-burger__header').click(function() {
    //     $('.menu-burger__header').toggleClass('open-menu');
    // });

    $('.first_slider').slick({
        
        // autoplay:true,
        arrows: false,
        dots: false,
        // speed: 300,
        infinite: true,
        slidesToShow: 3,
        responsive:[
            {
                breakpoint: 851,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow:2,
                    infinite: true,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 600,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow:1,
                infinite: true,
                slidesToScroll: 1
            }
        }


        ]
        })
});




 // $('.gamburger').click(function(){
    //     $('.menu').toggleClass('menu-active');
    // });

    // $('.menu a').click(function() {

    //     $('.menu').removeClass('menu-active');
    
    // });

// var sld = function() {
//     if ($(window).width() > 320) {
//     $('.slider').bxSlider({
//     auto: true,
//     pause: 2000,
//     autoHover: true
//     });