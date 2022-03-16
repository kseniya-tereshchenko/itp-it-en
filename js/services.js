$(document).ready(function() {


    var $elementCase1 = $('.js-section-01'),
        $elementCase2 = $('.js-section-02'),
        $elementCase3 = $('.js-section-03'),
        $elementCase4 = $('.js-section-04'),
        $elementCase5 = $('.contact-us-inner'),
        $menuItem1 = $("#fp-nav ul li:first-child a"),
        $menuItem2 = $("#fp-nav ul li:nth-child(2) a"),
        $menuItem3 = $("#fp-nav ul li:nth-child(3) a"),
        $menuItem4 = $("#fp-nav ul li:nth-child(4) a"),
        $allMenuItems = $("#fp-nav ul li a");

    $(window).scroll(function() {

        var scroll = $(window).scrollTop() + $(window).height();

        var offsetTop1 = $elementCase1.offset().top + $elementCase1.outerHeight()/4,
            offsetTop2 = $elementCase2.offset().top + $elementCase2.outerHeight()/4,
            offsetTop3 = $elementCase3.offset().top + $elementCase3.outerHeight()/4,
            offsetTop4 = $elementCase4.offset().top + $elementCase4.outerHeight()/4,
            offsetTop5 = $elementCase5.offset().top + $elementCase5.outerHeight()/4;

        if (scroll > offsetTop1 && scroll < offsetTop2) {

            if (!$menuItem1.hasClass("active")) {
                $allMenuItems.removeClass("active");
                $menuItem1.addClass("active");
            }

        } else if (scroll > offsetTop2 && scroll < offsetTop3) {

            if (!$menuItem2.hasClass("active")) {
                $allMenuItems.removeClass("active");
                $menuItem2.addClass("active");
            }

        } else if (scroll > offsetTop3 && scroll < offsetTop4) {

            if (!$menuItem3.hasClass("active")) {
                $allMenuItems.removeClass("active");
                $menuItem3.addClass("active");
            }

        } else if (scroll > offsetTop4 && scroll < offsetTop5) {

            if (!$menuItem4.hasClass("active")) {
                $allMenuItems.removeClass("active");
                $menuItem4.addClass("active");
            }

        } else {

            $allMenuItems.removeClass("active");
        }
    });

    var sliderInit = false;

    function tileSlider() {

        $('.service-item_table-board').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        });

    }

    $(window).resize(function() {

        var windowWidth = $(window).width();

        if (windowWidth < '768') {

            if (sliderInit == false) {

                tileSlider();

                sliderInit = true;

                $('.footer-info__item:first-child').text('Связаться с нами:');

            }
        } else {

            if (sliderInit == true) {

                sliderInit = false;

                $(".service-item_table-board.slick-initialized").each(function( ) {
                    $(this).slick('destroy');
                });
            }

        }
    });

    if ($(window).width() < '768'){

        tileSlider();

        sliderInit = true;

        $('.footer-info__item:first-child').text('Связаться с нами:');

    }
});