class Employee {
  constructor(name, id, email){
    this.name = name;
    this.id =id;
    this.title = "Employee"
    this.email = email;
  }
  getNAme() {
    return this.name;
  };
  getid(){
    return this.id;
  };
  getEmail() {
    return this.email
  };
  getRole() {

  };
}

module.exports = Employee;