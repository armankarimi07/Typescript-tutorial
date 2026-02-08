// if statement will execute a block based on a condition if condition is true

const max = 100;
let counter = 0;

if (counter < max) {
    counter++;
}

console.log(counter); // 1

// to execute another statement when the if condition evaulated to false, use the else statement

const max = 100;
let counter = 100;

if (counter < max) {
    counter++;
} else {
    counter = 1;
}

console.log(counter);


// for simple conditionals, the ternary operator can also be used
const max = 100;
let counter = 100;

counter < max ? counter++ : counter = 1;

// if condition is true, execute counter++ else set counter to 1

console.log(counter);


// to evaluate more than conditions, use the else if statement after if and before else
// (there can be only one else)

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5; // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10; // 10% discount
} else if (itemCount > 10) {
  discount = 15; // 15%
} else {
  throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount}% discount. `);
