// technically, javascript does not have a concept of classes such as languages like Java or C#
// instead, ES5 introduced concepts of prototype which can be used to represent a Class
// therefore, it is more accurate to call javascript a prototype-based language rather than object oriented language


// Here is a Person class with three porperties
function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}

// then we can define a prototype method that will get the full name of the Person
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// then you can use the new keyword to create a 'class' based on the Person
let person = new Person('171-28-0926','John','Doe');
console.log(person.getFullName());


// ES6 improved this process by adding some syntatic sugar
class Person {
    ssn;
    firstName;
    lastName;

    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// usage is the same
let person = new Person('171-28-0926','John','Doe');
console.log(person.getFullName());


// typescript adds annotations to this
class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
