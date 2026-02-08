// a generic class has a generic type parameter list in angle brackets <>

class className<K,T>{
    //...
}


// generic constraints can also be applied
class className<T extends TypeA>{
    //...
}


// example
// we will develop a generic Stack class

// a stack is a data structure that works on LIFO principle

// stack has a size (empty by default), and two main operations

// push to push an element into stack
// and pop to pop an element from the stack

class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}


// to create a new stack of numbers
let numbers = new Stack<number>(5);

// the following function will return a random number between two numbers low and high
function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

// now we use the randBetween() func to generate random numbres for pushing into the numbers stack
let numbers = new Stack<number>(5);

while (!numbers.isFull()) {
    let n = randBetween(1, 10);
    console.log(`Push ${n} into the stack.`)
    numbers.push(n);
}


// the following will pop elements from stack until empty
while (!numbers.isEmpty()) {
    let n = numbers.pop();
    console.log(`Pop ${n} from the stack.`);
}



// following is a stack of Strings
let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach(word => wordStack.push(word));

// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}


