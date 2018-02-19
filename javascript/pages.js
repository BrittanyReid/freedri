$(window).on("load", function() {
    var ava = document.getElementById("ava");
    var sm = document.getElementById("socialm");
    var pg = document.getElementById("page");
    setTimeout(function (){
        ava.classList.remove("hidden");
        sm.classList.remove("hidden");
        pg.classList.add("show");
    }, 500);
});