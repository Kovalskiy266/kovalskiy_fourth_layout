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
    $('.thirth_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true, 
        autoplaySpeed: 10000,
        
    });
    // $('.first_slider').slick({
    //     arrows: false,
    //     dots: false,
    //     infinite: true,
      
    // });

    // if (window.matchMedia("(max-width: 750px)").matches) {
    //     $('.first_slider').slick({
    //         arrows: false, 
    //         dots: true,
    //         infinite: true,
    //         autoplay: true
    //     })
    // } 

});
// var sld = function() {
//     if ($(window).width() > 320) {
//     $('.slider').bxSlider({
//     auto: true,
//     pause: 2000,
//     autoHover: true
//     });