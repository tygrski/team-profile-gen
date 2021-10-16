const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, githubUserName) {
      super(name, email, id);
      this.title = "Engineer"
      this.githubUserName = githubUserName
    }

    getRole() {
      return this.title
  }

    getGitHub() {
      return this.githubUserName
    }

  }

module.exports = Engineer