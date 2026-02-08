// typescript object type represents all values that are not primitive types

// the following is an object
let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

// assigning a primitive value to an object will result to an error

// attempting to access a non-existent property of an object will raise an error
// in js it returns undefined

// to eplicitly specify the properties of an object:
// ignore dup def error
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};

// And then assign the employee object to a literal object with the described properties
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

// or you can combine them both
let employee: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};


// Typescript also has a type called Object (with capital o)
// The object type represents all non-primitive values while the Object type describes the functionality of all objects.
// For example, the Object type has the toString() and valueOf() methods that can be accessible by any object.


// TypeScript has another type called empty type denoted by {} 
// The empty type {} describes an object that has no property on its own.

// attempting to access it will raise an error
let vacant: {};
vacant.firstName = 'John';

// But you can access all properties and methods declared on the Object type, which is available on the object via the prototype chain:
// i have no idea what the purpose of this is ??
let vacant: {} = {};
console.log(vacant.toString());


