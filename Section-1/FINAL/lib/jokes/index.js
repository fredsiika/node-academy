/**
 * Title: Jokes Library
 * Description: Utility for getting a list of Jokes
*/

const fs = require('fs');

const jokes = {};

jokes.allJokes = () => {
    var fileContents = fs.readFileSync(__dirname+'/jokes.txt', 'utf8');
    var arrayOfJokes = fileContents.split(/\r?\n/);
    return arrayOfJokes;
}
    
// Export the library
module.exports = jokes;