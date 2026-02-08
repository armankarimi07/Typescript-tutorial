// a tuple is similar to an array with some differences

// the number of elements is fixed
// The types of elements are known, and need not be the same.

// example, a tuple to represent a value as a pair of a string and a number
let skills: [string, number];
skills = ['Programming', 5];

// the order is important, if you change it you'll get an error

// For this reason, it’s a good practice to use tuples with data that are related to each other in a specific order.

// For example, you can use a tuple to define an RGB color that always comes in a three-number pattern: (r, g, b)

let color: [number, number, number] = [255, 0, 0];

// Optional tuple elements
// Since TypeScript 3.0, a tuple can have optional elements specified using the question mark (?) postfix.

// For example, you can define an RGBA tuple with the optional alpha channel value:
let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];


// Note that the RGBA defines colors using the red, green, blue, and alpha models. The alpha specifies the opacity of the color.

