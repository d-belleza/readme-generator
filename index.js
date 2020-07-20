const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/template');

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
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3']
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how to use your project'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Provide description on how to contribute to your project'
        },
        {
            type: 'input',
            name: 'install',
            message: 'What command should be run to install dependencies?',
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?'
        }
    ]);
};

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log('README.md created!');
	});
}

promptUser()
    .then(data => generateMarkdown(data))
    .then(markdown => writeToFile('./dist/README.md', markdown))
    .catch(err => console.log(err));