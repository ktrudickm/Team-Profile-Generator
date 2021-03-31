const inquirer = require("inquirer");
const fs = require("fs");

const intern = require("./lib/Intern.js");
const manager = require("./lib/Manager.js");
const engineer = require("./lib/Engineer.js");

function EmployeeInfo() {
    inquirer.prompt([
        {
            type: "list",
            message: "What is the role of this Employee?",
            name: "EmpRole",
            choices: ["Intern", "Engineer"],
        }
        {
            type: "input",
            message: "What is the Employee's name?",
            name: "EmpName",
        }
        {
            type: "input",
            message: "What is the Employee's ID number?",
            name: "EmpId", 
        }
        {
            type: "input",
            message: "What is the Employee's email address?",
            name: "EmpEmail", 
        }
        {
            type: "input",
            message: "What is the Github of the Engineer?",
            name: "github", 
        }
        {
            type: "input",
            message: "What is the school that the Intern attends?",
            name: "school",
        }
        {
            type: "confirm",
            message: "Do you have more team members to add?",
            name: "addEmployee",
        }
    ])
    .then(answers => {
        
    })
}
