const app = document.getElementById("app");

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