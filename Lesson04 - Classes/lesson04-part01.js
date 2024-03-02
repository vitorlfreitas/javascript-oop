/*          *** Lesson04 - Classes ***

    Classes provide a more structured and familiar way to define objects and their behavior, resembling the class-based inheritance model found in other programming languages like Java or Python. With the introduction of ES6, JavaScript introduced a class syntax that simplifies the creation of constructor functions and prototypes. However, under the hood, JavaScript classes are still based on prototypal inheritance.

*/

// Creating a new Class
class People {
    // Constructor
    constructor(name, age) {
        // Attributes
        this.name = name;
        this.age = age;
        cars = [];
    }

    // Methods
    eat() {
        console.log('eating...');
    }
    addNewCar(car) {
        if (typeof car === 'object') {
            this.cars.push(car);
            console.log('New car added');
        }
        else throw new Error('It is not an Object')

    }
}

const person = new People('John', 45);
person.addNewCar({make: 'Toyota', model: 'Hylux'});
