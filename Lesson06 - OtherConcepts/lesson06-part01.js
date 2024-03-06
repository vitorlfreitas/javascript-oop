/*          *** The New Data Type: Symbol() ***

    Watch: https://www.youtube.com/watch?v=4J5hnOCj69w
    
    Symbol are a primitive data type introduced in ES6. They serve as unique identifiers and are guaranteed not to collide with other values. They are also immutable and it has any built-in methods.
    The main idea of the Symbols is using for unique key or index.

    To create a Symbol, use the function Symbol();
    The Symbol() method can receive a String parameter, but it is for descriptive purposes only.

    Syntax: 
        const sym1 = Symbol('description');

*/

// How to use the symbols
const symbol1 = Symbol('description');
const symbol2 = Symbol('another description');
console.log(symbol1 === symbol2); // Outputs false

// Using Symbols in Objects
const obj = {
    [Symbol('id')]: 1,
    [Symbol('other')]: 2,
    [Symbol('other2')]: 2,
};

const symbols = Object.getOwnPropertySymbols(obj);
console.log(obj[symbols[1]]); // Accesses the value of the second symbol

// Using Symbol.for() (for globally-registered symbols):
const globalSymbol = Symbol.for('globalId');
console.log(Symbol.keyFor(globalSymbol)); // Outputs: "globalId"

