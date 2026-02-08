// access modifiers change the visibility of the properties and methods of a class

// we have private, protected, and public

// private -> to the same class only

class Person {
  private ssn: string;
  private firstName: string;
  private lastName: string;

  constructor(ssn: string, firstName: string, lastName: string) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// attempting to access a private property outside the class will result into error
let person = new Person('153-07-3130', 'John', 'Doe');
console.log(person.ssn); // compile error


// public modifier -> accessible from everywhere (default)
// i think commonly methods are public, and properties are private
class Person {
    // ...
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
    // ...
}


// protected  modifier -> accessible to the same class and subclasses (child classes)
class Person {
    protected ssn: string;
    
    // other code
}


// there is a shorter syntax to define a class and properties:
class Person {
  constructor(
    protected ssn: string,
    private firstName: string,
    private lastName: string
  ) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}


// good practice is to start with least visible access modifier, which is private