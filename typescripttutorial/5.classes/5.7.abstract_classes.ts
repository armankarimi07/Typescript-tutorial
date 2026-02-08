// An abstract class is typically used to define common behaviors for derived classes to extend. Unlike a regular class, an abstract class cannot be instantiated directly.


// use the abstract keyword

// they typically contain one or two abstract methods
// abstract methods do not contain implementation, only defining the signature
// they must be implemented in derived classes

abstract class Employee {
  constructor(private firstName: string, private lastName: string) {}

  abstract getSalary(): number;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

// let employee = new Employee('John','Doe'); // this is wrong 
// abstract classes cannot be instantiated

// but other classes can extend them
class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private _salary: number) {
        super(firstName, lastName);
        this._salary = _salary;
    }
    getSalary(): number {
        return this._salary;
    }

    public get salary(): number {
      return this._salary;
    }
}

// another example
class Contractor extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    private _rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
    this._rate = _rate;
  }
  getSalary(): number {
    return this._rate * this.hours;
  }

  public get rate(): number {
    return this._rate;
  }
}

let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);

console.log(john.compensationStatement());
console.log(jane.compensationStatement());
// John Doe makes 12000 a month.
// Jane Doe makes 16000 a month.

console.log(john.salary);
// It’s a good practice to use abstract classes when you want to share code among some related classes.

// ? why not use get keyword with getSalary ??


// IMPORTANT
// the super() in derived class's constructor, must come before any other new properties specific to that derived class 