//          *** Getters and Setters ***

class BankAccount {

    // Private Property
    #balance = 0;

    constructor(accountNumber) {
        this.account = accountNumber;
    }

    addMoney(value) {
        if (value > 0) {
            this.#balance += value;
        }
        else console.error('Invalid Value');
    }
    // Getters
    get accountNumber() {
        return this.account;
    }
    get balance() {
        return this.#balance;
    }

    // Setters
    set accountNumber(accountNumber) {
        if (accountNumber.length === 0 || accountNumber === 0) 
            console.error('Enter a Valid Account Number')

        this.account = accountNumber;
    }  

}

const myAccount = new BankAccount(12552025155);
myAccount.accountNumber = 10;
console.log(myAccount.account);