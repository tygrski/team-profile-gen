const inquirer = require('inquire');


class Employee {
  
}

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
  })