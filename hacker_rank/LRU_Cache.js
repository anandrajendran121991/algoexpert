class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // key ---> node(key, value, next, prev)
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const node = this.cache.get(key);
    this.removeNode(node);
    this.setHead(node);
    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // remove from dll
      // remove from cache
      const node = this.cache.get(key);
      this.removeNode(node);
      this.cache.delete(key);
    } else if (this.cache.size === this.capacity) {
      // remove from cache
      // remove from dll
      const tailNode = this.tail.prev;
      this.cache.delete(tailNode.key);
      this.removeNode(tailNode);
    }

    const newNode = new Node(key, value);
    this.setHead(newNode);
    this.cache.set(key, newNode);
  }

  removeNode(node) {
    const nextNode = node.next;
    const prevNode = node.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  setHead(node) {
    const nextNode = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = nextNode;
    nextNode.prev = node;
  }
}

const lru = new LRU(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1));
lru.put(3, 3);
console.log(lru.get(2));
lru.put(4, 4);
console.log(lru.get(3));
console.log(lru.get(4));
