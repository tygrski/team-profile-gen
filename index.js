const inquirer = require('inquire');
const fs = require('fs');

class teamMembers {
  constructor(name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email
  }
};
  
class manager extends teamMembers {
    constructor(name, id, email, officeNumber) {
      super(name);
      super(email);
      super(id);
      this.officeNumber = officeNumber
    }
  };

class engineer extends teamMembers {
    cconstructor(name, id, email, githubUserName) {
      super(name);
      super(email);
      super(id);
      this.githubUserName = githubUserName
    }
  }

class intern extends teamMembers {
    constructor(name, id, email, school) {
      super(name);
      super(email);
      super(id);
      this.school = school
    }
  }

let manager = new teamMembers(name, id, email, officeNumber)
let engineer = new teamMembers(name, id, email, githubUserNAme)
let intern = new teamMembers(name,id, email, school)

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
    chioces: [ 'Engineer', 'Intern']
  }
  );
  
// engineer question
  inquirer
  .prompt({
    type: 'input',
    name: 'githubName',
    message: 'What is yout Github user name ?'
  })

  
  // intern question
  const inquirer = require("inquirer");


inquirer
.prompt({
  type: 'input',
  name: 'school',
  message: 'What is the name of your school ?'
})

  const answers = (name, email, id, officeNumber)

