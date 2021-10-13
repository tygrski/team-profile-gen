const Employee = require('./employee')


class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.title= 'Manager'
    this.officeNumber = officeNumber
  }

  getRole() {
   return this.title
    }

  officeNumber() {
    return this.officeNumber
  }
};

module.exports = Manager;