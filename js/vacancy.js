$(document).ready(function () {

    var scrollInit = false;

    if ($(window).width() < '991') {

        $('.vacancy-item').removeClass('active');

        $('.footer-info__item:first-child').text('Связаться с нами:');

        setTimeout(function () {

            $(".vacancy-item").each(function( ) {
                var itemOffsetTop = $(this).offset().top;
                $(this).attr('data-offset-top', itemOffsetTop );
            });

        }, 750);

    }


    $(document).on('click', '.js-vacancy-scroll', function () {

        var $this = $(this),
            sectionVacancy = $this.attr('data-vacancy'),
            openVacancy,
            scrollTop;

        event.preventDefault();

        if(!scrollInit) {

            scrollInit = true;

            if (!$this.hasClass('active')) {

                if (sectionVacancy == 0) {
                    openVacancy = $('.js-vacancy-00');
                } else if (sectionVacancy == 1) {
                    openVacancy = $('.js-vacancy-01');
                } else if (sectionVacancy == 2) {
                    openVacancy = $('.js-vacancy-02');
                } else if (sectionVacancy == 3) {
                    openVacancy = $('.js-vacancy-03');
                } else if (sectionVacancy == 4) {
                    openVacancy = $('.js-vacancy-04');
                } else if (sectionVacancy == 5) {
                    openVacancy = $('.js-vacancy-05');
                } else if (sectionVacancy === 'form') {
                    openVacancy = $('.js-vacancy-form');
                }

                if(sectionVacancy === 'form') {

                    scrollTop = openVacancy.offset().top - 50;

                    $('html, body').animate({
                        scrollTop: scrollTop
                    }, 700);

                } else {

                    $('html, body').animate({
                        scrollTop: 0
                    }, 700);

                    $('.vacancy-item.active').removeClass('active');
                    openVacancy.addClass('active');

                    if( $(window).scrollTop() == 0) {
                        $('.js-vacancy-scroll.active').removeClass('active');
                        $this.addClass('active');
                    }
                }

            }

            setTimeout(function () {
                scrollInit = false;
            }, 750);

            return false;
        }

    });

    $(document).on('click', '.js-move-to-form', function(){

        var sectionScroll = $('.js-contact-us_scroll');

        event.preventDefault();

        if(!scrollInit) {

            scrollInit = true;

            $('html, body').animate({
                scrollTop: sectionScroll.offset().top - 50
            }, 700);

            setTimeout(function () {
                scrollInit = false;
            }, 750);

            return false;
        }
    });

    var $vacancySection = $('.vacancy-section'),
        $formSection = $('.js-vacancy-form'),
        $allMenuItems = $("#fp-nav ul li a");

    $(window).scroll(function() {

        var scroll = $(window).scrollTop() + $(window).height();

        var offsetTop0 = $vacancySection.offset().top,
            offsetTop1 = $formSection.offset().top + 244;

        if (scroll > offsetTop0 && scroll < offsetTop1  && $(window).width() > '991') {

            var menuItemActive = $('.vacancy-item.active').attr('data-menu-link');
            $allMenuItems.removeClass('active');
            $('#fp-nav ul li:nth-child(' + menuItemActive +') a').addClass('active');


        } else {

            $allMenuItems.removeClass('active');
            $('#fp-nav ul li:last-child a').addClass('active');
        }
    });


        $(document).on('click', '.top-vacancy-tile h2', function () {

            if ($(window).width() < '991') {

            var $this = $(this),
                tileIem = $this.closest('.vacancy-item'),
                toggleContent = tileIem.find('.vacancy-toggle-content');

            if (!tileIem.hasClass('active')) {

                $('.vacancy-item').removeClass('active');

                if ($('.vacancy-toggle-content').hasClass('open')) {
                    $('.vacancy-toggle-content.open').slideUp(600).removeClass('open');
                }

                tileIem.addClass('active');
                toggleContent.addClass('open');
                toggleContent.slideDown(600);

                var itemOffsetTop = tileIem.attr('data-offset-top') - 100;

                $('html, body').animate({
                    scrollTop: itemOffsetTop
                }, 700);

            } else {
                tileIem.removeClass('active');
                toggleContent.slideUp(600);
                toggleContent.removeClass('open');
            }

            }

        });

        var vacancyMobileResize = false;

    $(window).resize(function() {

        if ($(window).width() < '991') {

            if(!vacancyMobileResize) {
                vacancyMobileResize = true;

                $('.vacancy-item.active .vacancy-toggle-content').slideDown(600).addClass('open');
                $('.footer-info__item:first-child').text('Связаться с нами:');
            }

        } else {

            vacancyMobileResize = false;

            $('.vacancy-toggle-content').removeAttr('style');

            if ($('.vacancy-item.active').length == 0) {

                $('.vacancy-item:first-child').addClass('active');
                $('#fp-nav ul li a').removeClass('active');
                $('#fp-nav ul li:first-child a').addClass('active');

            }
        }

    });
});