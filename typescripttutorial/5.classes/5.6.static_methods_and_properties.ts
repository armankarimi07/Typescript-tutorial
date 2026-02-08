// Unlike an instance property, a static property is shared among all instances of a class.

// to declare one use static keywrod
// to use one, use <className>.<propertyName> syntax

class Employee {
    static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
        // everytime the constructor of this class is called (e.g. a new object is instantiated)
        // this property will be increased by 1
    }

    public static getHeadcount() {
        return Employee.headcount;
    }
}


let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.headcount); // 2 (which is ok)


// methods can also be static
// added getHeadcount static method
console.log(Employee.getHeadcount); // 2

