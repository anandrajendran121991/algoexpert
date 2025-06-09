import PaymentFactory from "./Factory/Payment/PaymentFactory.js";
import PaymentContext from "./Strategy/Payment/PaymentContext.js";
import RepoContext from "./Strategy/Repo/Context.js";
import Crud from "./Strategy/Repo/Crud.js";

const paymentService = PaymentFactory.getPayment("paypal");
const paymentStrategy = new PaymentContext(paymentService);
console.log(paymentStrategy.createSession()); // Stripe.createSession
console.log(paymentStrategy.handlePaymentHook());

const userRepo = new Crud("InMemoryUsers");
const repoContext = new RepoContext(userRepo);

// Create
// const created = repoContext.create({ name: "Anand", email: "anand@test.com" });
// console.log("Created:", created);

// // Find
// const found = repoContext.findById(created);
// console.log("Found:", found);
