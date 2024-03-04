//          *** Static vs Instance Methods

class Person {
    // Belongs to class
    static numberOfPeople = 0;

    constructor(name, age) {
        // Belongs to the instances
        this.name = name;
        this.age = age;
        Person.numberOfPerson++;
    }
    // Instanced Methods
    drink() {
        console.log('Drinking...');
    }
    eat() {
        console.log('Eating...');
    }

    // Static Methods
    static getNumberPeople() {
        return Person.numberOfPeople;

    }

}
console.log(Person.getNumberPeople());

// Static Methods are all methods that belongs to the class, and it is not part of the instances. 
// A good example is the class Array has its own static methods
const arr1 = Array.of(1, 2, 3, 4, 5); // Create array from arguments
console.log(arr1); // Output: [1, 2, 3, 4, 5]

const arr2 = Array.from(arr1, x => x * 2); // Create a new array based on existing one
console.log(arr2); // Output: [2, 4, 6, 8, 10]

const arr3 = Array.isArray(arr1); // Check if object is an array
console.log(arr3); // Output: true

// All this methods are statics methods. that's why we do not have to initialize an instance and then call the method. Like this:
// const myArray = new Array();
// const arr1 = myArray.of(1, 2, 3, 4, 5);
