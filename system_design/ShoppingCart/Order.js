class Order {
  constructor(items, total) {
    this.items = items;
    this.total = total;
  }

  printOrder() {
    console.log("--- Order Summary ---");
    for (const item of this.items) {
      console.log(
        `${item.quantity} x ${item.product.name} = $${
          item.quantity * item.product.price
        }`
      );
    }
    console.log(`Total after discount: $${this.total}`);
  }
}

export default Order;
