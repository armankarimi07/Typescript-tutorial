// rest parameter allows use to use represent indefinite number of arguments

// rules:
// a function can only have on rest parameter
// must appear last in the list
// the type is an array


// To declare a rest parameter, you prefix the parameter name with three dots (…) and use the array type as the type annotation
// function fn(...rest: type[]) {}


// example
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60

// TypeScript allows you to handle rest parameters with multiple types using union types.

function combine(...args: (number | string)[]): [number, string] {
  let total = 0;
  let str = '';
  args.forEach((arg) => {
    if (typeof arg === 'number') {
      total += arg; // sum up all numbers
    } else if (typeof arg === 'string') {
      str += arg; // concatenate all strings
    }
  });

  return [total, str]; // returns a tuple containing the total sum of numbers, and concatenated strings
}

const [total, str] = combine(3, 'Happy', 2, 1, ' New Year');

console.log({ total });
console.log({ str });
// { total: 6 }
// { str: 'Happy New Year' }