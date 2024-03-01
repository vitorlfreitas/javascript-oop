// Enumerating an Object

// For simplicity, just 2 attributes
const person = {
    name: 'Mark',
    age: 18,
}

// Enumerating all elements using the classic for in 
for (const key in person) {
    if (typeof person[key] !== 'function') 
        console.log(key, person[key]);
}

// Using an Immediately Invoked Function Expression (IIFE)
(() => entries = Object.entries(person).forEach(([key, value]) => console.log(`${key}: ${value}`)))();

// Getting all the attributes
const attributes = Object.keys(person); // Returns an array
console.log(attributes); // [ 'name', 'age' ]

// Checking if an attribute belongs to an Object
const hasProperty = ('name' in person) ? true : false;
console.log(hasProperty); // true