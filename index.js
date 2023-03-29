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
    },{
        type: 'input',
        message: "Installation: What are the steps required to install your project?", 
        name: 'installation',
    }, {
        type: 'input',
        message: "Usage: Provide instructions and examples for use:",
        name: 'usage',
    }, {
        type: 'list',
        message: "License: Will you include an MIT License on this Project?", 
        choices: ['Yes','No'],
        name: 'license'
    }, {
        type: 'input',
        message: 'How to Contribute: Include additional guidelines for how to contribute (beyond the Contributor Covenant):', 
        name: 'contributing',
    }, {
        type: 'input',
        message: "Tests: What tests did you complete during this project? Provide examples of how to run tests:", 
        name: 'tests'
    }, {
        type: 'input',
        message: "What is your first and last name?",
        name: 'fullname',
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
 )
};

// TODO: Create a function to initialize app
function init() {  
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data);
        const fileName = `Sample_README.md`;
        console.log(fileName);
        writeToFile(fileName, data);
    })
}
// Function call to initialize app
init();
