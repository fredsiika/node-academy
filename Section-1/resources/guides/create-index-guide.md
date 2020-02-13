# Build a Dad Jokes Generator CLI
Let’s get started setting up a simple command-line interface (CLI) application in Node.js.

## Usage

`node [options] [V8 options] [script.js | -e "script" | - ] [arguments]`

Please see the [Command Line Options](https://nodejs.org/api/cli.html#cli_command_line_options) document for more information.

## Example

An example of a [Dad Jokes CLI](https://gist.github.com/fredsiika/f0b5a5a47318dc5e33e7729ccee4a5fb) written with Node.js which responds with:

```bash
$ node index.js

Why should you avoid the duck psychologist? He's a quack.
What do cows do in their spare time? Go to the moooovies.
Why do birds hate Instagram? They prefer to tweet.
Where do fish keep all their money? The river bank.
Why did the sheep get detention? It was baaaaaad.
Why couldn't the horse congress pass any bills? They all kept voting naaaaaay.
```
Commands in this document start with `$` or `>` to replicate how they would appear in a user's terminal.

Do not include the `$` and `>` characters. They are there to show the start of each command.

Lines that don’t start with `$` or `>` character show the output of the previous command.

First, make sure to have downloaded and installed Node.js. See [this guide](https://nodejs.org/en/download/package-manager/) for further install information.

Now, create an empty project folder called `dad-jokes-generator-cli`, then navigate into it.

Linux and Mac:

```bash
$ mkdir ~/dad-jokes-generator-cli
$ cd ~/dad-jokes-generator-cli
```

Windows CMD:

```bash
> mkdir %USERPROFILE%\dad-jokes-generator-cli
> cd %USERPROFILE%\dad-jokes-generator-cli
```

Windows PowerShell:

```bash
> mkdir $env:USERPROFILE\dad-jokes-generator-cli
> cd $env:USERPROFILE\dad-jokes-generator-cli
```

Next, create a new source file in the `dad-jokes-generator-cli` folder and call it `index.js`.

Open `index.js` in any preferred text editor and paste in the following content:

```bash
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
```

Save the file, go back to the terminal window, and enter the following command:

```bash
$ node index.js
```

Output like this should appear in the terminal:
```bash
Why should you avoid the duck psychologist? He's a quack.
What do cows do in their spare time? Go to the moooovies.
Why do birds hate Instagram? They prefer to tweet.
Where do fish keep all their money? The river bank.
Why did the sheep get detention? It was baaaaaad.
Why couldn't the horse congress pass any bills? They all kept voting naaaaaay.
```

Success! We can see that our application is printing random jokes every second.

Notice that the app continues to run. This is because of the `app.indefiniteLoop();` function from our `index.js` file.

To stop the Node.js app hold `ctr-c`.

## Takeaway

> Node uses Google Chrome’s runtime engine to translate JavaScript code to native machine code which runs on the server environment.

Today, we’ve learned how to create a simple Node.js CLI that prints random jokes to the console.

We learned how to use the file system `fs` module to get all the jokes and return them to the user. Specifically, the process of how `fs.readFileSync()`:

- Reads the text file containing the jokes.
- Turns the string into an array using regex.
- Returns the contents of the `path`.

We learned how `module.exports` is the object that's actually returned as the result of the `require` call.

The `exports` variable is initially set to that same object (i.e. it's a shorthand "alias"), so in the module code you would usually write something like this:

```js
var myFunc1 = function() { ... };
var myFunc2 = function() { ... };
exports.myFunc1 = myFunc1;
exports.myFunc2 = myFunc2;
```

to export (or "expose) the internally scoped functions `myFunc1` and `myFun2`.

And in the calling code you would use:

```js
var m = require('mymodule');
m.myFunc1();
```

where the last line shows how the result of require is (usually) just a plain object whose properties may be accessed.
