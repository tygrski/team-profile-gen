const inquirer = require('inquire');
const fs = require('fs');

class teamMembers 

inquirer
  .prompt({
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
    chioces: [ 'Engineer', 'Intern']
  }
  )

  