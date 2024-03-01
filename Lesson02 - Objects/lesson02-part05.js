/*          *** Encapsulation in Objects ***

    The concept of Encapsulation is to encapsulate certain properties and methods within an object, making them inaccessible from the outside scope. This is crucial for maintaining data integrity and controlling access to sensitive information within your code.

    Privacy helps prevent unintended manipulation or access to critical data. By hiding certain properties and methods, you can ensure that they are only accessible by methods, enhancing the reliability and security of your code.

    Imagine an Bank application which you code manipulate the balance without any restriction. That is why you should encapsulate your code
*/
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
}

const myAccount = new BankAccount(115);
console.log(myAccount.getBalance()); // 0
myAccount.addMoney(500);
console.log(myAccount.getBalance()); // 500

// Impossible to get this value 
console.log(myAccount.balance); // Undefined

myAccount.balance = 550;
console.log(myAccount.balance); // 550

console.log(myAccount.getBalance()); 500

console.log(myAccount);
/* Output:
BankAccount {
accountNumber: 115,
addMoney: [Function (anonymous)],
getBalance: [Function (anonymous)],
balance: 550
}
*/

/* In JavaScript, we can set new properties dynamically, which is a huge problem. Fortunately, there is a way to prevent it, and you will see in the next Lesson */