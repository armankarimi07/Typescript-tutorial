// sometimes the type of a variable is not known
// and for some reason, you prefer to opt out of the type checking

// example
let result: any;

result = 1;
console.log(result);

result = 'Hello';
console.log(result);

result = [1, 2, 3];
const total = result.reduce((a: number, b: number) => a + b, 0);
console.log(total);


// another example
// json may come from a third-party API
const json = `{"latitude": 10.11, "longitude":12.12}`;

// parse JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);


// in this example, ts infers currentLocation to be of any
// when we attempt to access a non-existing property of x, ts does not carry any checks
console.log(currentLocation.x); // undefined

// any is very useful for migrating a javascript project to typescript

// if you don't specify a type for a value, ts assumes 'any'

// if you used any with an object, you can't use methods, there will be no errors if method does not exist
let result: any;
result = 10.123;
console.log(result.toFixed());
result.willExist(); // no errors at compile time
// willExist() may not exist at compile, but may be available in runtime

