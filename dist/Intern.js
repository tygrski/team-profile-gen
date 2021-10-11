const inquirer = require("inquirer");


inquirer
.prompt({
  type: 'input',
  name: 'school',
  message: 'What is the name of your school ?'
})