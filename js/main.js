$(function () {
    $('.slider').slick({
        slidesToShow: 1,
        arrows: true,
        asNavFor: '.thumbs'

    })
    $('.thumbs').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider',
        dots: false,
        focusOnSelect: true
    })
});