var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('Welcome to my portfolio!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(1000)
    .typeString('Scroll down for more!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(1000)
    .start();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("nav").style.top = "0px";
        
    } else {
        document.getElementById("nav").style.top = "-150px";
    }
}

var navbarchange = document.getElementById("education");

navbarchange.addEventListener("click", function(){
    document.getElementById("about-gallery").style.animate({
        "left": 100% }, 1000);
});