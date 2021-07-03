
$(document).ready(function(){

    $('.second_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true, 
        autoplaySpeed: 10000,
        fade: true
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

    $('.first_slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        responsive:[
            {
                breakpoint: 851,
                settings: {
                    autoplay:true,
                    dots: true,
                    arrows: false,
                    slidesToShow:2,
                    infinite: true,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '10px'
                }
            },
            {
            breakpoint: 600,
            settings: {
                autoplay:true,
                dots: true,
                arrows: false,
                slidesToShow:1,
                infinite: true,
                slidesToScroll: 1,
                centerPadding: '10px'
            }
        }
        ]
        })
});

