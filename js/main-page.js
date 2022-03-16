$(document).ready(function() {

    var initFullpage = false,
        initMobileSlider = false;

    var onImgLoad = function(selector, callback){
        $(selector).each(function(){
            if (this.complete || /*for IE 10-*/ $(this).height() > 0) {
                callback.apply(this);
            }
            else {
                $(this).on('load', function(){
                    callback.apply(this);
                });
            }
        });
    };

    function fullPageInit() {

        $('#fullpage').fullpage({
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['About us', 'Services', 'Our workflow', 'Cases', 'Feedback', 'Contact us'],
            lazyLoading: true,
            fitToSection: false,
            onLeave: function(origin, destination, direction){

            }
        });

        // scroll to form on main page on desktop devices

        $(document).on('click', '.js-move-to-form', function(){
            event.preventDefault();
            fullpage_api.moveTo(6);
        });

        $(".main_projects").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            lazyLoad: 'ondemand'
        });

        $('.main_projects').on('beforeChange', function(event, slick, currentSlide, nextSlide){

            var quantitySlides = slick.slideCount,
                lastSlide = $(".main_projects").find(".slick-slide[data-slick-index='" + quantitySlides + "']"),
                firstSlide = $(".main_projects").find(".slick-slide[data-slick-index='-1']");

            if ((currentSlide == quantitySlides - 1) && (nextSlide == 0)) {

                lastSlide.css( "opacity", 1 );

            }

            if ((currentSlide == 0) && (nextSlide == quantitySlides - 1)) {

                firstSlide.css( "opacity", 1 );

            }
        });

        $('.main_projects').on('afterChange', function(event, slick, currentSlide){

            $(".main_projects .slick-cloned").css( "opacity", .4 );

        });
    }

    function mobileSliderInit() {

        // scroll to form on main page on mobile devices

        $(document).on('click', '.js-move-to-form', function(){

            var sectionScroll = $('.js-contact-us_scroll');

            event.preventDefault();

            $('html, body').animate({
                scrollTop: sectionScroll.offset().top
            }, 1500);

        });

        // $('.footer-info__item:first-child').text('Contact us:');
    }

    // fullpage and sliders on loading page

    if ($(window).width() > '991'){

        initFullpage = true;

        fullPageInit();

    } else {

        initMobileSlider = true;

        mobileSliderInit();

    }

    // build and destroy fullpage on resize

    $(window).resize(function() {

        var windowWidth = $(window).width();

        if(windowWidth > 991) {

            if (!initFullpage) {

                initFullpage = true;
                fullPageInit();

            }

            if (initMobileSlider) {

                initMobileSlider = false;

            }

        } else {

            if (initFullpage) {

                initFullpage = false;

                fullpage_api.destroy('all');
                $('.main_projects').slick('unslick');

            }

            if(!initMobileSlider) {

                initMobileSlider = true;

                mobileSliderInit();
            }

        }

    });

    var navItemCase = $('.js-cases-block .toggle-item h3'),
        navItemStep = $('.js-steps-block .steps_wrp h3'),
        stepsBlock = $('.js-steps-block'),
        stepsTitle = $('.js-steps-block .js-steps-title'),
        stepsDescription = $('.js-steps-block .hidden-mobile .fullpage-item__text');

    // change slider cases on desktop on main page


    navItemCase.click(function(){

        var $this = $(this),
            openItem = $this.closest('.fullpage-item__text-block').find('.toggle-item.open'),
            currentCase = $this.closest('.toggle-item').attr('data-case'),
            caseImage = $('.js-image-case'),
            caseImageUrl,
            caseImageAlt;

        if (!$this.closest('.toggle-item').hasClass('open')) {

            if (currentCase == 1) {
                caseImageUrl = 'images/cases_first.png';
                caseImageAlt = 'Digitalizating & Automating Business';
            } else if (currentCase == 2) {
                caseImageUrl = 'images/cases_second.png';
                caseImageAlt = 'Outsourcing an IT Department';
            } else if (currentCase == 3) {
                caseImageUrl = 'images/cases_third.png';
                caseImageAlt = 'Augmenting In-house Teams';
            } else if (currentCase == 4) {
                caseImageUrl = 'images/cases_fourth.png';
                caseImageAlt = 'Launching pioneer IT products';
            }

            openItem.removeClass('open');
            openItem.find('.toggle-item-content').slideUp(600);
            $this.closest('.toggle-item').find('.toggle-item-content').slideDown(600);
            $this.closest('.toggle-item').addClass('open');

            caseImage.fadeOut(300);

            setTimeout(function(){
                caseImage.removeAttr('src').removeAttr('alt');
                caseImage.attr('src',caseImageUrl).attr('alt',caseImageAlt);

                onImgLoad(caseImage, function(){
                    $(this).fadeIn(300);
                });
            }, 350);

        }

    });

    // change slider steps on desktop on main page

    navItemStep.click(function(){

        var $this = $(this),
            openStep = $this.closest('.step-slider').find('.step-slider-item.open'),
            currentStep = $this.closest('.step-slider-item').attr('data-step'),
            stepImage = $('.fullpage-item__img .js-image-step'),
            stepImageUrl,
            stepImageAlt;

        if (currentStep == 1) {

            stepImageUrl = 'images/process_first_step.png';
            stepImageAlt = 'Drawing up a roadmap'

        } else if (currentStep == 2) {

            stepImageUrl = 'images/process_second_step.png';
            stepImageAlt = 'Designing the engine'

        } else if (currentStep == 3) {

            stepImageUrl = 'images/process_third_step.png';
            stepImageAlt = 'System under construction'

        } else if (currentStep == 4) {

            stepImageUrl = 'images/process_fourth_step.png';
            stepImageAlt = 'Flight tests'

        } else if (currentStep == 5) {

            stepImageUrl = 'images/process_fifth_step.jpg';
            stepImageAlt = 'Ready at runway'

        } else if (currentStep == 6) {

            stepImageUrl = 'images/process_sixth_step.png';
            stepImageAlt = 'Further service'

        }

        if (!$this.closest('.step-slider-item').hasClass('open')) {

            stepImage.stop();

            openStep.removeClass('open');
            $this.closest('.step-slider-item').addClass('open');
            $this.closest('.step-slider-item').find('.fullpage-item__text').slideDown(300);
            openStep.find('.fullpage-item__text').slideUp(300);

            stepImage.fadeOut(300);

            setTimeout(function(){
                stepImage.removeAttr('src').removeAttr('alt');
                stepImage.attr('src',stepImageUrl).attr('alt',stepImageAlt);

                onImgLoad(stepImage, function(){
                    $(this).fadeIn(300);
                });

            }, 350);
        }

    });

    $(document).on('click', '.js-open-reviews', function(){
        event.preventDefault();
        $('.review-item').css( "display", 'flex' );
        $('.js-open-reviews').hide();
    });


});