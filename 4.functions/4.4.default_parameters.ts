// js added default params since ES2015 (or ES6)

// example of a param with default value (discount)
function applyDiscount(price: number, discount = 0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95


// it can also be done typescript
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95


// RULE
// function type definitions cannot include default params
let promotion: (price: number, discount: number = 0.05) => number; // error


// just like optional params, default params can also be omitted


// default params don't need to come after required params

// When a default parameter appears before a required parameter, you need to explicitly pass undefined to get the default initialized value.

function getDay(year: number = new Date().getFullYear(), month: number): number {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) &&
                !(year % 100 == 0))
                || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}

// In this example, the default value of the year is the current year if you don’t pass an argument or pass the undefined value.

// The following example uses the getDay() function to get the number of days in Feb 2019:

let day = getDay(2019, 2);
console.log(day); // 28


// To get the number of days in Feb of the current year, you need to pass undefined to the year parameter like this:

let day = getDay(undefined, 2);
console.log(day);