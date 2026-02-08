// type keyword can be used to create new names for existing types
// occasionaly useful for simplifying complex types
// making code more readable
// and ...

// type alias = existingType;

// example
type Name = string;

let firstName: Name;
let lastName: Name;


// example, a type alias Person for an object with two properties
type Person = {
  name: string;
  age: number;
};

let person: Person = {
  name: 'John',
  age: 25
};


// example type alias for union type
type alphanumeric = string | number;

let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
// input = false; // Compiler error


// example of type alias for intersection type Personal & Contact
type Personal = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

type Candidate = Personal & Contact;

let candidate: Candidate = {
  name: "Joe",
  age: 25,
  email: "joe@example.com",
  phone: "(408)-123-4567"
};