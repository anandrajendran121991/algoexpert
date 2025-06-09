import PaymentInterface from "./PaymentInterface.js";

class Paypal extends PaymentInterface {
  constructor() {
    super();
  }

  createSession() {
    return `Paypal create session`;
  }

  handlePaymentHook() {
    return `Paypal handle payment hook`;
  }
}

export default Paypal;
