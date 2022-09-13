// brings in required module
const fs = require("fs");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

// prompts for user to answer
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
      name: "github",
      message: "Enter your github username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email",
    },
  ])
  .then((data) => fs.writeFileSync('README.md', 
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
  This project is under the ${data.license} license. The button below will bring you to a link outlining the license.
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

  ## Questions
  For any questions please send issues to [https://github.com/${data.github}](https://github.com/${data.github}) or email me at [${data.email}](mailto:${data.email}).
`));


// module.exports = generateMarkdown;
