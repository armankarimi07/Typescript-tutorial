// for loop executes a block of code repeatedly as long as the condition is true
// the condition is evaluated at the end of each iteration (and once at the beginning)

// all three expressions in for loop are optional
// for(;;) { // this is valid, as long as you know what you want
//     // do something
// }


// example
for (let i = 0; i < 10; i++) {
    console.log(i);
}


// example, the initialization is outside for loop
let i = 0;
for (; i < 10; i++) {
    console.log(i);
}


// if condition is omitted, you should provide a break condition yourself
// or you will end up with an infinite loop
for (let i = 0; ; i++) {
    console.log(i);
    if (i > 9) break;
}


let i = 0;
for (; ;) {
    console.log(i);
    i++;
    if (i > 9) break;
}

