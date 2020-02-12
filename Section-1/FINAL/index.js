/*
 * Title: Basic Node Example
 * Description: Simple file that declares a few functions and invokes them.
 * Author: Fred Siika
**/

// Dependencies
var mathLib = require('./lib/math');
var jokesLib = require('./lib/jokes');

// App object
var app = {};

// Configuration
app.config = {
    'timeBetweenJokes' : 1000
};

// Function that prints a random joke
app.printAJoke = function(){

    // Get array of all the jokes
    var allJokes = jokesLib.allJokes();

    // Get the length of the jokes array
    var numberOfJokes = allJokes.length;

    // Pick a random number between 1 and the number of jokes
    var randomJoke = mathLib.getRandomNumber(1, numberOfJokes);

    // Get the joke at that position in the array (minus one)
    var selectedJoke = allJokes[randomJoke - 1];

    // Send the joke to the console
    console.log(selectedJoke);
};

// Function that loops indefinitely, calling the printAJoke function as it goes
app.indefiniteLoop = function() {
     // Create the interval, using the config variable defined above
     setInterval(app.printAJoke, app.config.timeBetweenJokes);
};
   
// Invoke the loop
app.indefiniteLoop();