// in ts, each type is like a set of values
// number holds 1, 2, 3, ...
// string holds strings like hi or hello
// null only holds null

// never holds 'no value', like an empty set

// a variable with type never cannot be assigned a value

let empty: never = 'hello'; // error


// never can be used to denote impossibility in the system

// For example, you may have an intersection type that can be both a string and a number at the same time, which is impossible:
type Alphanumeric = string & number; // never

// typescript will infer this as never

// Typically, you use the never type to represent the return type of a function that never returns the control to the caller. 
// For example, a function that always throws an error:

function raiseError(message: string): never {
    throw new Error(message);
}

// IMPORTANT
// Not to be confused with functions that return void but still return the control to the caller

// functions containing an infinite loop should also have never type
function forever(): never {
  while (true) {}
}


// example of using never
type Role = 'admin' | 'user' | 'guest';

const unknownRole = (role: never): never => {
  throw new Error(`Invalid role: ${role}`);
};

const authorize = (role: Role): string => {
    switch (role) {
        case 'admin':
            return 'You can do anything.';
        case 'user':
            return 'You can do something';
        case 'guest':
            return 'You can do nothing';
        default:
            // never reach here util we add a new role
            return unknownRole(role);
    }
}

console.log(authorize('admin'));

