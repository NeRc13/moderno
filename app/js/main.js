// const { on } = require("gulp");

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


    $('.menu__btn').on('click', function () {
        $('.header__list').slideToggle();
    });

    $('.mobile__menu').on('click', function () {
        $('.header__box').toggleClass('active');
        $('.header__logo').css('display: none');
    });


    var mixer = mixitup('.product__body-box');


});
