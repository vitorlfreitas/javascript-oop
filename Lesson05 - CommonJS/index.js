/*          Modules

    * What is modules?
        A module is to split your code into small pieces of code, dividing all the responsibilities per file. It is part of one of the most important concept of SOLID, which means that each class must have only one responsibility. It is a great way to organize your code, and make your code way more readable. 

    * How does it work?
        You create a new file for each class, methods, variables or other code of your code, and then you export the file and import to access those exported parts.

    * CommonJS vs ES6 Modules
        Modules are new in JavaScript, it starts from ES6, before that, many programmers had developed many ways to use modules in their codes. One way that is still used, but for Node.js applications, is the CommonJS. While for browsers is used the ES6 Modules introduced in 2015 by ECMAScript 6 

    * Browser Support
        Modern browsers already support ES6

    * Let's Practice!
*/

// First take a look at person.js

// Import the classes
const Person = require('./person');
const SuperHero = require('./person');

// Creating the instances
const character = new Person(124, 'Joker');
const myHero = new SuperHero(125, 'Batman', 'Sword');
// Calling functions of my classes
console.log(character.getName());
myHero.ultimate();

/* 
// I cannot instance the Thief class, cause I have not export it
const thief = new Thief(124, 'Common Bandit');
ReferenceError: Thief is not defined
Remove the comments and see the output */
