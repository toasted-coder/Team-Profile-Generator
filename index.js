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