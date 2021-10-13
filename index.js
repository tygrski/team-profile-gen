const inquirer = require('inquire');
const fs = require('fs');

const team = [];

const Employee = require('.lib/employee');
const Manager = require ('./lib/manager');
const Engineer = require('./lib/manager');
const Intern = require('./lib/Intern');
// start prompt function

// add manager

// add team memebers, if(enginer) ....etc

// add engineer

// add intern

// generate page

// cal to start prompt

inquirer
  .prompt(
   {
    type: 'input',
    name: 'name',
    messge: 'What is your name ?'
  },
  {
    type: 'input',
    name: 'id',
    messge: 'What is your employee ID ?'
  },
  {
    type: 'input',
    name: 'email',
    messge: 'What is your employee email ?'
  }, 
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number ?'
  },
  {
    type: "input",
    name: 'position',
    message: 'Select  an employees position in the company.',
    chioces: [ 'Manager', 'Engineer', 'Intern']
  }
  );
  
// engineer question
  inquirer
  .prompt({
    type: 'input',
    name: 'githubUserName',
    message: 'What is yout Github user name ?'
  })

  
  // intern question

inquirer
.prompt({
  type: 'input',
  name: 'school',
  message: 'What is the name of your school ?'
})

  const answers = (name, email, id, officeNumber)

