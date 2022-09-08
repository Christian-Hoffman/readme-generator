const fs = require('fs');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

inquirer.prompt([
    {
        name: 'title',
        message: 'What would you like your title to be?'
    },
    {
        name: 'license',
        message: 'What license will you use?',
        type: 'rawlist',
        choice: [
            'MIT',
            '',
            ''
        ],
    },
    {
        name: 'Description',
        message: 'Write your description here'
    },
    {
        name: 'Installation',
        message: 'Write your installation instructions here'
    },
    {
        name: 'Usage',
        message: 'Write your usage information here'
    },
    {
        name: 'Contribution',
        message: 'Write your contribution guidelines'
    },
    {
        name: 'Test',
        message: 'Write your test instructions here'
    },
    {
        name: 'Questions',
        message: 'Write your questions here'
    },
])
.then(function generateMarkdown(data) {
      return `# ${data.title}
    
      ## Table on Contents
      [Description](description)
      [Installation Instructions](installation instructions)
      [Usage Information](usage information)
      [Contribution Guidelines](contribution guidelines)
      [Test Instructions](test instructions)
      [License](license)
      [Questions](questions)
    
      ## Description
        ${data.description}
      ## Installation
        ${data.installation}
      ## Usage Information
        ${data.usage}
      ## Contribution Guidelines
        ${data.contribution}
      ## Test Instructions
        ${data.test}
      ## License
        ${data.license}
      ## Questions
        ${data.questions}
    `;
    
    }).then((data) => fs.writeFileSync('README.md', data, 'utf8'));

    module.exports = generateMarkdown;
