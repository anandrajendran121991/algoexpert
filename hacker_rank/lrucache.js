class DLL {
  constructor(key, val) {
    this.val = val;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.head = new DLL(null, null);
  this.tail = new DLL(null, null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    this.removeNode(node);
    this.setHead(node);
    return node.val;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    this.removeNode(node);
    this.cache.delete(key);
  } else if (this.cache.size === this.capacity) {
    const tailNode = this.tail.prev;
    const node = this.cache.get(tailNode.key);
    this.removeNode(node);
    this.cache.delete(tailNode.key);
  }

  const newNode = new DLL(key, value);
  this.cache.set(key, newNode);
  this.setHead(newNode);
};

LRUCache.prototype.removeNode = function (node) {
  const next = node.next;
  const prev = node.prev;
  prev.next = next;
  next.prev = prev;
};

LRUCache.prototype.setHead = function (node) {
  const temp = this.head.next;
  this.head.next = node;
  node.prev = this.head;
  node.next = temp;
  temp.prev = node;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
