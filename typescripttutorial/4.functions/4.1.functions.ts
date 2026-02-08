// typescript adds type annotations to javascript's functions

function add(a: number, b: number): number {
    return a + b;
}


// let sum = add('10', '20'); // this will issue an error

// if function is not returning anything, it will be void

function echo(message: string): void {
    console.log(message.toUpperCase());
}

// void prevents the code inside function from returning a value,
// and stops calling this function from being assigned to a variable


// if return type is not annotated, ts will infer the appropirate type

function add(a: number, b: number) {
    return a + b;
}

// if function has different branches with different returns, ts will infer union or any

// therefore, add type annotations as much as you can