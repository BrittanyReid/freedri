var clos = 1;

$(window).on("load", function() {
        //show background
        var bgk = document.getElementById("background");
        var ava = document.getElementById("ava");
        var sm = document.getElementById("socialm");
        setTimeout(function (){
        bgk.classList.remove("hidden");
        ava.classList.remove("hidden");
        sm.classList.remove("hidden");
        }, 500);
});

function oli(){
        if(clos == 1){
                clos = 0;
                document.getElementById("dd").innerText = "Other Links ▲";
                $('#reveal').css("display", "block");
        }
        else{
                clos = 1;
                document.getElementById("dd").innerText = "Other Links ▼";
                $('#reveal').css("display", "none");
        }
}