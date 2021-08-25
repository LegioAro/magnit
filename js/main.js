$(document).ready(function () {

    if ($(window).width() < 900) {
        $(".cover__img-time").prependTo(".cover__info");
    } else {
        $(".cover__img-time").prependTo(".cover__img-block");
    }

    if ($(window).width() < 650) {
        $('.benefits__items').slick({
            slidesToShow: 1,
            // arrows: false,
            adaptiveHeight: true,
            autoplay: true,
        });
    }

    $(window).resize(function () {
        if ($(window).width() < 900) {
            $(".cover__img-time").prependTo(".cover__info");
        } else {
            $(".cover__img-time").prependTo(".cover__img-block");
        }


    })
    $(window).resize(function () {
        if ($(window).width() < 650) {
            $('.benefits__text br').remove();
            $('.benefits__items').filter('.slick-initialized').slick('unslick');
            $('.benefits__items').slick({
                slidesToShow: 1,
                // arrows: false,
                adaptiveHeight: true,
                autoplay: true,
            });
        } else {
            $('.benefits__items').filter('.slick-initialized').slick('unslick');
        }
    })



});