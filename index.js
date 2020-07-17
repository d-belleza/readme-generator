const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: githubInput => {
                if (githubInput) {
                return true;
                } else {
                console.log('Please enter your GitHub Username!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
            validate: emailInput => {
                if (emailInput) {
                return true;
                } else {
                console.log('Please enter your email address!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'Enter your project name',
            validate: projectInput => {
                if (projectInput) {
                return true;
                } else {
                console.log('Please enter your project name!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description about the project',
            validate: descInput => {
                if (descInput) {
                return true;
                } else {
                console.log('Please enter your project description!');
                return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What licenses should the project have?',
            choices: ['MIT', 'HTML', 'CSS']
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to run tests?'
        }
    ])
}

promptUser()