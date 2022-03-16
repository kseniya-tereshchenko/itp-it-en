$(document).ready(function() {

    var $menuItem0 = $("#fp-nav ul li:first-child a"),
        $menuItem1 = $("#fp-nav ul li:nth-child(2) a"),
        $elementCase0 = $('.js-section-00'),
        $elementCase1 = $('.js-section-01'),
        $allMenuItems = $("#fp-nav ul li a");

    if($(window).scrollTop() == 0) {
        $menuItem0.addClass('active');
    }

    $(window).scroll(function() {

        var scroll = $(window).scrollTop() + $(window).height();


        var offsetTop0 = $elementCase0.offset().top,
            offsetTop1 = $elementCase1.offset().top + 300;


        if (scroll > offsetTop0 && scroll < offsetTop1) {

            if (!$menuItem0.hasClass("active")) {
                $allMenuItems.removeClass("active");
                $menuItem0.addClass("active");
            }

        }  else {

            $allMenuItems.removeClass("active");
            $menuItem1.addClass("active");

        }
    });
});