// Casting and Assertions are the same (7.1)
// Casting is the process of overriding a type

// (it may sometimes be necessary to override a variable type. such as when incorrect type is provided by a library)

// we use the 'as' keyword for it
let x: unknown = 'hello';
console.log((x as string).length);


// casting does not change the type of the variable, e.g. the following will not work
// because x1 is still a number
let x1: unknown = 4;
console.log((x as string).length);


// typescript still attempts to typecheck casts to prevent casts that does not seem right
// the following will result in error
console.log((4 as string).length);


// there is also an alternative syntax for casting
// with the use of <>
// this will not work with TSX files
let x2: unknown = 'hello';
console.log((<string>x).length);


// Force casting
// force casting will override typescript's attempt to typecheck normal type casting
// use <> for force casting

// to override type errors when type casting, first cast to unknown then to target type
let x3 = 'hello';
console.log(((x as unknown) as number).length);
// x3 is not actually a number so this will return undefined

