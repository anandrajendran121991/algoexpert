class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(maxSize) {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.capacity = maxSize || 1;
    this.cache = new Map();
  }

  /**
   * Get the value from the hashmap
   * @param {*} key
   * @returns Number
   */
  getValueFromKey(key) {
    if (!this.cache.has(key)) return null;
    const node = this.cache.get(key);
    this.removeNode(node);
    this.insertAtHead(node);
    return node.value;
  }

  insertKeyValuePair(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this.removeNode(node);
      this.cache.delete(key);
    } else {
      if (this.cache.size >= this.capacity) {
        const lruNode = this.tail.prev;
        this.removeNode(lruNode);
        this.cache.delete(lruNode.key);
      }
    }

    const newNode = new Node(key, value);
    this.insertAtHead(newNode);
    this.cache.set(key, newNode);
  }

  getMostRecentKey() {
    const mostRecentNode = this.head.next;
    return mostRecentNode.key.toString();
  }

  removeNode(node) {
    const nextNode = node.next;
    const prevNode = node.prev;
    nextNode.prev = prevNode;
    prevNode.next = nextNode;
  }

  insertAtHead(node) {
    const nextNode = this.head.next;
    node.next = nextNode;
    nextNode.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }
}

const lru = new LRUCache(3);
lru.insertKeyValuePair("b", 2);
lru.insertKeyValuePair("a", 1);
lru.insertKeyValuePair("c", 3);
console.log(lru.getMostRecentKey());
console.log(lru.getValueFromKey("a"));
console.log(lru.getMostRecentKey());
lru.insertKeyValuePair("d", 4);
console.log(lru.getValueFromKey("b"));
lru.insertKeyValuePair("a", 5);
console.log(lru.getValueFromKey("a"));
