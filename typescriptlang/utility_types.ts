// from tutorialspoint.com

// utility types allow for type transformation

// Partial -> transforms all properties of the current type to be optional
type Type = {
   prop1: string;
   prop2: string;
   prop3: number;
   prop4?: boolean;
};

let partialType: Partial<Type> = {
    prop1: "Default",
    prop4: false,
};

console.log("The value of prop1 is " + partialType.prop1); // Default
console.log("The value of prop2 is " + partialType.prop2); // undefined

// run code with tsx <filename>.ts


// Required -> makes all properties Required
let requiredType: Required<Type> = {
    prop1: "1",
    prop2: "2",
    prop3: 3,
    prop4: true // if optional one is required
}


// Pick -> allows for picking a set of properties 
type type1 = {
    color: string;
    size: number;
    id: string;
};

let newObj: Pick<type1, "color" | "id"> = {
    color: "#000000",
    id: "534552"
};



// this is from typescriptlang.org
// Omit -> removes selected elements
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

// remove description from interface Todo
type TodoPreview = Omit<Todo, "description">;
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

// remove completed and createdAt
type TodoInfo = Omit<Todo, "completed" | "createdAt">;
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};


// there are many others
