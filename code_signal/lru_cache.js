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
    this.capacity = capacity === null ? 0 : capacity;
    this.cache = new Map();
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * @description return the value of the key if the key exists, otherwise return -1.
   * @param {*} key
   * @returns {number}
   */
  get(key) {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key);

    // remove the node
    this.removeNode(node);
    // set the node as head
    this.setHead(node);

    return node.value;
  }

  /**
   * @description Update the value of the key if the key exists.
   * Otherwise, add the key-value pair to the cache.
   * If the number of keys exceeds the capacity from this operation,
   * evict the least recently used key.
   * @param {*} key
   * @param {*} value
   * @returns void
   */
  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      this.cache.delete(key);
      this.removeNode(node);
    } else {
      if (this.cache.size >= this.capacity) {
        // remove lru cache from cache and node from linkedlist
        const lruNode = this.tail.prev;
        this.cache.delete(lruNode.key);
        this.removeNode(lruNode);
      }
    }

    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    // set node as head
    this.setHead(newNode);
  }

  /**
   * @description Make this incoming node as the node
   * @param {*} node
   * @returns void
   */
  setHead(node) {
    const nextNode = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = nextNode;
    nextNode.prev = node;
  }

  /**
   * @description Remove the incoming node
   * @param {*} node
   * @returns void
   */
  removeNode(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
}

const capacity = 2;
const lru = new LRUCache(capacity);
lru.put(1, 1);
lru.put(2, 2);
lru.put(1, 1);
lru.put(5, 5);
lru.get(1);
lru.put(3, 3);
lru.get(2);
lru.put(4, 4);
lru.get(1);
lru.get(3);
lru.get(4);
