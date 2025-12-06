// ts, boolean: true or false

let pending: boolean;
pending = true;
// after a while
// ..
pending = false;

// to manipulate boolean values use logical operators

// NOT operator
const pending: boolean = true;
const notPending = !pending; // false
console.log(result); // false

const hasError: boolean = false;
const completed: boolean = true;

// AND operator
let result = completed && hasError; 
console.log(result); // false

// OR operator
result = completed || hasError; 
console.log(result); // true

// for boolean values type annotation may not be necessary


function changeStatus(status: boolean): boolean {
   //...
   return false;
}

// JavaScript has the Boolean type that refers to the non-primitive boxed object. The Boolean type has the letter B in uppercase, which is different from the boolean type.
// IMPORTANT
// It’s a good practice to avoid using the Boolean type.