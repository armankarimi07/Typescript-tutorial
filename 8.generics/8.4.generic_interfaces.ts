// interfaces can be made generic to work with different types while maintaining type safety

interface interfaceName<T> {
    // ...
}

// examples
// Generic interfaces that describe object properties
interface Pair<K, V> {
    key: K;
    value: V;
}


// now you can use the Pair interface, to define any key/value pair with any type
let month: Pair<string, number> = {
    key: 'Jan',
    value: 1
};

console.log(month);


// Generic interfaces that describe methods
// The following declares a generic interface with two methods add() and remove():

interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

// And this List<T> generic class implements the Collection<T> generic interface:
class List<T> implements Collection<T>{
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}

// usage
let list = new List<number>();

for (let i = 0; i < 10; i++) {
    list.add(i);
}


// Generic interfaces that describe index types
// The following declares an interface that describes an index type:
interface Options<T> {
    [name: string]: T
}

let inputOptions: Options<boolean> = {
    'disabled': false,
    'visible': true
};

