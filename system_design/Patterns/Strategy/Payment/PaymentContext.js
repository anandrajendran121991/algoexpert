class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  createSession() {
    return this.strategy.createSession();
  }

  handlePaymentHook() {
    return this.strategy.handlePaymentHook();
  }
}

export default PaymentContext;
