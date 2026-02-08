// extending an interface allows us to copy the properties and methods of one interface to another

// suppose the following interface:
interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}


// if this interface is already under use by some classes, adding a new method may break functionality

// to avoid this, we create a new interface that extends Mailable interface, and add our new method to that

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}


// now an example that implements the FutureMailable interface

class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email}.`);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}


// an interface can extend multiple interface

interface A {
    a(): void
}

interface B extends A {
    b(): void
}


interface C {
    c(): void
}

interface D extends B, C { // this one extends multiple interfaces
    d(): void
}



// interfaces can extend classes as well
// will inherit properties and methods (public, private, and protected)
// if private or protected properties exist, that interface can only be implemented by classes that subclass the initial class from which our interface now extends

class Control {
    private state: boolean;
}

interface StatefulControl extends Control {
    // this has state + a new method called enable
    enable(): void
}

class Button extends Control implements StatefulControl {
    // Button extends Control class and then implements the StatefulControl interface adding it the enable method
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control { }


// Error: cannot implement
class Chart implements StatefulControl {
    // cannot implement because is not subclass of the Control
    enable() { }
}

