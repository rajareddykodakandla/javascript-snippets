/*properties - name, accountnumber, adhaarcardnumber ,mobile number,account balance

methods  - deposit(),withdraw(),viewtransactions().... */

class Customer {
    name;
    accountNumber;
    adhaarNumber;
    m_no;
    account_balance;
    deposit(amount) {
        if (amount > 0) {
            console.log("before transaction", this.account_balance);
            this.account_balance = this.account_balance + amount;
            console.log("after transaction", this.account_balance);
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (this.account_balance > amount) {
                console.log("before transaction", this.account_balance);
                this.account_balance = this.account_balance - amount;
                console.log("after transaction", this.account_balance);
            }
        }
    }

    transfer(amount, customer) {
        if(amount>0){
            if(this.account_balance > amount){
                customer.account_balance = customer.account_balance + amount
                this.account_balance = this.account_balance - amount;
                console.log(customer);
                console.log("customer1 account balance", this.account_balance);
                console.log("customer2 account balance", customer.account_balance);
            }
        }
    }
}

var customer1 = new Customer();
customer1.name = "ravi";
customer1.accountNumber = 101010;
customer1.adhaarNumber = 0999;
customer1.m_no = 9010101010;
customer1.account_balance = 9000;

var customer2 = new Customer();
customer2.name = "rajesh";
customer2.accountNumber = 1010101;
customer2.adhaarNumber = 70999;
customer2.m_no = 90101010101;
customer2.account_balance = 10000;

console.log(customer1);
console.log(customer2);
//customer1.deposit(1000);
//customer1.deposit(20000);
//customer1.withdraw(2000);

customer1.transfer(10,customer2);
console.log(customer1);
console.log(customer2);