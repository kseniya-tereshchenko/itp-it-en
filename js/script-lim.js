$(document).ready(function () {

    $(window).scroll(function() {

        var scroll = $(window).scrollTop() + $(window).height();

        $( ".lim-section__circle-block" ).each(function(  ) {
           var $thisTop  = $(this).offset().top + 150,
               $thisBottom  = $(this).offset().top + $(window).height();

            if (scroll > $thisTop && scroll < $thisBottom) {

                $(this).addClass("lim-circle-animate");

            } else {

                $(this).removeClass("lim-circle-animate");
            }

        });

    });

});