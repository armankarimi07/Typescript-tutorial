// The string literal types allow you to define a type that accepts only one specified string literal.

// The following defines a string literal type that accepts a literal string 'click':
let click: 'click';

click = 'click'; // valid

// other string will result to compiler error
click = 'dblclick'; // compiler error

// useful to limit a possible string value that a variable can store.

// The string literal types can combine nicely with the union types to define a finite set of string literal values for a variable:
let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error


// to make it more usable, we can use type aliases
type MyMouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent: MyMouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dblclick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid
mouseEvent = 'mouseover'; // compiler error

let anotherEvent: MyMouseEvent;

