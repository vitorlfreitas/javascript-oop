/*          *** Object.defineProperty() ***
    
    It is a powerful method that allows us to define new properties or modify existing ones on an object.  It provides a well-defined control over various attributes of a property, such as its value, enumerability, and configurability. 

    * Syntax:
        Object.defineProperty(obj, prop, descriptor);

    - obj: The object that we will define the property.
    - prop: The name of the property to be defined or modified.
    - descriptor: An object that contains the configuration of the property being defined or modified.

    The *Descriptor* can contain the following properties:
        - value: The value associated with the property. Default is undefined.
        - writable: A boolean indicating whether the property's value can be changed. Default is false.
        - enumerable: A boolean indicating whether the property will be listed during enumeration of the object's properties. Default is false.
        - configurable: A boolean indicating whether the property's attributes can be changed or the property can be deleted. Default is false.
        - get: A function that serves as a getter for the property, invoked when the property is read.
        - set: A function that serves as a setter for the property, invoked when the property is assigned a new value.

    * Important Considerations:
        - Compatibility: Object.defineProperty() is supported in ECMAScript 5 and above. It may not work in older browsers.

        - Strict Mode: In strict mode ('use strict'), attempting to define new properties on *non-extensible objects* or redefining non-configurable properties will throw a TypeError.

        - Inheritance: Object.defineProperty() only affects the specified object directly. To define properties in a prototype chain, you need to call it on each object in the chain.

    * Use Cases: It's commonly used for defining special properties like getters/setters, computed properties, or defining non-enumerable properties.

    NOTE: Non-extensible Objects we will cover next lesson
*/

// Code from the previous lesson
function BankAccount(accountNumber) {
    this.accountNumber = accountNumber;
    let balance = 0;

    this.addMoney = (value) => {

        if (value <= 0) throw new Error('Invalid Value');

        balance += value;
    },

    Object.defineProperty(this, 'balance', {
        get: function() {
            return balance;
        },
        enumerable: false // Make the balance property non-enumerable
    });
}

const myAccount = new BankAccount(115);

// Accessing from the Getter
console.log(myAccount.balance); // Output: 0

myAccount.balance = 550; // Failing to set a new value
console.log(myAccount.balance); // Output: 0

try {
    myAccount.addMoney(-1);
} 
catch (e) {
    console.log(e.message);
}
myAccount.addMoney(500);

console.log(myAccount.balance); // 500

console.log(myAccount);
/* Output:
BankAccount { accountNumber: 115 }
*/
