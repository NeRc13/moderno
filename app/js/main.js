$(function () {

    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "12px",
        ratedFill: "#ffa726",
        readOnly: true
    });

    $('.product__slider-body').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
    });

    var mixer = mixitup('.product__body-box');


});
