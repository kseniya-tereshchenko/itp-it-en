$(document).ready(function () {

    // open and close mobile menu

    var overlay = $('.overlay'),
        header_logo = $('.header-logo'),
        header_menu = $('.header-nav-mobile'),
        mobileMenuIcon = $('.mobile-menu-icon'),
        body = $('body'),
        header = $('header'),
        startScroll = false;

    $('#input_phone').inputmask("+9 (999) 999-99-99");

    mobileMenuIcon.click(function () {

        $(this).toggleClass('active');
        overlay.toggleClass('active');
        // header_logo.toggleClass('active');
        header_menu.toggleClass('active');
        header_menu.slideToggle(300);
        body.toggleClass('not-scroll');
        // header.toggleClass('active');

    });

    overlay.click(function () {

        $(this).toggleClass('active');
        mobileMenuIcon.toggleClass('active');
        // header_logo.toggleClass('active');
        header_menu.toggleClass('active');
        header_menu.slideToggle(300);
        body.toggleClass('not-scroll');
        // header.toggleClass('active');

    });

    // scroll section on inner pages

    $(document).on('click', '.js-section-scroll', function () {

        var $this = $(this),
            sectionScroll = $this.attr('data-section-scroll'),
            sectionService,
            scrollTop;

        event.preventDefault();

        if (!startScroll) {

            startScroll = true;

            if (!$this.hasClass('active')) {

                if (sectionScroll == 1) {
                    sectionService = $('.js-section-01');
                } else if (sectionScroll == 2) {
                    sectionService = $('.js-section-02');
                } else if (sectionScroll == 3) {
                    sectionService = $('.js-section-03');
                } else if (sectionScroll == 4) {
                    sectionService = $('.js-section-04');
                } else if (sectionScroll == 5) {
                    sectionService = $('.js-section-05');
                } else if (sectionScroll == 6) {
                    sectionService = $('.js-section-06');
                } else if (sectionScroll == 0) {
                    sectionService = $('.js-section-00');
                }

                if (sectionService.hasClass("service-item-block")) {

                    scrollTop = sectionService.offset().top - 100;

                } else if (sectionService.hasClass("js-contact-us_scroll")) {
                    scrollTop = sectionService.offset().top - 50;
                } else {
                    scrollTop = sectionService.offset().top - 244;
                }

                $('html, body').animate({
                    scrollTop: scrollTop
                }, 700);

            }

            setTimeout(function () {
                startScroll = false;
            }, 750);

            return false;
        }

    });


    $("#attach-file").change(function (event) {
        target = $(event.target);
        let val = event.target.files.length > 0 ? event.target.files[0]?.name : 'прикрепить файл';
        let shortVal = trimFileName(val);

        target.closest(".contact-us-info-buttons-staple").find("label").text(shortVal);


    });


    $(document).on('click', '.js-close-popup, .popup-wrp-background', function (event) {
        $(".popup-wrp").removeClass('active');
    });

    $(document).on('click', '.btn_form', function () {
        let validateForm = $(document).find('form');

        validateForm.validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true,
                    minlength: 5
                }
            },
            // onkeyup: true,
            submitHandler: function (form) {
                try {
                    $('.btn_form').attr('disabled', true);
                    $('.loader-wrapper').addClass('active');
                    $.ajax({
                        url: '/mail.php',
                        method: 'POST',
                        data: new FormData(form),
                        processData: false,
                        contentType: false,
                        dataType: "json",
                        success: function () {
                            $('.loader-wrapper').removeClass('active');
                            $('.btn_form').attr('disabled', false);
                            $("#mail-popup").addClass('active');
                            form.reset();
                        },
                        error: function () {
                            $('.loader-wrapper').removeClass('active');
                            $('.btn_form').attr('disabled', false);
                            $("#mail-popup-error").addClass('active');
                        }
                    });
                }
                catch {
                    $('.loader-wrapper').removeClass('active');
                    $('.btn_form').attr('disabled', false);
                    $("#mail-popup-error").addClass('active');
                    return false;
                }
            },
            errorPlacement: function (error, element) {
                $(element).parent('.main-form__item-input').find('label').addClass('invalid');
            },
            success: function (error, element) {
                $(element).parent('.main-form__item-input').find('label').removeClass('invalid');
            }
        });
    });


    var btnUp = $('#up-arrow'),
        scrollTop = false;

    $(window).scroll (function () {

        if ($(this).scrollTop () > 400) {
            btnUp.addClass('active');
        } else {
            btnUp.removeClass('active');
        }
    });

    btnUp.on('click', function(){

        if(scrollTop == false) {

            scrollTop = true;

            $('body, html').animate({
                scrollTop: 0
            }, 800);

            setTimeout(function () {
                scrollTop = false;
            }, 900);

            return false;
        }

    });

    function trimFileName(filename, limit = 15, spacer = '.') {
        const split = filename.indexOf(".");
        const name = filename.substring(0, split);
        const ext = filename.substring(split);

        let trimName = name.substring(0, limit);

        if (name.length > trimName.length)
            trimName = trimName.padEnd(limit + 3, spacer);

        return trimName + ext;
    }

});