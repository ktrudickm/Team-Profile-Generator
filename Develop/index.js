const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require('./generateHTML');

const intern = require("./lib/Intern.js");
const manager = require("./lib/Manager.js");
const engineer = require("./lib/Engineer.js");

let empArray = [];
let teamName;

// Object Array for Manager Question Prompts
const ManagerQ = [
    {
        type: "input",
        message: "What is the team's name?",
        name: "teamName",
    },
    {
        type: "input",
        message: "What is the name of the team's Manager?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is the ID of the Manager?",
        name: "managerID",
    },
    {
        type: "input",
        message: "What is Manager's email address?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is the office number of the Manager?",
        name: "managerOffice",
    }
]

// Object Array containing employee question prompts
const EmployeeInfo = [
    {
        type: "list",
        message: "What is the role of this Employee?",
        name: "EmpRole",
        choices: ["Intern", "Engineer"],
    },
    {
        type: "input",
        message: "What is the Employee's name?",
        name: "EmpName",
    },
    {
        type: "input",
        message: "What is the Employee's ID number?",
        name: "EmpId", 
    },
    {
        type: "input",
        message: "What is the Employee's email address?",
        name: "EmpEmail", 
    },
    {
        type: "input",
        message: "What is the Github of the Engineer?",
        name: "github", 
        when: (userInput) => userInput.EmpRole === "Engineer"
    },
    {
        type: "input",
        message: "What is the school that the Intern attends?",
        name: "school",
        when: (userInput) => userInput.EmpRole === "Intern"
    },
    {
        type: "confirm",
        message: "Do you have more team members to add?",
        name: "addEmployee",
    }
]

// Inquirer prompt for employee questions. Handles checking for which type of employee is being added.
function EmpInfo() {
    inquirer.prompt(EmployeeInfo)
        .then(answers => {
            if (answers.EmpRole === "Engineer") {
                empArray.push(new engineer(answers.EmpName, answers.EmpId, answers.EmpEmail, answers.github));
                
            } else if (answers.EmpRole === "Intern") {
                empArray.push(new intern(answers.EmpName, answers.EmpId, answers.EmpEmail, answers.school));
            }
            if (answers.addEmployee === true) {
                EmpInfo();
            } else {
                createHTML(empArray);
            }
    });
}


// Function to create HTML based on all input responses
function createHTML(emps) {
    writeToFile('TeamProfile.html', generateHTML(emps, teamName));
}

// Writing file once all inputs/responses have been entered.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
               err ? console.log(err): console.log("Generating Team's Portfolio...");
           })
}

// Function is initializing the app
function init() {
    inquirer.prompt(ManagerQ)
        .then(ManagerData => {
            empArray.push(new manager(ManagerData.managerName, ManagerData.managerID, ManagerData.managerEmail, ManagerData.managerOffice));
            teamName = ManagerData.teamName;
            EmpInfo();
    });
}

// Function call to initialize app
init();


