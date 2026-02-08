// an Enum is a group of named constants values. 
// Enum stands for enumerated type

// use the enum keyword to declara one

// an example of an enum that represents the months of the yaer
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};


// an example of a function that uses Month enum as the month parameter
function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }
  return isSummer;
}

console.log(isItSummer(Month.Jun)); // true


// doing the following also works
console.log(isItSummer(6)); // true
// why?
// because when compiled, typescript enum is an object in js.
// This object has named properties declared in the enum. For example, Jan is 0 and Feb is 1.

// The generated object also has number keys with string values representing the named constants.

// That’s why you can pass a number into the function that accepts an enum. In other words, an enum member is both a number and a defined constant.

// if you want, you can manually specify numbers
enum Month {
    Jan = 1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

// In this example, the Jan constant value takes 1 instead of 0. The Feb takes 2, and the Mar takes 3, etc.

// use enums when:
    // Have a small set of closely related fixed values.
    // And these values are known at compile time.

// example
enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

const request =  {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if(request.status === ApprovalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}

// summary
// Under the hood, an enum is a JavaScript object with named properties declared in the enum definition.

