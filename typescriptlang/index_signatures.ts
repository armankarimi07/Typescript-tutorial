// index signatures are a part of object types

// sometimes we don't know the name of a type's properties, but we do know the shape of the values
// in those cases, we use index signature to describe the type of possible values

interface StringArray {
    [index: number]: string;
}

// we know that index is number, and value is string
declare function getStringArray(): StringArray; // declare means, function will be available later,
// do not throw undefiend function error for now

const myArray: StringArray = getStringArray(); // i could not find a definition for getStringArray()
// new subject: declare
const secondItem = myArray[1];

// This index signature states that when a StringArray is indexed with a number, it will return a string.


// another example
// name’s type does not match the string index’s type, and the type checker gives an error
interface NumberDictionary {
  [index: string]: number;
 
  length: number; // ok
  name: string;
// Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}

// this is ok
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}


// you can make index signatures readonly in order to prevent assignment to their indices
declare function getReadOnlyStringArray(): ReadonlyStringArray;
interface ReadonlyStringArray {
    readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory";