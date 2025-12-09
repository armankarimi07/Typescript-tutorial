// to use optional parameters in typescript, you need to instruct the compiler not to raise an error when you omit the arguments

// to make a function parameter optional, use the ? after the parameter name

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

// IMPORTANT
// Note that if you use the expression if(c) to check if an argument is not initialized, you would find that the empty string or zero would be treated as undefined.


// RULE
// optional params must appear AFTER required params

