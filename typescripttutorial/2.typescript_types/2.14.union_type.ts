// suppose we need a function to work with numbers and strings

function add(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

// the problem with this function is that it accepts any type
// but that's not he behavior we want

// we use union type to fix this, it allows us to combine multiple values into one type

let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK
result = false; // a boolean value, not OK

// A union type describes a value that can be one of several types, not just two. 
// For example number | string | boolean can be either number, string or boolean

// updated version
function add(a: number | string, b: number | string) :  number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}



