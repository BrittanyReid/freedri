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
        if ($(window).scrollTop() > ($("header").outerHeight())) {
            $('#topbar').addClass('fixed');
        } else {
            $('#topbar').removeClass('fixed');
        }
    });
});

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-88032411-1', 'auto');
  ga('send', 'pageview');