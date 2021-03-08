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
            type: 'list',
            name: 'continue',
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"]
        }
    ])

    .then((answers) => {
        employeeList.push(answers);

        console.log(employeeList);

        if (answers.continue === "Yes"){
            promptUser();
        }

        else {
            let employeeCards = "";

            for (var i = 0; i < employeeList.length; i++) {
                const employeeInfo = employeeHTML(employeeList[i]);
                
                employeeCards += employeeInfo;
            };

            fs.writeFile(`${__dirname}/dist/index.html`, generateHTML(employeeCards), (err) => {
                if (err) {
                    throw err;
                }
            });
        };
    })

    .catch((err) => console.error(err));
};

promptUser();