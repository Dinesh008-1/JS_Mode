class BankAccount{
    #balance;
    #accountNumber;
    constructor(accountHolder,accNum,balance){
        this.accountHolder = accountHolder;
        this.#accountNumber = accNum;
        this.#balance = balance;
    }
    deposit(amount){
        this.#balance += amount;
    }
    withdraw(amount){
        if(amount>this.#balance){
            console.log("Insufficient balance");
        }
        else{
            this.#balance -= amount;
        }
    }
    get balance(){
        return this.#balance;
    }
}

const ba1 = new BankAccount("Dinesh",67656873487,800049);
console.log(ba1.balance);
ba1.deposit(2000);
console.log(ba1.balance);
ba1.withdraw(5000);
console.log(ba1.balance);
