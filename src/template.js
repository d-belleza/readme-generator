const generateMarkdown = data => {

    return `
    # ${data.project}

    ![${data.license} license badge](https://img.shields.io/badge/license-${data.license}-green.svg)

    ## Description
    ${data.description}

    ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributing](#contributing)
        * [Testing](#testing)
        * [Questions](#questions)
        
    ## Installation
    ${data.install}

    ## Usage
    ${data.usage}

    ## License
    The project uses the ${data.license} license

    ## Contributing
    ${data.contribute}

    ## Testing
    ${data.test}

    ## Questions
    Visit my Github
    [${data.github}](https://github.com/${data.github})

    Additional questions, please send an email at
    [${data.email}](mailto:${data.email})
    `;
}

module.exports = generateMarkdown;