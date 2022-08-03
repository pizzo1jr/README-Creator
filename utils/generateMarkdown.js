// function that returns a license badge based on which license is passed in
// if no license is choosen, will pass in an empty string
function renderLicenseBadge(license) {
    if (license !== 'no license') {
        return `
        ![badge](https://img.shields.io/badge/license-${license}-blue)
        `;
    } else {
        return '';
    }
}

// function that returns a license link
// if there is not a license, will return empty string
function renderLicenseLink(license) {
    if (license !== 'no license') {
        return `
        [${license}](https://choosealicense.com/licenses/${license})
        `;
    } else {
        return '';
    }
}

//function that returns the license section of README
// if there is not a license, will return empty string
function renderLicenseSection(license) {
    if (license !== 'no license') {
        return `
## License (#table-of-contents)
The application is covered under the following license:
${renderLicenseLink(license)}
        `;
    } else {
        return '';
    }
}

// function that returns license in table of contents
// if there is not a license, will return empty string 
function renderLicenseTOC(license) {
    if (license !== 'no license') {
    return `
    * [License](#license)
      `;
    } else {
      return ' ';
    }
   }

// Function that will generate the Markdown for the README
function generateMarkdown(data) {
    return `
# Title
${data.title}

${renderLicenseBadge(data.license)}
    
## Description(#table-of-contents)

${data.description}

- What was the motivation for this project? ${data.what}
- Why was this project built? ${data.why}
- What problem(s) does this project solve? ${data.problem}
- What did you learn? ${data.learn}

## Table of Contents
     
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseTOC(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation (#table-of-contents)

${data.installation}

## Usage (#table-of-contents)

${data.usage}

${renderLicenseSection(data.license)}

## Contributing (#table-of-contents)

${data.contributors}

## Tests (#table-of-contents)

${data.test}

## Questions (#table-of-contents)

Please contact me using the following links!
[Github](https://github.com/${data.github})
[Email ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown ;