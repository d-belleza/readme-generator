const generateMarkdown = data => {
    const {
        github,
        email,
        project,
        description,
        license,
        usage,
        contribute,
        install,
        test
    } = data;

    return `
    # ${project}

    ![${license} license badge](https://img.shields.io/badge/license-${license}-green.svg)

    ## Description

    ${description}

    ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributing](#contributing)
        * [Testing](#testing)
        * [Questions](#questions)
        
    ## Installation

    ${install}

    ## Usage

    ${usage}

    ## License

    The project uses the following license:
    ${license}

    ## Contributing
    ${contribute}

    ## Testing
    ${test}

    ## Questions
    Visit my Github
    [${github}](https://github.com/${github})

    Additional questions, please send an email at
    [${email}](mailto:${email})
    `;
}

module.exports = generateMarkdown;