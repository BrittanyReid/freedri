//small screen
function isItSmall(){
    if ($(window).width() < 960) {
        $('aside').addClass('smalla');
        $('section').addClass('smalls');
        $('#sidebar1').addClass('sbox');
    }
    else {
        $('aside').removeClass('smalla');
        $('section').removeClass('smalls');
        $('#sidebar1').removeClass('sbox');
 }
}


$(document).ready(function() {
    isItSmall();
    $(window).on('resize', function() {
        isItSmall();
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > ($("#topbar").outerHeight())) {
            $('#topbar').addClass('fixed');
        } else {
            $('#topbar').removeClass('fixed');
        }
    });
});