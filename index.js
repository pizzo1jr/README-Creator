// External Packages Used 
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please provide project title. (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please provide project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a general description of your application. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description of your application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'what',
            message: 'Provide your motivation for this project. (Required)',
            validate: whatInput => {
                if (whatInput) {
                    return true;
                } else {
                    console.log('Please provide your motivation for this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'why',
            message: 'Why did you build this project. (Required)',
            validate: whyInput => {
                if (whyInput) {
                    return true;
                } else {
                    console.log('Please explain why you build this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does this project solve. (Required)',
            validate: problemInput => {
                if (problemInput) {
                    return true;
                } else {
                    console.log('Please explain what problem this solves!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What test did you run. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter a test!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What do you need to install for this program to run effectively (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter installaion information!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: 'learn',
            message: 'What did this project help you learn. (Required)',
            validate: learnInput => {
                if (learnInput) {
                    return true;
                } else {
                    console.log('Please input what you learned!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide information for using your application. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide information for using your application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Are there any contributors or would you like additional contributors. (Required)',
            validate: contributorsInput => {
                if (contributorsInput) {
                    return true;
                } else {
                    console.log('Please enter contributor information!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message:'Which license will you use for your project?',
            choices: ['agpl', 'apache', 'mit', 'no license']
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email for other developers to contact you. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email for others to contact you!');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username! (Required)', 
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter github user name!');
                    return false;
                }
            }
        }
    ]);
}; 



// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'file created'
            });
        });
    });
};

// function will initialize app
promptUser ()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
});



