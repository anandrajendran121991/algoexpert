class DepositStrategy {
  execute({ to, amount }) {
    to.deposit(amount);
    return "Deposit successful";
  }
}

export default DepositStrategy;
