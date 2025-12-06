// Type inference describes where and how TypeScript infers types when you don’t explicitly annotate them.

// if you don't annotate a variable, typescript will try to infer the type using its value

// in functions params, if a default is provided, ts will use that

function setCounter(max=100) {
    console.log('hi');
}

// ts will also try to infer the return type of a function
function increment(counter: number) { // this will be number
    return counter++;
}


// ts uses the best common type algorithm to analyze each item
// and select a type that is compatible with all other candidates

// let items = [1, 2, 3, null]; // will become the following
let items: (number | null)[] = [1, 2, 3, null]; // number or null

// let items2 = [1, 2, 3, 'Cheese'];
let items2: (number | string)[] = [1, 2, 3, 'Cheese'];


// contextual typing
// ts uses the location of vars to infer their type
document.addEventListener('click', function (event) {
    console.log(event.button); 
});

// ts knows that event is an instance of MouseEvent because of click event

// if you change click to scroll, ts will throw an error

// TypeScript knows that the event in this case, is an instance of UIEvent, not a MouseEvent. And UIEvent does not have the button property, therefore, TypeScript throws an error.

// type annotation -> you explicitly tell ts the types
// type inference -> ts guesses the type