//closure with encapsulation

function createBankAccount(){
    let balance = 1000;
    return {
        deposit(amt){
            balance+=amt;
        },
        withdraw(amt){
            balance-=amt;
        },
        getBalance(){
            return balance;
        }
    }
}

let account1 = createBankAccount();
let account2 = createBankAccount();

account1.deposit(200);
account1.withdraw(500);
account2.deposit(700);
account2.withdraw(500);
console.log(account1.getBalance());
console.log(account2.getBalance());