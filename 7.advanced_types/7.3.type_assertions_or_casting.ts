// type assertions will instruct the compiler to treat a value as a specified type

const el = document.querySelector('input[type="text"]');
const input = el as HTMLInputElement;

// here we tell the compiler to treat input as HTMLInputElement using the as keyword

// another way is this
let enteredText = (el as HTMLInputElement).value;



// The syntax for type assertion of a variable from typeA to typeB is as follows:

let a: typeA;
let b = a as typeB;


// we could also use <> to perform type assertion
let input = <HTMLInputElement>document.querySelector('input[type="text"]');

console.log(input.value);

let a: typeA;
let b = <typeB>a


// if type assertion fails, you may experience different types of error

// incompatible types may give compile time errors

let price = '9.99';
let netPrice = price as number; // error



// type assertion of an object to a type that doesn’t match its structure and attempt to access a property that doesn’t exist,
// may give runtime error

let el = document.querySelector('#name');
let input = el as HTMLInputElement;
console.log(input.value.length);


// or unexpected behavior

