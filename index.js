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
    name: "project",
    message: "What is your project's name?"
},
{
    type: "input",
    name: "description",
    message: "Please write a short description of your project:"
},
{
    type: "checkbox",
    name: "license",
    message: "What kind of license should your project have?",
    choices: [
        {
            name: "MIT"
        },
        {
            name: "APACHE 2.0"
        },
        {
            name: "GPL 3.0"
        },
        {
            name: "BSD 3"
        },
        {
            name: "None"
        },
    ]
},
{
    type: "checkbox",
    name: "installation",
    message: "What command should be run to run install dependecies?",
    choices: [
        {
            name: "npm i"
        }
    ]
},
{
    type: "checkbox",
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

// inquirer.prompt(questionsArray)
//     .then(response => {
//         api.getUser(response.github)
//         fsWriteFile("readme.md", markDown(response))
//             .then(() => {
//                 console.log(response);
//                 console.log("Done writting file!")
//             })
//             .catch(error => {
//                 throw error;
//             })
//     })
//     .catch(error => {
//         throw error;
//     })


// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
// function writeToFile(fileName, data) {
// }

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.

function init() {
    inquirer.prompt(questionsArray)
        .then(answers => {
            api.getUser(answers.username)
                .then(githubData => {
                    // have access to answers and githubData here
                    // generate markdown
                    // write to file
                    fsWriteFile("readme.md", markDown(answers, githubData))
                        .then(() => {
                            console.log(answers);
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
