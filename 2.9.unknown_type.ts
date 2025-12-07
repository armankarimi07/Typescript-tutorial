// In TypeScript, the unknown type can hold a value that is not known upfront but requires type checking.

let result: unknown;

// Like the any type, you can assign any value to a variable of the unknown type. For example:

result = 1;
result = 'hello';
result = false;
result = Symbol();
result = { name: 'John' };
result = [1, 2, 3];

// Unlike the any type, TypeScript checks the type before performing operations on it.

// But, you will not be allowed to perform a method or apply an operator on a unknown
// ts will raise an error
let result: unknown;
result = [1,2,3];

const total = result.reduce((a: number, b:number ) => a + b, 0);
console.log(total);

// we use type assertion to tell ts compiler the type of result
let result: unknown;
result = [1, 2, 3];

const total = (result as number[]).reduce((a: number, b: number) => a + b, 0);
console.log(total); // 6
// here, well ts compiler that result is an array of numbers


// Examples of using unknown

// 1. Handling external data
// when receiving data from an external API, use unknown to enforce type validation before processing

// here is an example of calling an external API
const fetchData = async (url: string): Promise<unknown> => {
    // the shape of returned data is unknown
    const response = await fetch(url);
    return await response.json();
};

const showPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const posts = await fetchData(url);
        // here the posts variable has a type of unknown

        // before accessing the title property, we use type assertion to tell ts compiler to treat it as an array of post objects
        (posts as { userId: number; id: number; title: string; body: string }[]).map((post) => console.log(post.title));
    } catch (err) {
        console.log(err);
    }
};

showPosts();


// 2. Creating type-safe interfaces
// The following example defines a function format that format a value before logging it to the console:
function format(value: unknown): void {
  switch (typeof value) {
    case 'string':
      console.log('String:', value.toUpperCase());
      break;
    case 'number':
      console.log('Number:', value.toFixed(2));
      break;
    default:
      console.log('Other types:', value);
  }
}

// in this example, we check the type before accessing a method of the value