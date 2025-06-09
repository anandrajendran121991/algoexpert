class CurrencyConverter {
  constructor(rates = {}) {
    this.rates = rates;
  }

  convert(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) return amount;
    const key = `${fromCurrency}_${toCurrency}`;
    const rate = this.rates[key];
    if (!rate) throw new Error(`Exchange rate not available: ${key}`);
    return amount * rate;
  }
}

export default CurrencyConverter;
