class Account{

    constructor(accountName, accountBalance)
    {
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }

    withdrawal(amount)
    {
        this.accountBalance -= amount;
    }

    deposit(amount)
    {
        this.accountBalance += amount;
    }

    balance()
    {
        return this.accountBalance;
    }
}

function main() {
    var ryansAccount = new Account("Ryan's Account", 100);
    var mattsAccount = new Account("Matt's Account", 1000);
    var myAccount = new Account("My Account", 0);
    mattsAccount.withdrawal(100);
    myAccount.deposit(100);
    alert("$20 have been added to: " + ryansAccount.accountName +" " + ryansAccount.accountBalance);
    alert("$100 have been withdrawn from: " + mattsAccount.accountName + " " + mattsAccount.accountBalance);
    alert("$100 have been deposited into: " + myAccount.accountName + " " + myAccount.accountBalance);
}
main();