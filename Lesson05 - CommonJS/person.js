// My Class 
class Person {
    // Private Property
    #id;
    constructor(id, namePerson) {
        this.#id = id;
        this.name = namePerson;
    }
    eat() {
        console.log("Eating...");
    }
    getId() {
        return this.#id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
// Inheritance
class SuperHero extends Person {
    constructor(id, namePerson, weapon) {
        super(id, namePerson);
        this.weapon = weapon;
    }
    ultimate() {
        console.log("Ultimate launched...");
    }
}

class Thief extends Person {
    constructor(id, namePerson) {
        super(id, namePerson);
    }
    steal() {
        console.log('Stealing...');
    }
}

/* How to module:
    If we want to Export only the Person class:
    module.exports.Person = Person;
    If we want to Export only the SuperHero class:
    module.exports.SuperHero = SuperHero; 
*/

// For multiple class, use multiples exports
module.exports = Person;
module.exports = SuperHero;


