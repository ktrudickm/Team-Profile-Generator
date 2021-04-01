const inquirer = require("inquirer");
const fs = require("fs");

const intern = require("./lib/Intern.js");
const manager = require("./lib/Manager.js");
const engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");

let empArray = [];

const ManagerQ = [
    {
        type: "input",
        message: "What is the team's name?",
        name: "teamName",
    }
    {
        type: "input",
        message: "What is the name of the team's Manager?",
        name: "managerName",
    }
    {
        type: "input",
        message: "What is the ID of the Manager?",
        name: "managerID",
    }
    {
        type: "input",
        message: "What is Manager's email address?",
        name: "managerEmail",
    }
    {
        type: "input",
        message: "What is the office number of the Manager?",
        name: "managerOffice",
    }
]

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
            when: (userInput) => userInput.EmpRole === "Engineer"
        }
        {
            type: "input",
            message: "What is the school that the Intern attends?",
            name: "school",
            when: (userInput) => userInput.EmpRole === "Intern"
        }
        {
            type: "confirm",
            message: "Do you have more team members to add?",
            name: "addEmployee",
        }
    ]).then(empInfo => {
        handleInputs(empInfo);
    }
}

function handleInputs(answers) {
    if (answers.EmpRole === "Engineer") {
        empArray.push(new Engineer(answers.EmpName, answers.EmpId, answers.EmpEmail, answers.github));
        
    } else if (answers.EmpRole === "Intern") {
        empArray.push(new Intern(answers.EmpName, answers.EmpId, answers.EmpEmail, answers.school));
    }
    if (answers.addEmployee === true) {
        EmployeeInfo();
    } else {
        createHTML();
    }
}

function createHTML() {

    
}



function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
               err ? console.log(err): console.log("Generating Team's Portfolio...");
           })
}

// Function is initializing the app
function init() {
    inquirer.prompt(ManagerQ)
        .then(ManagerData => {
            teamManager = new manager(ManagerData.managerName, ManagerData.managerID, ManagerData.managerEmail, ManagerData.managerOffice);
            teamName = ManagerData.teamName;
            EmployeeInfo();
    });
}

// Function call to initialize app
init();





// function init() {
//     inquirer.prompt(questions)
//         .then((response) => {
//             writeToFile('README.md', generateMarkdown(response))
//         })
// }