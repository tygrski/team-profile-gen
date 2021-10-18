const inquirer = require("inquirer");
const fs = require("fs");
const teamTemplate = require("./teamPage")
const team = [];

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { start } = require("repl");

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
  .prompt({
  type: "list",
  name: "employeeList",
  message: " would you like to add another employee ?",
  choices: ["Engineer", "Intern", "Manager", 'None'],
  question1, question2, question3
})
.then((response) => {
  if (response.employeeList === "Manager") {
    addManager();
  } else if (response.employeeList === "Engineer") {
    addEngineer();
  } else if (response.employeeList === "Intern") {
      addIntern()
    }
     else generateTeam();
  });
  
  
  
  inquirer
  
  };

  function addManager () {
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
          allEmployees = team.push(manager);
          console.log(manager);
          console.log(`Manager's name: ${manager.getName()}`);
          console.log(team);
          startQuestions();
        });
  }

function addEngineer() {
  inquirer
    .prompt([ question1, question2, question3, {
      type: "input",
      name: "githubUsername",
      message: "What is your Github user name ?"}]
      )
    .then((data) => {
      const githubUserName = data.githubUserName
      const engineer = new Engineer(
          data.name,
          data.id,
          data.email,
          data.githubUserName
        );
        allEmployees = team.push(engineer);
        console.log(team);
        console.log(engineer);
        console.log(`Engineer's name: ${engineer.getName()}`);
        startQuestions();
      });
  };

function addIntern() {
  inquirer
    .prompt([ question1, question2, question3, {
      type: "input",
      name: "school",
      message: "What is the name of your school ?",
    }])
    .then((data) => {
        const school = data.school;
        const intern = new Intern(
          data.name, 
          data.id, 
          data.email, 
          data.school
          );
        allEmployees = team.push(intern);
        console.log(team);
        console.log(intern);
        console.log(`Intern's name: ${intern.getName()}`);
        startQuestions();
    });
  };


function generateTeam (){
  const content = teamTemplate(team)
  fs.writeFile('./dist/index.html', content, err => {
    if (err) {
      console.error(err)
      return
    }
     console.log("file written successfully")
  })
};

startQuestions();
