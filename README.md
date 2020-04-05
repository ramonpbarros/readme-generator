
# Readme Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/ramonpbarros/readme-generator)
> This is a command-line application that dynamically generates a README.md from a user's input. The user will be prompted for their GitHub username, which will be used to make a call to the GitHub API to retrieve their profile image. They will then be prompted with questions about their project.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

## Screenshots
![Example gif](./img/project.gif)

## Technologies
* JavaScript
* Node.js
* NPM
* GitHub API

## Setup
This application runs in the terminal. Make sure to npm install dependencies!

Repository can be found here: [GitHub/ramonpbarros](https://github.com/ramonpbarros/readme-generator) Make sure to git clone and check out the code!

## Code Examples
Show examples of usage:
`fsWriteFile("output/README.md", markDown(answers, githubData)).then(() => {}.catch(() => {})`

## Features
List of features:
* Use of fs module to prompt the user.
* Use of axios package to retrive information from GitHub API.
* Dynamically genarate a README.md file.

To-do list:
* Authenticate application with GitHub API to retrieve more information from the user.

## Status
Project is: _in progress_
* Check the application in the terminal. The application will be invoked with the following command: `node index.js`

## Inspiration
Project inspired by UCSD Coding Bootcamp, based on second month of course, applying node.js and JavaScript skills.

## Contact
Created by [@ramonpbarros](https://github.com/ramonpbarros) - feel free to contact me!
  
  