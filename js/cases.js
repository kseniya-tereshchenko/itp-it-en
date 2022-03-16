$(document).ready(function() {

    var $elementCase0 = $('.js-section-00'),
        $elementCase1 = $('.js-section-01'),
        $elementCase2 = $('.js-section-02'),
        $elementCase3 = $('.js-section-03'),
        $elementCase4 = $('.js-section-04'),
        $elementCase5 = $('.js-section-05'),
        $elementCase6 = $('.js-section-06'),
        $elementCase7 = $('.contact-us-inner'),
        $menuItem0 = $("#fp-nav ul li:first-child a"),
        $menuItem1 = $("#fp-nav ul li:nth-child(2) a"),
        $menuItem2 = $("#fp-nav ul li:nth-child(3) a"),
        $menuItem3 = $("#fp-nav ul li:nth-child(4) a"),
        $menuItem4 = $("#fp-nav ul li:nth-child(5) a"),
        $menuItem5 = $("#fp-nav ul li:nth-child(6) a"),
        $menuItem6 = $("#fp-nav ul li:nth-child(7) a"),
        $allMenuItems = $("#fp-nav ul li a");

    if($(window).scrollTop() == 0) {
        $menuItem0.addClass('active');
    }

    $(window).scroll(function() {

        var scroll = $(window).scrollTop() + $(window).height();


        var offsetTop0 = $elementCase0.offset().top + 244,
            offsetTop1 = $elementCase1.offset().top + 244;

        if (!$elementCase2.length == 0) {
            var offsetTop2 = $elementCase2.offset().top + 244;
        }

        if (!$elementCase3.length == 0) {
            var offsetTop3 = $elementCase3.offset().top + 244;
        }

        if (!$elementCase4.length == 0) {
            var offsetTop4 = $elementCase4.offset().top + 244;
        }

        if (!$elementCase5.length == 0) {
            var offsetTop5 = $elementCase5.offset().top + 244;
        }

        if (!$elementCase6.length == 0) {
            var offsetTop6 = $elementCase6.offset().top + 244;
        }

        if (!$elementCase7.length == 0) {
            var offsetTop7 = $elementCase7.offset().top + 244;
        }

        if (scroll > offsetTop0 && scroll < offsetTop1) {

            if (!$menuItem0.hasClass("active")) {
                $allMenuItems.removeClass("active");
                $menuItem0.addClass("active");
            }

        } else if (scroll > offsetTop1 && scroll < offsetTop2) {

            if (!$menuItem1.hasClass("active")) {
                $allMenuItems.removeClass("active");
                $menuItem1.addClass("active");
            }

        } else if (scroll > offsetTop2 && scroll < offsetTop3) {

            if (!$menuItem2.hasClass("active")) {
                $allMenuItems.removeClass("active");
                $menuItem2.addClass("active");
            }

            var wScroll = (((scroll - offsetTop2) / ((offsetTop3 - offsetTop2) / 100)) / 2);
            $('.paralax-text').css({
                'transform': 'translate(-' + (wScroll) + '%, 50%)'
            })

        } else if (scroll > offsetTop3 && scroll < offsetTop4) {

            var wScroll2 = (((scroll - offsetTop2) / ((offsetTop3 - offsetTop2) / 100)) / 2);
            $('.paralax-text').css({
                'transform': 'translate(-' + (wScroll2) + '%, 50%)'
            })


            if (!$menuItem3.hasClass("active")) {
                $allMenuItems.removeClass("active");
                $menuItem3.addClass("active");
            }

        } else if (scroll > offsetTop4 && scroll < offsetTop5) {

            if (!$menuItem4.hasClass("active")) {
                $allMenuItems.removeClass("active");
                $menuItem4.addClass("active");
            }

        } else if (scroll > offsetTop5 && scroll < offsetTop6) {

            if (!$menuItem5.hasClass("active")) {
                $allMenuItems.removeClass("active");
                $menuItem5.addClass("active");
            }

        } else if (scroll > offsetTop6 && scroll < offsetTop7) {

            if (!$menuItem6.hasClass("active")) {
                $allMenuItems.removeClass("active");
                $menuItem6.addClass("active");
            }

        } else if (scroll > offsetTop3 && scroll < offsetTop7) {

            if (!$menuItem3.hasClass("active")) {
                $allMenuItems.removeClass("active");
                $menuItem3.addClass("active");
            }

        } else {

            if (!$(".vacancy-section").length == 0) {

                $allMenuItems.removeClass("active");
                $menuItem1.addClass("active");

            } else {
                $allMenuItems.removeClass("active");
            }

        }
    });


    var serviceItemSelected =  $(".tab-block__title-item.active"),
        serviceMenuLine = $(".tab-block__title-line"),
        serviceMenu = $(".tab-block__title-block"),
        serviceLeaveTimer;

    // function: set first top menu line position if need
    var setServiceMenuLine = function() {
        if(serviceItemSelected.length > 0) {

            setTimeout(function() {
                serviceMenuLine.css({opacity: 1, width: serviceItemSelected.outerWidth(), left: serviceItemSelected.position().left});
            }, 200);
        }
    };

    // function: move top menu line
    var moveServiceMenuLine =function(item) {
        serviceMenuLine.css({width: item.outerWidth(), left: item.position().left});
    };

    setServiceMenuLine();

    // event: menu item hover
    $(".tab-block__title-item").on("mouseenter", function() {
        clearTimeout(serviceLeaveTimer);
        serviceMenuLine.css({opacity: 1});
        moveServiceMenuLine($(this));
    });

    // event: menu leave
    serviceMenu.on("mouseleave", function() {
        var serviceItemSelected =  $(".tab-block__title-item.active");

        serviceMenuLine.queue(function () {
            serviceLeaveTimer = setTimeout(function() {
                if(serviceItemSelected.length > 0) {
                    moveServiceMenuLine(serviceItemSelected);
                }
                else {
                    serviceMenuLine.css({opacity: 0});
                }
            }, 100);
            $(this).dequeue();
        });
    });

    function topSlider() {

        $('.case_table-board').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        });

    }

    function teamSlider(sliderName) {

        $('.' + sliderName + '').on('init', function(event, slick){

            $('.js-current-slide').text(1);
            $('.js-all-slide').text(slick.slideCount);

        });

        $('.' + sliderName + '').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
        });

        $('.' + sliderName + '').on('afterChange', function(event, slick, currentSlide){

            $('.js-current-slide').text(currentSlide + 1);

        });

    }

    var teamSliderInit = false;


    if ($(window).width() < '768'){

        teamSlider('js-itp-team');
        topSlider();

        teamSliderInit = true;

        $('.footer-info__item:first-child').text('Связаться с нами:');

    }

    $(window).resize(function() {

        var windowWidth = $(window).width();

        if (windowWidth < '768'){

            if(teamSliderInit == false ) {

                var sliderName = $('.tab-block__title-item.active').attr('data-tab');

                teamSlider(sliderName);

                topSlider();

                teamSliderInit = true;

                $('.footer-info__item:first-child').text('Связаться с нами:');
            }
        } else {

            if(teamSliderInit == true) {

                teamSliderInit = false;

                $('.case_table-board').slick('unslick');

                $(".tab-block__text-block.slick-initialized").each(function( ) {
                    $(this).slick('destroy');
                });

            }

        }
    });

    $(document).on('click', '.tab-block__title-item', function(){

        var $this = $(this),
            allTabs = $(".tab-block__title-item"),
            allTabsBlock = $(".tab-block__text-block"),
            currentTab = $this.attr("data-tab");

        if (!$this.hasClass("active")) {

            allTabs.removeClass("active");
            $this.addClass("active");
            allTabsBlock.css('display', 'none');

            if ($(window).width() < '768'){

                $(".tab-block__text-block.slick-initialized.active").slick('destroy');

                allTabsBlock.removeClass('active');

                $("." + currentTab + "").css('display', 'flex').addClass('active');

                teamSlider(currentTab);

            } else {

                $("." + currentTab + "").css('display', 'flex').addClass('active');

            }

        }

    });

});