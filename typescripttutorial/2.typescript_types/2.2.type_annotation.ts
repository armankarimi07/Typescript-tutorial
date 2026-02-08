// type annotation: specifying explicit types for identifiers such as variable, functions, objects

let counter: number;

counter = 1;

// if attempt to assign anything other than number, you'll get an error

let anotherCounter: number = 0;

// annotating primitive types is straightforward
let name: string = 'John';
let age: number = 25;
let active: boolean = true;

// annotating objects types is a bit more complex
// let arrayName: primitiveType[];

let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

// for objects
let person: {
  name: string;
  age: number;
};

person = {
  name: 'John',
  age: 25,
}; // valid

// for functions and their return type
let greeting: (name: string) => string;
greeting = function (name: string) {
    return `Hi ${name}`;
};

