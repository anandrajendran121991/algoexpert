class Account {
  constructor(id) {
    this.id = id;
    this.balance = 0;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid deposit amount");
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
  }
}

export default Account;
