//Другий слайдер
$(document).ready(function(){
    $('.second_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true, 
        autoplaySpeed: 10000,
        // pauseOnHover: false,
        fade: true,
        // draggable: false,
        // pauseOnFocus: false,
        // pauseOnDotsHover: false,
        // fade: true, 
        // waitForAnimate: false
    });
});

$(document).ready(function(){
    $('.thirth_slider').slick({