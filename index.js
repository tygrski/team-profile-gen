const inquirer = require("inquirer");
const fs = require("fs");

const team = [];

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const question1 = {
    type: "input",
    name: "name",
    message: "What is your name ?",
  };
const question2=  {
    type: "input",
    name: "id",
    message: "What is your employee ID ?",
  };
 const question3 = {
    type: "input",
    name: "email",
    message: "What is your employee email ?",
  };


// start prompt function
function startQuestions() {
  inquirer
    .prompt([ question1, question2, question3, {  
    type: "input",
    name: "officeNumber",
    message: "What is your office number ?"}
    ])
    .then((data) => {
      
        const manager = new Manager(
          data.name,
          data.id,
          data.email,
          data.officeNumber
        );
        addEmployee();
        console.log(manager);
        console.log(`Manager's name: ${manager.getName()}`);
        
      });
  };

  function addEmployee () {
    inquirer
    .prompt({
    type: "list",
    name: "addEmployee",
     message: " would you like to add another employee ?",
    choices: ["Engineer", "Intern", "No"],
  })
  .then((response) => {
    if (response.choices === "Engineer") {
      engineerQuestions();
    } else if (response.choices === "Intern") {
      internQuestions();
      } else genratePage();
    });
  }

function engineerQuestions() {
  inquirer
    .prompt([ question1, question2, question3, {
      type: "input",
      name: "githubUsername",
      message: "What is your Github user name ?"}]
      )
    .then((data) => {
      
      const engineer = new Engineer(
          data.name,
          data.id,
          data.email,
          data.githubUserName
        );
        addEmployee();
        console.log(engineer);
        console.log(`Engineer's name: ${engineer.getName()}`);
      });
  };

function internQuestions() {
  inquirer
    .prompt([ question1, question2, question3, {
      type: "input",
      name: "school",
      message: "What is the name of your school ?",
    }])
    .then((data) => {
      const school = response.school;
    
        const intern = new Intern(
          data.name, 
          data.id, 
          data.email, 
          data.school
          );
        addEmployee();
        console.log(intern);
        console.log(`Intern's name: ${intern.getName()}`);
    });
  };


// generate page

startQuestions();
