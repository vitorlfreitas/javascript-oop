# Classical vs Prototypal Inheritance

This class is just to inform you about the existence and how JavaScript works under the hood. For you to know more about it. 
Watch:
- [Inheritance in JavaScript part 1](https://youtu.be/1UTqFAjYx1k?si=insHVWlOcC1_H-cB)
- [Inheritance in JavaScript part 2](https://youtu.be/jnME98ckDbQ?si=W2OB-zwpVOrSB_b-)

## Classical:

Classical inheritance is a term borrowed from classical OOP languages, such as, Java or C++. In classical inheritance, you create classes that define the properties and methods of objects, and then you create instances of those classes. Classical inheritance was introduced in the ECMAScript 6 with the class syntax, but under the hood, it is a prototypal inheritance.

## Prototypal:

Prototypal inheritance is the fundamental inheritance model in JavaScript. Every object in JS has a prototype chain, which allows objects to inherit properties and methods from other objects.
``` javascript
const animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
};

const dog = Object.create(animal);
dog.name = 'Buddy';
dog.speak(); 
```
## Key Differences:
    - Syntax: Classical inheritance relies on the class syntax introduced in ECMAScript 6, while prototypal inheritance uses the Object.create().

    - Approach: Classical inheritance emphasizes the concept of classes and instances, while prototypal inheritance focuses on the relationships between objects and their prototypes.

## Objects Has Power
    
    Since all objects in JavaScript inherence the "Master Class", they all inherence useful methods. Which also means that all the properties can be modified and controlled by us through the methods Object.defineProperty(), or similar methods, such as Object.preventExtension() and so on.
    These settings are, value, writable, enumerable, and configurable. 

    - writable:
        - Description: Determines if the property can be changed.
    - enumerable:
        - Description: Determines if the property can be enumerated.
    - configurable:
        - Description: Determines if the property can be modified by methods like Object.defineProperty(); Note: You still can delete the property.
        