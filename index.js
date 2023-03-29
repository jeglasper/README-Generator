// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Title: What's your project title?", 
        name: 'title',
    }, {
        type: 'input',
        message: "Description: What is your motivation and purpose for creating this project?", 
        name: 'motivation',
    }, {
        type: 'input',
        message: "Description: What did you learn from creating this project?", 
        name: 'learned',
    }, {
        type: 'checkbox',
        message: "Table of Contents - Please list all of the sections included in your README:",
        choices: ['Installation', 'Usage', 'Licence', 'Contributors', 'Tests', 'Questions'],
        name: 'tableOfContents',
    }, {
        type: 'input',
        message: "Installation: What are the steps required to install your project?", 
        name: 'installation',
    }, {
        type: 'input',
        message: "Usage: Provide instructions and examples for use.",
        name: 'usage',
    }, {
        type: 'list',
        message: "License: What type of licence will you use for this project?", 
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" Licence', 'BSD 3-Clause "New" or "Revised" License', 'Boost Softward License 2.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero GPL v3.0', 'GNU GPL v2.0', 'GNU Lesser GPL v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license'
    }, {
        type: 'input',
        message: 'How to Contribute: Include additional guidelines for how to contribute (beyond the Contributor Covenant).', 
        name: 'contributing',
    }, {
        type: 'input',
        message: "Tests: What tests did you complete during this project? Provide examples of how to run tests", 
        name: 'tests'
    }, {
        type: 'input',
        message: 'Questions: What is your GitHub username?',
        name:  'username',
    }, {
        type: 'input',
        message: 'Questions: What is your email address?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {  
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data);
        const fileName = `${data.title.toLowerCase().split(' ').join('')}_README.md`;
        console.log(fileName);
        writeToFile(fileName, data);
    })
}
// Function call to initialize app
init();
