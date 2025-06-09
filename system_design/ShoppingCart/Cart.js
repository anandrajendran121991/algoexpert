class Cart {
  constructor(inventory) {
    this.inventory = inventory;
    this.items = new Map();
    this.discountStrategy = new NoDiscount();
  }

  addItem(product, quantity) {
    if (!this.inventory.isAvailable(product.id, quantity)) {
      console.log(`Insufficient stock for ${product.name}`);
      return;
    }

    if (this.items.has(product.id)) {
      this.items.get(product.id).quantity += quantity;
    } else {
      this.items.set(product.id, new CartItem(product, quantity));
    }

    this.inventory.reserve(product.id, quantity);
  }

  removeItem(productId) {
    const item = this.items.get(productId);
    if (item) {
      this.inventory.release(productId, item.quantity);
      this.items.delete(productId);
    }
  }

  applyDiscount(discountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  checkout() {
    const itemList = Array.from(this.items.values());
    const total = itemList.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);
    const finalTotal = this.discountStrategy.apply(total);
    const order = new Order(itemList, finalTotal);
    this.items.clear(); // Clear cart
    return order;
  }

  printCart() {
    console.log("--- Cart Items ---");
    for (const item of this.items.values()) {
      console.log(
        `${item.quantity} x ${item.product.name} = $${
          item.quantity * item.product.price
        }`
      );
    }
  }
}

export default Cart;
