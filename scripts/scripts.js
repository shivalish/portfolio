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
    .typeString('Swipe right for more')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(1000)
    .start();


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";

  setTimeout(showSlides, 7000); // Change image every 2 seconds
}