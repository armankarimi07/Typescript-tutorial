// consider the following
function add1(x, y) {
    return x + y
}

// if you get x and y from HTML inputs, for example 10 and 20
// the reuslt of this function call may be 1020 instead of 30

// because in this scenario x and y are strings

// typescript helps with this by adding types
// which will gives us the ability to catch bugs in compile time (before runtime)

// updated version to typescript
function add2(x: number, y: number) {
    return x + y;
}

// typescript also allows us to use the upcoming features of javascript sooner