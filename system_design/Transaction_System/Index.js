import Processor from "./Processor.js";
import DepositStrategy from "./TransactionStrategies/DepositStrategy.js";
import WithdrawStrategy from "./TransactionStrategies/WithdrawStrategy.js";
import TransferStrategy from "./TransactionStrategies/TransferStrategy.js";
import CurrencyConverter from "./Utils/CurrencyConverter.js";
import AuditStrategyFactory from "./AuditStrategies/AuditStrategyFactory.js";

const rates = {
  CAD_USD: 0.74,
  USD_CAD: 1.35,
};

const auditStrategy = AuditStrategyFactory.create();
const bank = new Processor(auditStrategy);

bank.createAccount("A1");
bank.createAccount("A2");

bank.handleTransaction("deposit", new DepositStrategy(), {
  toId: "A1",
  amount: 500,
});
bank.handleTransaction("withdraw", new WithdrawStrategy(), {
  fromId: "A1",
  amount: 100,
});

const converter = new CurrencyConverter(rates);
const transferStrategy = new TransferStrategy(converter);
bank.handleTransaction("transfer", transferStrategy, {
  fromId: "A1",
  toId: "A2",
  amount: 100,
  currency: "USD",
  targetCurrency: "CAD",
});

console.log(bank.getBalance("A1")); // { balance: 200 }
console.log(bank.getTransactions("A1"));
console.log(bank.getBalance("A2"));
