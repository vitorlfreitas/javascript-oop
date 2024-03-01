// Review - Objects

/* Object Literal  is a syntactic construct for creating objects directly in code. It's a way to define a new object by specifying its properties and values within curly braces {}. 
Only use object literals for creating simple objects. Otherwise, your code will lose readability. */

const person = {
    // Attributes - Primitives Types
    name: 'John',
    age: 25,
    gender: 'Male',
    // Attributes - References Type
    address: {
        country: 'Ireland',
        city: 'Cork'
    },
    // Methods
    eat() {
        console.log('eating...');
    },
    drink() {
        console.log('drinking...');
    }
}

// Accessing an attribute or method
console.log(person.name); // Primitive Attributes
console.log(person.address.country); // References
person.eat(); // Calling a method