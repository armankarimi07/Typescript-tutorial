// generics allow us to write reusable and generalized forms of functions, classes, and interfaces.

// suppose you need to write a function that will return a random number in an array of numbers

// following function takes an array of numbers and returns a random element

function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

// usage
let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));

// now supposed we needed the same function but for random strings
// we could rewrite it 

function getRandomStringElement(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

// usage
let colors = ['red', 'green', 'blue'];
console.log(getRandomStringElement(colors));


// as you can see, the logic is the same
// there should be a better way to handle this scenario

// one option is to use any[] type
function getRandomAnyElement(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

// usage
// now it works for numbers and strings...
let numbers = [1, 5, 7, 4, 2, 9];
let colors = ['red', 'green', 'blue'];

console.log(getRandomAnyElement(numbers));
console.log(getRandomAnyElement(colors));

// this option works, but has a drawback, it does not enforce type of the returned element,
// in other words, it is not type-safe

// a better solution is to use generics

// The following shows a generic function that returns the random element from an array of type T
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

// usage

let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement<number>(numbers); 
console.log(randomEle);

// here we explicitly passed number
// but in practice, we usually let compiler infer the type itself

let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement(numbers); 
console.log(randomEle);


// now this function is type-safe
// the following will result to an error
let numbers = [1, 5, 7, 4, 2, 9];
let returnElem: string;
returnElem = getRandomElement(numbers);  // compiler error



// another example
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

// usage
let result = merge(
    { name: 'John' },
    { jobTitle: 'Frontend Developer' }
);

console.log(result); // { name: 'John', jobTitle: 'Frontend Developer' }

