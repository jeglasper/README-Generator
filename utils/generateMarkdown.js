// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, data) {
  let mitLicense = `MIT License
  
  Copyright (c) 2023 ${data}
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.`

  if(license == 'Yes') {
    const fs = require('fs');
    fs.writeFile('LICENSE', mitLicense, (err) =>
    err ? console.error(err) : console.log('Success!')
  ) 
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else {
    return ''
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'Yes') {
    return '[MIT License Link](LICENSE)'
  } else {
    return ''
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'Yes') {
  return 'This file has an MIT License. Check out the linked license below for more details:'
  } else {
    return ''
  }  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license, data.fullname)}

  ## Description

### Project Motivation & Purpose

${data.motivation}

### What I Learned Making This Project

${data.learned}

## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

[License](#license)

## Installation

${data.installation}

## Usage

It is important to provide instructions on how to use your project with visual aids as relevant. Please see the information below to get a better picture of how to use this project:

${data.usage}

## Contributing

This project will follow the [Contributor Covenant Code](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) of Coduct unless otherwise indicated in the text below:

${data.contributing}
  
## Tests

Testing is an important part of ensure every project runs successfully and meet standards of our acceptance criteria for any project we complete for our user. Please see below for more information (if applicable) about the tests used for this project:

${data.tests}

## Questions

If you have questions about this project, you can find my GitHub profile (@${data.username}) at the link below:

https://github.com/${data.username}

If you would like to communicate with me outside of Github, please send me an email at the following address:

[${data.email}](${data.email})

## License

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}
  `;
  
}

module.exports = generateMarkdown;
