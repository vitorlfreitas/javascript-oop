/*          *** Constructors and Factory Functions
    Constructor functions are used to create multiple instances of similar objects. They serve as blueprints for creating objects with predefined properties and methods.
*/

// Constructor Function
function Person(name, age, location) {
    // Attributes
    this.name = name;
    this.age = age;
    this.location = location;
    // Methods
    this.eat = () => {
        console.log('eating...');
    }
}

const location1 = {
    country: 'Ireland',
    city: 'Cork'
}

const person = new Person('Alan', 35, location1);

console.log(person);
/* Person {
    name: 'Alan',
    age: 35,
    location: { country: 'Ireland', city: 'Cork' },
    eat: [Function (anonymous)]
} */

// Factory Function
function createCat(name, breed) {
    return {
        name,
        breed,
        meow() {
            console.log('Meooooooooow');
        },
        eat() {
            console.log('Eating...')
        }
    }
}