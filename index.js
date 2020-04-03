// TODO: import fs, path and inquirer modules
const fs = require("fs");
const util = require("util");

const inquirer = require("inquirer");

const fsWriteFile = util.promisify(fs.writeFile);
let api = require("./utils/api");
let markDown = require("./utils/generateMarkdown");

const questionsArray = [{
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
},
{
    type: "input",
    name: "project",
    message: "What is your project's name?"
},
{
    type: "input",
    name: "description",
    message: "Please write a short description of your project:"
},
{
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: [
        {
            name: "MIT"
        },
        {
            name: "APACHE%202.0"
        },
        {
            name: "GPLv3"
        },
        {
            name: "BSD%203"
        },
        {
            name: "None"
        },
    ]
},
{
    type: "list",
    name: "installation",
    message: "What command should be run to run install dependecies?",
    choices: [
        {
            name: "npm i"
        }
    ]
},
{
    type: "list",
    name: "tests",
    message: "What command should be run to run tests?",
    choices: [
        {
            name: "npm test"
        }
    ]
},
{
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?"
},
{
    type: "input",
    name: "contribute",
    message: "What does the user need to know about contributing to the repo?"
}
];

function init() {
    inquirer.prompt(questionsArray)
        .then(answers => {
            api.getUser(answers.username)
                .then(githubData => {
                    // have access to answers and githubData here
                    // generate markdown
                    // write to file
                    fsWriteFile("output/README.md", markDown(answers, githubData))
                        .then(() => {
                            console.log("Done writting file!")
                        })
                        .catch(error => {
                            throw error;
                        })
                });
        })
        .catch(error => {
            throw error;
        })
}

init();
