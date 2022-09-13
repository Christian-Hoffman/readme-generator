const fs = require("fs");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {

  }
  if (license === 'apache2.0') {

  }
  if (license === 'unlicense') {

  }
}



inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What would you like your title to be?",
    },
    {
      type: "rawlist",
      name: "license",
      message: "What license will you use?",
      choices: [
        "MIT", 
        "apache2.0", 
        "unlicense"
    ],
    },
    {
      type: "input",
      name: "Description",
      message: "Write your description here",
    },
    {
      type: "input",
      name: "Installation",
      message: "Write your installation instructions here",
    },
    {
      type: "input",
      name: "Usage",
      message: "Write your usage information here",
    },
    {
      type: "input",
      name: "Contribution",
      message: "Write your contribution guidelines",
    },
    {
      type: "input",
      name: "Test",
      message: "Write your test instructions here",
    },
    {
      type: "input",
      name: "Questions",
      message: "Write your questions here",
    },
    // {
    //   type: "input",
    //   name: "",
    //   message: "",
    // },
  ])
  .then((data) => fs.writeFileSync('testREADME.md', 
  `# ${data.title}
    
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

  ## Table on Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage Information](#usage-information)
  4. [Contribution Guidelines](#contribution-guidelines)
  5. [Test Instructions](#test-instructions)
  6. [License](#license)
  7. [Questions](#questions)


  ## Description
    ${data.Description}

  ## Installation
    ${data.Installation}

  ## Usage Information
    ${data.Usage}

  ## Contribution Guidelines
    ${data.Contribution}

  ## Test Instructions
    ${data.Test}

  ## License
    ${data.license}

  ## Questions
    ${data.Questions}
`));


// module.exports = generateMarkdown;
