class PaymentInterface {
  createSession() {
    throw new Error("You must implement createSession()");
  }

  handlePaymentHook() {
    throw new Error("You must implement handlePaymentHook()");
  }
}

export default PaymentInterface;
