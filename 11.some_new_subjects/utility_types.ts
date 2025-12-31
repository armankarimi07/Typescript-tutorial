// TypeScript provides several utility types to facilitate common type transformations. These utilities are available globally.

// Awaited<Type>
// used to model operations like await in async functions
// or then() method on Promises specifically the way they recursively unwrap Promises

type A = Awaited<Promise<string>>;
// A will eventually be string

 
type B = Awaited<Promise<Promise<number>>>;
// type B = number

type C = Awaited<boolean | Promise<number>>;
// type C = number | boolean


// Partial<Type>
// constructs a type with all properties of Type set to optional
// will return a type that represents all subsets of a given type
// useful for when need to partially update an object

interface Todo{
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});


// Required<Type>
// the opposite of Partial
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };
const obj2: Required<Props> = { a: 5 }; // Error, 'b' is missing


// Readonly<Type>
// all properties will be set to readonly
// they cannot be reassigned
interface Todo {
  title: string;
}
 
// Error duplication error: description is missing IGNORE
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Something else"; // title is read-only property


// Record<Keys, Type>
// Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

type CatName = "miffy" | "boris" | "mordred";
 
interface CatInfo {
  age: number;
  breed: string;
}
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
cats.boris;
 

// There are a lot more