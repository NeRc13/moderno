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

    $('.product-one__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });


    var mixer = mixitup('.product__body-box');


});
