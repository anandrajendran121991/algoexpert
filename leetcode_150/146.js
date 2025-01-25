class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    if (capacity <= 0) {
      throw new Error("Capacity must be greater than 0");
    }
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node(null, null); // dummy node
    this.tail = new Node(null, null); // dummy node
    this.head.next = this.tail; // connect head to tail
    this.tail.prev = this.head; // connect tail to head
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key);
    this.remove(node);
    this.setHead(node); // Move the accessed node to the front
    return node.value;
  }

  put(key, value) {
    // if the key exists in cache
    if (this.cache.has(key)) {
      let node = this.cache.get(key);
      node.value = value;
      // remove the node from the ll
      this.remove(node);
      // set the node as head
      this.setHead(node);
    } else {
      if (this.cache.size >= this.capacity) {
        const lruNode = this.tail.prev;
        this.remove(lruNode);
        this.cache.delete(lruNode.key);
      }

      const newNode = new Node(key, value);
      this.cache.set(key, newNode);
      this.setHead(newNode);
    }
  }

  setHead(node) {
    const nextNode = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = nextNode;
    nextNode.prev = node;
  }

  remove(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
}
