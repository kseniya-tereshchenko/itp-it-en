$(document).ready(function() {

    var $menuItem0 = $("#fp-nav ul li:first-child a"),
        $menuItem1 = $("#fp-nav ul li:nth-child(2) a"),
        $elementCase0 = $('.js-section-00'),
        $elementCase1 = $('.js-section-01'),
        $allMenuItems = $("#fp-nav ul li a");

    if($(window).scrollTop() == 0) {
        $menuItem0.addClass('active');
    }
});