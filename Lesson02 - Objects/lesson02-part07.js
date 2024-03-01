/*          *** Non-Extensible Objects ***

    A non-extensible object is one to which new properties cannot be added. Once an object is made non-extensible, it cannot be made extensible again. You can make an object non-extensible using the Object.preventExtensions() method.
    This would solve the problem of adding new properties dynamically.

    * Syntax:
        const obj = {};
        Object.preventExtensions(obj); // Make the object non-extensible

    * Use Cases for Non-Extensible Objects:
        - Data Integrity: Making an object non-extensible can help ensure that its structure remains unchanged and prevent accidental modification.

        - Performance Optimization: Non-extensible objects may provide performance benefits in certain scenarios since JavaScript engines can optimize their internal representations knowing that their structures won't change.
*/

// Uncomment this code
// 'use strict'

// Same code of the Lesson02 - Part05
function BankAccount(accountNumber) {
    this.accountNumber = accountNumber;
    let balance = 0;

    this.addMoney = function(money) {
        if (money <= 0) throw new Error('Invalid Number');
        balance += money;
    };
    this.getBalance = function() {
        return balance;
    }
    Object.preventExtensions(this);
}

const myAccount = new BankAccount(115);
console.log(myAccount.getBalance()); // 0
myAccount.addMoney(500);
console.log(myAccount.getBalance()); // 500

// Impossible to get this value 
console.log(myAccount.balance); // Undefined

// Impossible to assign a new property dynamically
myAccount.balance = 550;
console.log(myAccount.balance); // Undefined

console.log(myAccount.getBalance()); // 500

// If we use 'use strict' mode, it will throw an error.
// TypeError: Cannot add property balance, object is not extensible
// Uncomment the 'use strict' mode