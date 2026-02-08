// while statement allows you to create a loop that executes a block of code, as long as the condition is true

// while evaluates the condition before each iteration

// Since the while statement evaluates the condition before its body is executed, a while loop is also called a pretest loop.

// you can also use if statement to break the loop based on another condition


let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}

// example
// how to remove all li elements of a ul element
let list = document.querySelector('#list');

while (list.firstChild) {
    list.removeChild(list.firstChild);
}


