import Account from "./Account.js";

class Processor {
  constructor(transactionStrategy) {
    this.accounts = new Map();
    this.transactions = [];
    this.transactionStrategy = transactionStrategy; // Injected
  }

  handleTransaction(type, strategy, data) {
    const {
      fromId,
      toId,
      amount,
      currency = "USD",
      targetCurrency = "USD",
    } = data;
    const from = fromId ? this.getAccount(fromId) : null;
    const to = toId ? this.getAccount(toId) : null;
    let status = "failed";
    let message = "";
    try {
      message = strategy.execute({
        from,
        to,
        amount,
        currency,
        targetCurrency,
      });
      status = "success";
    } catch (error) {
      message = error.message;
    }

    const txn = this.transactionStrategy.create({
      fromId,
      toId,
      amount,
      type,
      status,
    });

    this.transactions.push(txn);
    return {
      status,
      message,
      from: fromId,
      to: toId,
      amount,
      currency,
      targetCurrency,
    };
  }

  createAccount(id) {
    if (this.accounts.has(id)) {
      return {
        status: "error",
        message: "Account already exists",
      };
    }

    const account = new Account(id);
    this.accounts.set(id, account);
    return {
      status: "success",
      id: id,
    };
  }

  getAccount(id) {
    return this.accounts.get(id);
  }

  getTransactions(accountId = null) {
    if (!accountId) {
      return {
        status: "success",
        transactions: this.transactions,
      };
    }
    return {
      status: "success",
      transactions: this.transactions.filter(
        (txn) => txn.from === accountId || txn.to === accountId
      ),
    };
  }

  getBalance(id) {
    const account = this.accounts.get(id);
    if (!account) {
      return {
        status: "error",
        message: "Account not found",
      };
    }
    return {
      status: "success",
      id: id,
      balance: account.balance,
    };
  }
}

export default Processor;
