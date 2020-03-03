$(".owl-carousel").owlCarousel({

    margin: 10,
    responsiveClass: true,
    responsive: {

        0:{
            items:1
        },
        680:{
            items:2
        },
        910:{
            items:3
        },

    }

});

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 10,
        depth: 600,
        modifier: 1,
        slideShadows: true,
    }
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(".gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    }
});