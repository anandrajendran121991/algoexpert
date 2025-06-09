import Inventory from "./Inventory.js";
import Product from "./Product.js";
import Cart from "./Cart.js";

const inventory = new Inventory();

const laptop = new Product("1", "Laptop", 1000, "SellerA");
const phone = new Product("2", "Phone", 500, "SellerB");

inventory.addProduct(laptop, 10);
inventory.addProduct(phone, 20);

const cart = new Cart(inventory);
cart.addItem(laptop, 1);
cart.addItem(phone, 2);
cart.printCart();

cart.applyDiscount(new PercentageDiscount(10)); // Apply 10% off
const order = cart.checkout();

order.printOrder();
