// consider the following generic function

function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

// usage
let person = merge(
    { name: 'John' },
    { age: 25 }
);

console.log(person);

// if you supply a non object argument, function will not throw any errors
let person = merge(
    { name: 'John' },
    25
);

console.log(person); // {name: 'John'}

// Instead of working with all types, you may want to add a constraint to the merge() function so that it works with objects only

// To do this, you need to list out the requirement as a constraint on what U and V types can be.

// for that we can use the extends keyword:
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}


// Now, the merge function is constrainte
// so the following would no longer work
let person = merge(
    { name: 'John' },
    25
);



// The following prop() function accepts an object and a property name. It returns the value of the property.

function prop<T, K>(obj: T, key: K) {
    return obj[key];
}

// Type 'K' cannot be used to index type 'T'.
// to fix this, we add a constraint to K to ensure that it is a key of T as follows:
function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

// now this will work, because key exists:
let str = prop({ name: 'John' }, 'name');
console.log(str); // John

// but if key does not exist, there will be an error
let str = prop({ name: 'John' }, 'age');

