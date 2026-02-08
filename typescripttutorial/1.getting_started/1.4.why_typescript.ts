// it fixes problems with dynamic types

function getProduct(id){
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5
  }
}

const product = getProduct(1);
console.log(`The product ${product.Name} costs $${product.price}`);
// here product.Name is undefined, because getProduct return value uses name (lowercase) not Name
// we would not know that until runtime


// another common problem
const showProduct = (name, price)  => {
  console.log(`The product ${name} costs $${price}.`);
};

const product = getProduct(1);
showProduct(product.price, product.name);
// Here we provided the args in the wrong order. 
// this is another common problem with js

// to fix this, typescript introduced the interfaces
// it define the shape of the product object, we'll learn about it later
// but here is an example

interface Product{
    id: number,
    name: string,
    price: number
}

// then we can indicate this interface as the return type of getProduct() function
function getProduct(id): Product{
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5
  }
}

// now, if you use a property that does not exist, code editor will inform you immediately
// (ignore the function definition duplicate error)

// to fix the issue of passing args in the wrong order
// explicitly assign types to function params

const showProduct = (name: string, price: number) => {
    console.log(`The product is ${name} costs $${price}.`);
}

// now if you pass wrong the wrong args, you will receive an error