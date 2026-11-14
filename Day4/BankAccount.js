class BankAccount{
    constructor(accountHolder,balance){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("Insufficient balance");
        }
        else{
            this.balance -= amount;
        }
    }
    getBalance(){
        console.log(this.balance);
    }
}

const ba1 = new BankAccount("Dhoni",400000);
ba1.deposit(5000);
ba1.getBalance();
ba1.withdraw(2000);
ba1.getBalance();
ba1.withdraw(500000);

//op

// 405000
// 403000
// Insufficient balance