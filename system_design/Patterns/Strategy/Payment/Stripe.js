import PaymentInterface from "./PaymentInterface.js";

class Stripe extends PaymentInterface {
  constructor() {
    super();
  }

  createSession() {
    return `Stripe create session`;
  }

  handlePaymentHook() {
    return `Stripe handle payment webhook`;
  }
}

export default Stripe;
