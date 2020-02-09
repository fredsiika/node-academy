# Build a Simple Web Server in Node.js  

Let’s get started setting up a simple web server application in Node.js

## Usage

`node [options] [V8 options] [script.js | -e "script" | - ] [arguments]`

Please see the [Command Line Options](https://nodejs.org/api/cli.html#cli_command_line_options) document for more information.

## Example

An example of a [web server](https://nodejs.org/api/http.html) written with Node.js which responds with `'Hello, World!'`:

Commands in this document start with `$` or `>` to replicate how they would appear in a user's terminal.

Do not include the `$` and `>` characters. They are there to show the start of each command.

Lines that don’t start with `$` or `>` character show the output of the previous command.

First, make sure to have downloaded and installed Node.js. See [this guide](https://nodejs.org/en/download/package-manager/) for further install information.

Now, create an empty project folder called `projects`, then navigate into it.

Linux and Mac:

```bash
$ mkdir ~/projects
$ cd ~/projects
```

Windows CMD:

```bash
> mkdir %USERPROFILE%\projects
> cd %USERPROFILE%\projects
```

Windows PowerShell:

```bash
> mkdir $env:USERPROFILE\projects
> cd $env:USERPROFILE\projects
```

Next, create a new source file in the `projects` folder and call it `hello-world.js`.

Open `hello-world.js` in any preferred text editor and paste in the following content:

```bash
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Save the file, go back to the terminal window, and enter the following command:

```bash
$ node hello-world.js
```

Output like this should appear in the terminal:

```bash
Server running at http://127.0.0.1:3000/
```

Now, open any preferred web browser and visit `http://127.0.0.1:3000`.

If the browser displays the string `Hello, World!`, that indicates the server is working.


## Takeaway:

> Node uses Google Chrome’s runtime engine to translate JavaScript code to native machine code which runs on the server environment.

A typical app will use Express for the backend, MongoDB database, and AngularJS frontend (called MEAN stack).

The standard `“Hello world”` in Node will be some version of this:

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

Node.js generates dynamic page content, and in combination with some front-end frameworks such as ReactJS or AngularJS, the fastest possible single page applications can be built easily.
