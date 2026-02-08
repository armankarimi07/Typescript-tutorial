// typescript interfaces define the contracts within your code
// they also provide explicit names for type checking


// example
function getFullName(person: {
    firstName: string;
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(person)); // John Doe


// in this example, getFullName function expects an object with firstName and lastName as strings
// anything else will result to error


// by using interfaces, we can move this logic to its own syntax to make the function definition cleaner


interface Person {
    firstName: string;
    lastName: string;
}

// PascalCase is the convention for interface names

// getFullName updated version
function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(john));


// you can also use js destructuring to make it a bit more concise
function getFullName({ firstName, lastName }: Person) {
  return `${firstName} ${lastName}`;
}


// any object that has at least two properties with the names firstName and lastName will work as well

let jane = {
  firstName: 'Jane',
  middleName: 'K.',
  lastName: 'Doe',
  age: 22,
};

let fullName = getFullName(jane);
console.log(fullName); // Jane Doe


// to declare and optional parameter: use the ? 
interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}

function getFullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}


// to make properties modifiable only when first created:
interface Person {
  readonly ssn: string;
  firstName: string;
  lastName: string;
}

let person: Person;
person = {
  ssn: '171-28-0926',
  firstName: 'John',
  lastName: 'Doe',
};


person.ssn = '171-28-0000'; // error TS2540: Cannot assign to 'ssn' because it is a read-only property.


// interfaces can also represent function types
interface StringFormat {
    (str: string, isUpper: boolean): string
}

let format: StringFormat;

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hi', true)); // HI


// Note that the parameter names don’t need to match the function signature. The following example is ok as well:

let format: StringFormat;

format = function (src: string, upper: boolean) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};

console.log(format('hi', true));


// this is also fine, ? although i don't know why, the second arg is not provided, and it was not optional either?? so why is this ok?
// after some search:
// it is ok because the args provided to the function is a subtype of the interface (signatural subtyping)
// and isUpper is not used in this function
let lowerCase: StringFormat;
lowerCase = function (str: string) {
    return str.toLowerCase();
}

console.log(lowerCase('Hi', false));


// classes can implement interfaces
interface Json {
  toJson(): string;
}

class Person implements Json {
  constructor(private firstName: string, private lastName: string) {}
  toJson(): string {
    return JSON.stringify(this);
  }
}

let person = new Person('John', 'Doe');
console.log(person.toJson());

// {"firstName":"John","lastName":"Doe"}

