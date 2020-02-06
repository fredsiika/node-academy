# Node Academy 
**Guide: Build a Dad Jokes Generator CLI**

## The Rationale

> “Change is the only constant…” <br /> 
> – Heraclitus (Philosopher)

The tools, libraries, and frameworks we use to build our web applications today are drastically different from the ones we used just a few short years ago. 

In a few short years from now, most of these technologies will have changed dramatically again. 

Yet, many of us make these a central, inextricable part of our apps. We import, use, and inherit from the flavor-of-the-month frameworks as if they’re all going to be around and unchanged forever. Well… they’re not. And that’s a problem.

After years of developing, designing, and architecting web applications, I’ve come to appreciate two important truths:

1. External dependencies pose a great threat to the long term stability and viability of any application.

2. It’s increasingly difficult — if not impossible — to build any kind of non-trivial app without leveraging external dependencies.

This project is about documenting my process and reconciling these two truths so that our apps have the greatest chance of long-term survival.

---

## Table of Contents
- [Course Overview](#course-overview) (2min)
  - [About This Course](#about-this-course)
  - [Who This Course Is For](#who-this-course-is-for)
  - [Course Prerequisites](#course-prerequisites)
- [Anatomy Of A Node App](#anatomy-of-a-node-app) (3min)
  - [What is Node](#what-is-node)
  - [Common Node conventions](#common-node-conventions)
  - [Interactive Quiz](#quiz)
- [Build a Dad Jokes Generator CLI](#build-a-dad-jokes-generator-cli) (15min) 
    - [Filesystem structure](#filesystem-structure)
    - [Setup](#setup) 
    - [Basic Scaffolding](#basic-scaffolding)
- [Test the CLI](#test-the-cli) (1min)
- [Source code](#source-code) 
- [Final Review](#final-review) (1min)
- [Further Reading](#further-reading)

---

## Course Overview



### About this course

### Who This Course Is For
Any engineer who wants to: 

- gain a deeper understanding of the Node API
- write their own Node.js framework
- author their own useful Node.js modules
- be able to fix Node.js libraries when they break, and submit pull requests to your favorite Node.js projects to make them faster and more secure

### Course Prerequisites:
- You should be proficient with Javascript (ES5)
- You should be comfortable in your terminal (shell) and have admin (sudo) privileges on your workstation.
- Experience in NodeJS is not required but is highly recommended.
- You'll need to download Node version 8.x.x LTS
- You'll need a decent text editor (I recommend VS Code or Sublime)
- You may want to clone the sample code for the lectures from Github


## Anatomy of A Node App

### What is Node.js?

### [Quiz](#)


## Build a Dad Jokes Generator CLI
Before we begin, please take this time to retrieve the project resources: 
- [Source Code - GitHub](https://github.com/fredsiika/node-academy/tree/master/Section-1/anatomy-of-a-node-application)

###  Filesystem Structure
Our filesystem structure will look like this:

![nodejs-dad-joke-generator-cli-project-structure](https://raw.githubusercontent.com/fredsiika/node-academy/master/Section-1/nodejs-dad-joke-generator-cli-project-structure.png)


### Setup
>First of all, make sure that you have the latest Node.js version installed. For this article, I’ll be using version 12.12.0 from [nodejs.org](https://nodejs.org/). 

Open up the terminal and create a directory for our application:
```bash
$ mkdir dad-jokes-generator-cli
```

Enter the newly created directory.
```bash
$ cd dad-jokes-generator-cli
``` 

Initialize the Node.js application. This creates a <code>package.json</code> file:
```bash
$ npm init

name: (dad-joke-generator-cli) 
version: (1.0.0) 
description: A simple Node.js CLI app that generates corny dad jokes on the console.
entry point: index.js
test command: 
git repository: 
keywords: nodejs, cli, api
author: Fred Siika
license: (ISC)

Is this ok? (yes) yes
```

Next, because we're not using any dependencies for this tutorial, we don't need to download any npm modules.

The <code>package.json</code> file should look like this:
```json
{
  "name": "dad-joke-generator-cli",
  "version": "1.0.0",
  "description": "A simple Node.js CLI app that generates corny dad jokes on the console.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "cli",
    "api"
  ],
  "author": "Fred Siika",
  "license": "ISC",
  "dependencies": {
  }
}

```

### Basic Scaffolding

Our project will contain the following files:

![directory-tree](https://raw.githubusercontent.com/fredsiika/node-academy/master/Section-1/directory-tree.png)


--- 
> ** Line numbers correspond to file location in screenshot above **

#### <code>index.js</code> (line 7): The entry point for the app.

- Dependencies (mathLib, jokesLib)
- Logic

---

#### <code>math.js</code> (line 6): Utility library for math-related functions

**Logic:** This file is responsible for returning an integer random number between a provided min and max value. 
This file will be imported by our <code>index.js</code> (line 7) as a means to select a random joke from the <code>jokes.txt</code> file.  


1. Create a <code>math</code> object.
    ```js
    // App Object
    var math = {};
    ```

2. Define a function called <code>getRandomNumber</code> and assign its return value as a key to the math object

    ```js
    // Get a random integer between two integers
    math.getRandomNumber = function(min, max) {
        min = typeof(min) == 'number' && min % 1 === 0 ? min : 0;
        max = typeof(max) == 'number' && max % 1 === 0 ? max : 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    ```
    [Source of Inspiration - Stackoverflow](http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript)

3. Export the <code>math</code> object
    ```js
    // Export the library
    module.exports = math;
    ```
Everything in the <code>math</code> object is exported and made available to any outside files. This includes the function <code>getRandomNumber</code> which will be used later to select random jokes.

---

#### <code>./lib/jokes/</code> (line 3): Directory for <code>jokes.txt</code> and <code>index.js</code> files.
The jokes folder handles everything regarding jokes.

- <code>lib/jokes/jokes.txt</code> (line 5)

- <code>lib/jokes/index.js</code> (line 4)

---

## Test the CLI

Before we test our app, we're going to navigate back to the base of our directory. 
```bash
$ cd ../..
```

To start our Node.js application run the command: 
```bash
$ node index.js
```

The console shows:
```bash
$ node index.js

Why should you avoid the duck psychologist? He's a quack.
What do cows do in their spare time? Go to the moooovies.
Why do birds hate Instagram? They prefer to tweet.
Where do fish keep all their money? The river bank.
Why did the sheep get detention? It was baaaaaad.
Why couldn't the horse congress pass any bills? They all kept voting naaaaaay.

```

Success! We can see that our application is printing random jokes every second.

To stop the app press <code>control-x</code>.

## Source Code
You can find the complete source code for this example on [GitHub](https://github.com/fredsiika/node-academy)

## Final Review
Today, we’ve learned how to create Node.js CLI app that generates random dad jokes.


### Further Reading:

- [Node.js Documentation](#https://nodejs.org/en/docs/)
