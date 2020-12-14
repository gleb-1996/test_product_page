$(document).ready(function () {

    let activeBlockSrc = $('.wrap-slide_active img').attr('src');
    let bigImg = $('.slider__active-img');
    bigImg.attr('src', activeBlockSrc);

    $('.slider_next').click(function(){
        let activeBlock = $('.wrap-slide.wrap-slide_active');
        let activeBlockSrc = $('.wrap-slide.wrap-slide_active img').attr('src');
        let activeBlockIndex = $('.wrap-slide.wrap-slide_active').index();
        let nextBlockIndex = activeBlockIndex + 1;
        let nextImg = $('.wrap-slide').eq(nextBlockIndex);
        let nextImgSrc = nextImg.find('img').attr('src');
        let bigImg = $('.slider__active-img');
        bigImg.attr('src', nextImgSrc);
        activeBlock.removeClass('wrap-slide_active');

        if (nextBlockIndex == ($('.wrap-slide:last').index() + 1)) {
            $('.wrap-slide').eq(0).addClass('wrap-slide_active');
            bigImg.attr('src', ($('.wrap-slide_active img').attr('src')));

        } else {
            nextImg.addClass('wrap-slide_active');
        }
    });

    $('.slider_prev').click(function(){
        let activeBlock = $('.wrap-slide.wrap-slide_active');
        let activeBlockSrc = $('.wrap-slide.wrap-slide_active img').attr('src');
        let activeBlockIndex = $('.wrap-slide.wrap-slide_active').index();
        let prevBlockIndex = activeBlockIndex - 1;
        let prevImg = $('.wrap-slide').eq(prevBlockIndex);
        let prevImgSrc = prevImg.find('img').attr('src');
        let bigImg = $('.slider__active-img');
        bigImg.attr('src', prevImgSrc);
        activeBlock.removeClass('wrap-slide_active');
        prevImg.addClass('wrap-slide_active');
    });

});