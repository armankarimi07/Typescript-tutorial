// an intersection type creates a new type by combining multiple existing types
// the new type has all features of both existing types


// use & operator

// (also using the union operator or pipe will define a variable can hold a value of either first one or second one)

// let varName = typeA | typeB; // union type

// suppose the following interfaces
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}


// the following defines two intersection types
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;


// the Employee type contains all properties of Identity and Contact
let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};


// And Customer contains all properties of BusinessPartner and Contact
let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};


// Later, if you want to implement employee sales, you can create a new intersection type that contains all properties of Identity, Contact, and BusinessPartner types

type Employee = Identity & BusinessPartner & Contact;

let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000
};


// NOTE: if two combining types have the same property, type must be the same
// otherwise there will be an error


// when you intersect types, the order of types does not matter
// (which comes before or after the &)

