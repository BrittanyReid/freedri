var up = 1;
var btn = document.getElementById("button");

jQuery(document).ready(function($){
    //inital size check
    if ($('#container').width() < 450){
        $('#column1').addClass('single');
        $('#column2').addClass('single');
    }

    $('.dynamicheight').each(function(){
        $(this).css({
            'margin-top' : 0 - $(this).outerHeight() + 'px'
        });
    });
});

//on resize
$(window).resize(function(){
    if ($('#container').width() < 450){
        $('#column1').addClass('single');
        $('#column2').addClass('single');
    }
    else{
        $('#column1').removeClass('single');
        $('#column2').removeClass('single');
    }
});

//on click
function hd(){
    var h = $('#titlebox').outerHeight();
    if (up == 1){
        up = 0;
        document.getElementById("button").innerText = "▲ HIDE";
        $('#titlebox').css("margin-top", "0px");
        $('#titlebox').css("display", "block");
    }
    else{
        document.getElementById("button").innerText = "▼ HEADER";
        $('#titlebox').css({
            'margin-top' : 0 - h + 'px'
        });
        up = 1;
    }
}

//load in

$(window).on("load", function() {
    var ava = document.getElementById("ava");
    var sm = document.getElementById("socialm");
    var cols = document.getElementById("container");
    setTimeout(function (){
        ava.classList.remove("hidden");
        sm.classList.remove("hidden");
        cols.classList.remove("hidden");
    }, 500);
});