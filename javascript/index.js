$(document).ready(function() {
    $(window).bind('scroll', function () {
            if ($(window).scrollTop() > ($("header").outerHeight())) {
                $('#topbar').addClass('fixed');
            } else {
                $('#topbar').removeClass('fixed');
            }
        });
});