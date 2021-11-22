$(document).ready(function () {

    $(window).scroll(function() {

        var scroll = $(window).scrollTop() + $(window).height(),
            animSection = $('.smartq-steps-wrp').offset().top + $(window).height()/2,
            animSectionBottom = $('.smartq-steps-wrp').offset().top + $(window).height(),
            startAnim = false;

        if (scroll > animSection && scroll < animSectionBottom && !startAnim) {

            startAnim = true;

            $('.smartq-arrow-01').find('.hidden-arrow').addClass("active");

            setTimeout(function () {
                $('.smartq-arrow-02').find('.hidden-arrow').addClass("active");

                setTimeout(function () {
                    $('.smartq-arrow-03').find('.hidden-arrow').addClass("active");
                }, 500);

            }, 500);

        }

        });

});