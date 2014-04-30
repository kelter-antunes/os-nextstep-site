$(window).load(function() {
    var maxRow = 20;
    for (var i = 0; i < maxRow; i++) {
        boxes = $("[data-row='" + i + "']");
        maxHeight = Math.max.apply(
            Math, boxes.map(function() {
                return $(this).height();
            }).get());
        boxes.height(maxHeight);
    };
});
var mCarousel;

function updateCarouselControls() {
    if ($('.m-carousel-inner').children(':last').hasClass('m-active')) {
        $('.pxs_next').hide();
    } else {
        $('.pxs_next').show();
    }
    if ($('.m-carousel-inner').children(':first').hasClass('m-active')) {
        $('.pxs_prev').hide();
    } else {
        $('.pxs_prev').show();
    }
}
$(function() {
    mCarousel = $('.m-carousel').carousel();
    $('.pxs_prev').bind('click', function() {
        mCarousel.carousel('prev');
        updateCarouselControls();
    });
    $('.pxs_next').bind('click', function() {
        mCarousel.carousel('next');
        updateCarouselControls();
    });
    mCarousel.on('afterSlide', function() {
        updateCarouselControls();
    })
    updateCarouselControls();
});