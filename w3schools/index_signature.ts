// the purpose of index signature is to type objects of unknown structure when you only know the key and value types

const nameAgeMap: { [index: string]: number } = {};
// we know that the member of this object must have a name with type of string that points to age with type of number


// another example
// we want to write a function that will calculate the total salary of a 'employee' object
// the structure of this 'employee' object is as follows:
const salary1 = {
  baseSalary: 100_000,
  yearlyBonus: 20_000
};


function totalSalary(salaryObject) {
    let total = 0;
    for (const name in salaryObject) {
        total += salaryObject[name];
    }

    return total;
}
// this works, but not ideal.
console.log(totalSalary(salary1));

// if you provide the following object, the function will produce unexpected results
const salary3 = {
  baseSalary: '100 thousands'
};

console.log(totalSalary(salary3));


// index signature will help us with that (it does not fully fix the issue)
function totalSalaryWithIndexSignature(salaryObject: { [key: string]: number }) {
    let total = 0;
    for (const name in salaryObject) {
        total += salaryObject[name];
    }
    return total;
}

// { [key: string]: number } is the index signature, which tells TypeScript that salaryObject has to be an object with string type as key and number type as value.


// this is slightly better, however the main problem still persists

// examples
// in this object, The string type is the key, the value can be a string, number, or boolean:
interface Options {
  [key: string]: string | number | boolean;
  timeout: number;
}

const options: Options = {
  timeout: 1000,
  timeoutMessage: 'The request timed out!',
  isFileUpload: false
};


