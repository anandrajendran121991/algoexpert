import Paypal from "../../Strategy/Payment/Paypal.js";
import Stripe from "../../Strategy/Payment/Stripe.js";

// desing pattern - Factory - creational pattern
class PaymentFactory {
  static getPayment(type) {
    switch (type) {
      case "stripe":
        return new Stripe();
      case "paypal":
        return new Paypal();
      case "newpayment":
        return new NewPay();
      default:
        return new Stripe();
    }
  }
}

export default PaymentFactory;
