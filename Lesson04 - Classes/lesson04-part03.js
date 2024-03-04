//          *** Private Attributes ***

class BankAccount {

    // Private Property
    #balance = 0;

    constructor(accountNumber) {
        this.accountNumber = accountNumber;
    }
    addMoney(value) {
        if (value > 0) {
            this.#balance += value;
        }
    }
    getBalance() {
        return this.#balance;
    }

    // Private Method, 
    // Only methods within the class scope can use this method
    #sumNumber(a, b) {
        return a + b;
    }

}

const myAccount = new BankAccount('123456');
myAccount.addMoney(100);
console.log(`Account Balance: $${myAccount.getBalance()}`);