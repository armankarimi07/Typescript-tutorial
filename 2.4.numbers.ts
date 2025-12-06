// all numbers are either floating point or big integers in ts

let price: number = 9.95;

let counter: number = 0;
let x: number = 100, 
    y: number = 200;

// as in js, ts supports number literals for decimal, hexadecimal, binary and octal

// binary numbers
let bin = 0b100;
let anotherBin: number = 0B010;

// Note that the digit after 0b or 0B must be 0 or 1.

// octal number (0 to 7)
let octal: number = 0o10;

// hexadecimal: (0123456789ABCDEF)
let hexadecimal: number = 0XA;


// IMPORTANT
// JavaScript has the Number type (with the letter N in uppercase) that refers to the non-primitive boxed object. You should not use this Number type as much as possible in TypeScript.

// big integers
let big: bigint = 9007199254740991n;
// must have the n character at the end

