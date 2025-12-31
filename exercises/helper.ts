// prevent the array from being changed
const names: readonly string[] = ["Dylan"];


// which statement correctly defines a readonly tuple in typescript
const point: readonly [number, number] = [1, 2];


// an object with name and age properties
let user: { name: string; age: number } = {
  name: "John",
  age: 30
};


// add the correct types
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};


// we use ? with the parameter or object property name to make it optional


// the default numeric value assigned to the first enum member if no initializer is specified is 0


// aliases -> type keyword


// complete the following function to include the parameter c if it is provided
function multiply(a: number, b: number, c?: number): number {
  return c ? a * b * c : a * b;
}


// casting to HTMLInputElement
// Casting using the angle bracket syntax
const input = document.getElementById('input');
const value = <HTMLInputElement>input.value;


// public methods can be overridden by child classes


// add the correct generic type parameter for this function
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}


// complete the generics
function createPair<typeX, typeY>(x: typeX, y: typeY): [typeX, typeY] {
 return [x, y];
}
console.log(createPair<string, number>('Meaning', 42));


// add the correct generic type parameters for this interface
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}


// add the correct utility type to make all properties of Uesr readonly
type ReadOnly = Readonly<User>;


// add the correct utility type to pick only specific properties
interface User {
  id: number;
  name: string;
  email: string;
}

type UserBasics = Pick<User, "id" | "name">;