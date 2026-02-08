// typescript provides the readonly modifier
// allows us to mark the properties of a class immutable.

// this can be done in property declaration or constructor

// example
class Person {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

// attempting to modify this property will result into an error
let person = new Person(new Date(1990, 12, 25));
person.birthDate = new Date(1991, 12, 25); // Compile error


// Like other access modifiers, you can consolidate the declaration and initialization of a readonly property in the constructor like this:
class Person {
    constructor(readonly birthDate: Date) {
    }
}

// Do not use const for immutable class properties, use readonly access modifier