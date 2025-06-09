class WithdrawStrategy {
  execute(from, amount) {
    from.withdraw(amount);
    return "Withdraw successful";
  }
}

export default WithdrawStrategy;
