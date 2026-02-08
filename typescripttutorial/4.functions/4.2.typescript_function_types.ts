// A function type has two parts: parameters and return type. When declaring a function type

// (parameter: type, parameter:type,...) => type

let add: (x: number, y: number) => number;


// The following example shows how to assign a function to the add variable:
add = function (x: number, y: number) {
    return x + y;
};


// Also, you can declare a variable and assign a function to a variable like this:
let add: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };

// If you assign other functions whose type doesn’t match the add variable, TypeScript will issue an error:
add = function (x: string, y: string): number {
    return x.concat(y).length;
};


// if type definition has annotations, you can skip adding annotations to assignment
// ts will infer it (contextual typing), significantly reducing the amount of code with annotations