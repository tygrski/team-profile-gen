const inquirer = require("inquirer");


inquirer
.prompt({
  type: 'input',
  name: 'githubName',
  message: 'What is yout Github user name ?'
})
