// a class can use properties and methods of another class
// this is called inheritance

// JavaScript uses prototypal inheritance, not classical inheritance like Java or C#. 

// ES6 introduces the class syntax that is simply the syntactic sugar of the prototypal inheritance. TypeScript supports inheritance like ES6.

class Person {
  constructor(private firstName: string, private lastName: string) {}
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

// the following inherits from Person
class Employee extends Person {
  //...
}

// the properties of parent class still need to be initialized in child class constructor
// for that, we use the super() syntax
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        
        // call the constructor of the Person class:
        super(firstName, lastName);
    }
}

// usage
let employee = new Employee('John','Doe','Front-end Developer');

// calling methods of parent class from child
let employee = new Employee('John', 'Doe', 'Web Developer');

console.log(employee.getFullName());
console.log(employee.describe());
// John Doe
// This is John Doe.


// to allow the child class to customize a method (overload it):
// we can use the super() again

class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {

        super(firstName, lastName);
    }

    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}

let employee = new Employee('John', 'Doe', 'Web Developer');
console.log(employee.describe()); // This is John Doe, I'm a web Developer

