// Main CLI Entry Point
// Simple file that declares a few functions and invokes them.

const mathLib = require('./lib/math');
const jokesLib = require('./lib/jokes');

const app = {};

app.config = {
    'timeBetweenJokes' : 1000
};

app.printAJoke = () => {

    let allJokes = jokesLib.allJokes();

    let numberOfJokes = allJokes.length;

    let randomJoke = mathLib.getRandomNumber(1, numberOfJokes);

    let selectedJoke = allJokes[randomJoke - 1];

    console.log(selectedJoke);
}

app.indefiniteLoop = () => {
     setInterval(app.printAJoke, app.config.timeBetweenJokes);
}

app.indefiniteLoop();
