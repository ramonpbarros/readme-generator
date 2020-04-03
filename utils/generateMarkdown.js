// TODO: Return markdown string for README file given a data object.
function generateMarkdown(response, githubData) {
  return `
# ${response.project}
[![License: ${response.license}](https://img.shields.io/badge/License-${response.license}-blue.svg)](https://github.com/ramonpbarros/readme-generator)
> ${response.description}

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
<img src="${githubData.data.avatar_url}" alt="avatar" style="border-radius: 16px" width="50" />

## Contact
Created by [@${githubData.data.login}](${githubData.data.html_url}) - feel free to contact me! Directly at ${response.email}
  
  `;
}

module.exports = generateMarkdown;
