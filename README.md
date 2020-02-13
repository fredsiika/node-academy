---
layout: page
title: Build a Dad Jokes Generator CLI
permalink: index.html
---

# Build a Dad Jokes Generator CLI

# Table of Contents

- [Build a Dad Jokes Generator CLI](#build-a-dad-jokes-generator-cli)
- [Table of Contents](#table-of-contents)
  - [Course Overview](#course-overview)
    - [About This Course](#about-this-course)
    - [Who This Course Is For](#who-this-course-is-for)
    - [Course Prerequisites](#course-prerequisites)
  - [Anatomy Of A Node App](#anatomy-of-a-node-app)
    - [What is Node](#what-is-node)
    - [Common Node conventions](#common-node-conventions)
  - [Build a Dad Jokes Generator CLI](#build-a-dad-jokes-generator-cli-1)
    - [Filesystem structure](#filesystem-structure)
    - [Setup](#setup)
    - [Basic Scaffolding](#basic-scaffolding)
  - [Test the CLI](#test-the-cli)
  - [Source code](#source-code)
  - [Final Review](#final-review)
  - [Further Reading](#further-reading)

---


## Course Overview

An intro to Node.js via a set of self-guided mini-projects from the command-line.

### About this course

### Who This Course Is For
Any engineer who wants to:

- gain a deeper understanding of the Node API
- write their own Node.js framework
- author their own useful Node.js modules
- be able to fix Node.js libraries when they break, and submit pull requests to your favorite Node.js projects to make them faster and more secure

### Course Prerequisites:
- A beginner audience who is hearing about your topic for the first time
- You should be comfortable in your terminal (shell) and have admin (sudo) privileges on your workstation.
- Experience in NodeJS is not required but recommended.
- [Download](https://nodejs.org/en/download/) the latest version of node.
- Text-editor (VSCode or Sublime)
- Source Code from Github

## Anatomy Of A Node App

### What is Node

A conceptual overview of Node.js. What Node is, what V8 is, and how they both work, as well as how they relate to each other.

### Common Node conventions

We'll talk about a few standard conventions used with Node.js, as well as the differences between writing javascript for Node.js and writing it for the browser.

## Build a Dad Jokes Generator CLI
Now we're going to build a Node.js CLI App that randomizes a set of corny dad jokes from a text file `jokes.txt`. Doing this exercise will familiarize yourself with several key sections of the Node.js docs:

- `"fs"`, the file system,
- `lib`,
- `string decoder`, and
- `path`

### Filesystem structure

Our filesystem structure will look like this:

![nodejs-dad-joke-generator-cli-project-structure](https://raw.githubusercontent.com/fredsiika/node-academy/master/Section-1/nodejs-dad-joke-generator-cli-project-structure.png)

[Image:](https://raw.githubusercontent.com/fredsiika/node-academy/master/Section-1/nodejs-dad-joke-generator-cli-project-structure.png) "nodejs-dad-joke-generator-cli-project-structure.png"

### Setup

### Basic Scaffolding

**Resources**

- [Tutorial Guide:](https://github.com/fredsiika/node-academy/blob/gh-pages/Section-1/resources/guides/create-index-guide.md) Use [`guide.md`](https://github.com/fredsiika/node-academy/blob/gh-pages/Section-1/resources/guides/create-index-guide.md), the step-by-step instruction guide.

Our project will contain the following files:

![directory-tree](https://raw.githubusercontent.com/fredsiika/node-academy/master/Section-1/directory-tree.png)

[Image:](https://raw.githubusercontent.com/fredsiika/node-academy/master/Section-1/directory-tree.png)
"directory-tree.png"

We'll go through each file one by one to understand how they relate to each other.

## Test the CLI

Now that we've gone through all the files that make up the project, it's time to test our CLI app.

To start the app run:

```bash
node index.js
```

To stop the app run:

`CTRL + C`

## Source code

**Resources**

- [Final Source Code:](https://github.com/fredsiika/node-academy/tree/master/Section-1/FINAL) You can find the complete source code for this example on [GitHub](https://github.com/fredsiika/node-academy/tree/master/Section-1/FINAL)

## Final Review

Today, we’ve learned how to create a simple Node.js CLI that prints random jokes to the console. We learned how to use the file system `fs` module to get all the jokes and return them to the user.

Specifically, the process of how `fs.readFileSync()`:
1. Reads the text file containing the jokes.
2. Turns the string into an array using regex.
3. Returns the contents of the `path`.

## Further Reading

If you want to get started with Node.js or need a bit of inspiration, here are some resources to check out. 
- [45 Amazing Node.js Open Source for the Past Year (2019)](https://medium.mybridge.co/45-amazing-node-js-open-source-for-the-past-year-v-2019-c774d750e925)
- [Getting Started with Node.js Guide](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [The `fs` Module - An API for Interacting with the file System](https://nodejs.org/api/fs.html)
