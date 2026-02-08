// Function overloading allows you to define multiple signatures for a single function and provide one implementation that handles all defined signatures.


// Function overloading enables a function to handle different types of arguments. 

// Additionally, the TypeScript compiler uses the function signatures to perform compile-time type checking to ensure type safety.

// example
// we want an add function, that returns the sum of two numbers or strings

// first define overloaded functions
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// second provide the implementation
function add(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}

// now we can use it
console.log(add(10, 20));  // 30
console.log(add('Hello, ', 'world!'));  // 'Hello, world!


// when overloading a function, number of required params must be the same.
// if overloaded has more than the other, the additional params need to be optional

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}


// ----------------------------
// Method overloading

class Counter {
  private current = 0;
  count(): number; // no args, return a number
  count(target: number): number[]; // one required arg, return an array of numbers
  count(target?: number): number | number[] { // make it optional in implementation step
    // if it was provided, return either a number or an array of numbers
    if (target) {
      let values: number[] = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      // set current to target
      this.current = target;
      return values;
    }
    return ++this.current;
  }
}


// usage
let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(5)); // return an array
// 1
// [ 1, 2, 3, 4, 5 ]

