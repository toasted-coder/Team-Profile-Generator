// Required libraries
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Class files import
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// HTML template import
const generateHTML = require('./src/generateHTML');
const employeesHTML = require('./src/employeesHTML');

// empty array for storing employee info
let employeeList = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the employee's name?", // had to use "" or else the ' in employee's breaks everything
            name: 'name',
        },
        {
            type: 'number',
            message: "What is the employee's ID number?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the employee's email address?",
            name: 'email',
        },
        {
            type: 'number',
            message: "What is the employee's ID number?",
            name: 'id',
        },
        {
            type: 'list',
            message: "What is the employee's role?",
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            when: input => {
                return input.role == 'Manager'
            },
            type: 'input',
            name: 'officeNumber',
            message: "What is their office number?",
        },
        {
            when: input => {
                return input.role == 'Engineer'
            },
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?",
        },
        {
            when: input => {
                return input.role == 'Intern'
            },
            type: 'input',
            name: 'school',
            message: "What school is the intern attending?",
        },
        {
            type: 'input',
            name: 'confirm',
            message: "Would you like to add another employee?(type yes or no then press enter)",
            choices: ["Yes", "No"]
        }
    ])
    .then((answers) => {
        employeeList.push(answers);

        if (answers.confirm === 'yes') {
            console.log(employeeList, answers)
            promptUser();
        } else {
            let employeeAnswers = {
                manCards: '',
                engCards: '',
                intCards: '',
            };
            for (let i = 0; i < employeeList.length; i++) {
                let employees = employeesHTML(employeeList[i]);
                switch (employeeList[i].role) {
                    case 'Manager':
                        employeeAnswers.manCards += employees;
                        break;
                    case 'Engineer':
                        employeeAnswers.engCards += employees;
                        break;
                    case 'Intern':
                        employeeAnswers.intCards += employees;
                        break;
                    default:
                        break;
                }
            }
            init(employeeAnswers);
        }
    })
};

const writeHTML = util.promisify(fs.writeFile);

const init = (answers) => {
    writeHTML(`${__dirname}/dist/index.html`, generateHTML(answers))
        .then(() => console.log('Successfully wrote index.html file!'))
        .catch((err) => console.log(err));
}

promptUser();

