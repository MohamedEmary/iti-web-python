/*
Create Class
a. Employee has the properties name (whose value defaults to the empty string) and dept
    (whose value defaults to "general").
b. Manager is based on Employee. It adds the reports property (whose value defaults to an
    empty array, intended to have an array of Employee objects as its value).
c. WorkerBee is also based on Employee. It adds the projects property (whose value
    defaults to an empty array, intended to have an array of strings as its value).
d. SalesPerson is based on WorkerBee. It adds the quota property (whose value defaults to  100).
    It also overrides the dept property with the value "sales", indicating that all
    salespersons are in the same department.
e. Engineer is based on WorkerBee. It adds the machine property (whose value defaults to
    the empty string) and also overrides the dept property with the value "engineering".
*/

class Employee {
  constructor(name = "", dept = "general") {
    this.name = name;
    this.dept = dept;
  }
}

class Manager extends Employee {
  constructor(name = "", dept = "general", reports = []) {
    super(name, dept);
    this.reports = reports;
  }
}

class WorkerBee extends Employee {
  constructor(name = "", dept = "general", projects = []) {
    super(name, dept);
    this.projects = projects;
  }
}

class SalesPerson extends WorkerBee {
  constructor(name = "", dept = "sales", projects = [], quota = 100) {
    super(name, dept, projects);
  }
}

class Engineer extends WorkerBee {
  constructor(name = "", dept = "engineering", projects = [], machine = "") {
    super(name, dept, projects);
    this.machine = machine;
  }
}

export { Employee, WorkerBee, SalesPerson, Engineer };
