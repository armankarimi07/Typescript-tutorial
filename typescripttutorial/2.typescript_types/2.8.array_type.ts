// array is an ordered list of data.

// let arrayName: type[];

let skills: string[] = [];

// you can add stuff
skills[0] = "Problem Solving";
skills[1] = "Programming";

// or use push() method
skills.push('Software Design');

// after defining an array of specific type, ts will prevent you from adding incompatible values

// the length property
let series = [1, 2, 3];
console.log(series.length); // 3


// some other useful array methods: forEach(), map(), reduce(), and filter()
let series = [1, 2, 3];
let doubleIt = series.map(e => e* 2);
console.log(doubleIt); // [2, 4, 6]


// It's possible to store an array of mixed types
let scores: (string | number)[];
scores = ['Programming', 5, 'Software Design', 4]; 

