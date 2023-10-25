const console = document.getElementById("console");

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
  .typeString("<label>CS429</label> - software engineering project management <br>")
  .typeString("<label>CS345</label> - databases <br>")
  .typeString("<label>CS377</label> - operating systems <br>")
  .typeString("<br>$ ")
  .start();