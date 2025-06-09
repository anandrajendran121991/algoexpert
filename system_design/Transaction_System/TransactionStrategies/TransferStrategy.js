class TransferStrategy {
  constructor(converter) {
    this.converter = converter;
  }

  execute({ from, to, amount, currency, targetCurrency }) {
    const convertedAmount = this.converter.convert(
      amount,
      currency,
      targetCurrency
    );
    from.withdraw(amount);
    to.deposit(convertedAmount);
    return `Transferred ${amount} ${currency} to ${convertedAmount.toFixed(
      2
    )} ${targetCurrency}`;
  }
}

export default TransferStrategy;
