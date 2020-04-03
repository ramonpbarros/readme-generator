// TODO: Return markdown string for README file given a data object.
function generateMarkdown(response) {
    return `
# ${response.project}

## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Contact](#contact)

## Installation
To install necessary dependencies, run the following command:
\`${response.installation}\`

## Usage
${response.usage}

## License
This project is licensed under the ${response.license} license.

## Contributing
${response.contribute}

## Tests
To run tests, run the following command:
\`${response.tests}\`

## Questions


## Contact
Created by [@ramonpbarros](https://github.com/ramonpbarros) - feel free to contact me!
  
  `;
}

module.exports = generateMarkdown;
