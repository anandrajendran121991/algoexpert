import InventoryItem from "./InventoryItem.js";

class Inventory {
  constructor() {
    this.stock = new Map();
  }

  addProduct(product, quantity) {
    this.stock.set(product.id, new InventoryItem(product, quantity));
  }

  isAvailable(productId, quantity) {
    const item = this.stock.get(productId);
    return item && item.quantity >= quantity;
  }

  reserve(productId, quantity) {
    if (!this.isAvailable(productId, quantity)) return false;
    this.stock.get(productId).quantity -= quantity;
    return true;
  }

  release(productId, quantity) {
    if (this.stock.has(productId)) {
      this.stock.get(productId).quantity += quantity;
    }
  }
}

export default Inventory;
