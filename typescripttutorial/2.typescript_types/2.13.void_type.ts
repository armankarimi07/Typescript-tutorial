// the void type denotes the absence of having any type at all

// typically used for functions that do not return anything

function log(message: string): void {
    console.log(message);
}

// Notice that if you use the void type for a variable, you can only assign undefined to that variable. 
// In this case, the void type is not useful. 

let useless: void = undefined;
// useless = 1; // error

// If the --strictNullChecks flag is not specified, you can assign the useless to null.
// useless = null; // OK if --strictNullChecks is not specified

