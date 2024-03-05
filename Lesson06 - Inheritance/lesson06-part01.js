//          *** Inheritance ***

/*
* What is Inheritance:
    Inheritance is one of the 5 pillars of Object-Oriented Programming. Inheritance allows a subclass to inherit properties and methods from the super class. Promoting the reutilization of code and improving the readability. 

* How to do that:
    To create a class inheritance, we use the "extends" keyword. So then, the class with the keyword inherits all the methods and attributes from the super class.

* super Keyword:
    The super keyword access the constructor of the parent's class and pass the arguments into it, so then you can create your object. 
*/

class Person {
    constructor(name, pointsOfLife) {
        this.name = name;
        this.pointsOfLife;
    }
    get pointsOfLife() {
        return this.pointsOfLife;
    }
}
class Hero extends Person {
    constructor(name, pointsOfLife, weapon) {
        // Passing the name and pointsOfLife to the parent's constructor
        super(name, pointsOfLife);
        this.weapon = weapon;
    }
    attack() {
        console.log('Hero attacks');
    }
}
class SuperHero extends Hero {
     // Passing the name and pointsOfLife to the parent's constructor
    constructor(name, pointsOfLife, weapon, superPower) {
        super(name, pointsOfLife, weapon);
        this.superPower = superPower;
    }
    ultimatePower() {
        console.log(this.superPower + ' launched');
    }
}

// Creating our new Object. 
const superHero1 = new SuperHero('SuperJavaScript', 150, 'Sword', 'FireBall');
// You can access all the attributes 
console.log(superHero1.name);
// methods from superclass
console.log(superHero1.pointsOfLife());
// and its own methods 
superHero1.ultimatePower();