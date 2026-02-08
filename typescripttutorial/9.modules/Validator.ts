interface Validator { // this interface is exposed to other modules by export keyword
    isValid(s: string): boolean
}


// another way is to do this:
// export { Validator };

// ts also allows for renaming for module consumers
export { Validator as StringValidator };
