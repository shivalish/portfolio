const app = document.getElementById("app");
const console = document.getElementById("console");
const eduarrow = document.getElementById("eduarrow");

const landingscript = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

landingscript.typeString('Welcome to my portfolio!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(1000)
    .typeString('Swipe right for more')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(1000)
    .start();


const startScript = () => {

  const eduscript =  new Typewriter(console, {
    autoStart: true,
    strings: "$ ",
    delay: 60
  });

  eduscript.typeString('grep --color ^CS transcript.txt')
  .pauseFor(1000).changeDelay(40)
  .typeString("<br>")
  .typeString("<br> <label>CS187</label> - data structures <br>")
  .typeString("<label>CS220</label> - programming methodology <br>")
  .typeString("<label>CS240</label> - statistics <br>")
  .typeString("<label>CS250</label> - discrete structures <br>")
  .typeString("<label>CS383</label> - artificial intelligence <br>")
  .typeString("<label>CS230</label> - computer systems principles <br>")
  .typeString("<label>CS311</label> - intro to algorithms <br>")
  .typeString("<label>CS446</label> - search engines <br>")
  .typeString("<label>CS453</label> - computer networks <br>")
  .typeString("<label>CS320</label> - software engineering <br>")
  .typeString("<label>CS326</label> - web programming <br>")
  .typeString("<label>CS325</label> - human computer interaction <br>")
  .typeString("<label>CS429</label> - software engineering project management** <br>")
  .typeString("<label>CS490S</label> - scalable web systems** <br>")
  .typeString("<label>CS345</label> - intro to databases** <br>")
  .typeString("<label>CS520</label> - software engineering theory & best practice** <br>")
  .typeString("<br> **in progress <br>$ ")
  .start();

}


var slideIndex = 0;

const showSlides = () => {
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

eduarrow.addEventListener("click", startScript);
showSlides();