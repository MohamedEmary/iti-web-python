class Person {
  #byear = 18;
  #fullName;
  constructor(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
  }

  moveName() {
    console.log(this.fname, "is moved");
  }

  moveAge = () => {
    console.log(this.age, "is moved");
  };

  getBYear() {
    const thisYear = new Date().getFullYear();
    console.log(thisYear - this.#byear);
  }

  getFullName() {
    this.#fullName = `${this.fname} ${this.lname}`;
    console.log(this.#fullName);
  }

  static getInfo() {
    return "this is a static method";
  }
}

let p = new Person("Mohamed", 23);
console.log(p);
p.moveAge();
p.moveName();

// p.#byear = 20;
p.byear = 20;
console.log(p);

p.getBYear();

p.lname = "Emary";
p.getFullName();

console.log(Person.getInfo());
// console.log(p.getInfo());

// static method is related to the class itself not the instance

class Empolyee extends Person {
  constructor(fname, lname, age, dept, salary) {
    super(fname, lname, age);
    this.dept = dept;
    this.salary = salary;
  }

  moveName() {
    return "this overrides the parent method";
  }
}

const Mohamed = new Empolyee("Mohamed", "Emary", 23, "IT", 10000);
console.log(Mohamed);
console.log(Mohamed.fname);
console.log(Mohamed.age);
console.log(Mohamed.dept);
console.log(Mohamed.lname);
Mohamed.moveAge();
console.log(Mohamed.moveName());




