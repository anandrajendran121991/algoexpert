var RandomizedSet = function () {
  this.hashMap = new Map();
  this.array = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (!this.hashMap.has(val)) {
    this.hashMap.set(val, this.array.length);
    this.array.push(val);
    return true;
  }
  return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.hashMap.has(val)) return false;

  const idx = this.hashMap.get(val); // idx to remove
  const lastElement = this.array[this.array.length - 1];
  this.array[idx] = lastElement;
  this.hashMap.set(lastElement, idx);
  this.array.pop();
  this.hashMap.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIdx = Math.floor(Math.random() * this.array.length);
  return this.array[randomIdx];
};

var obj = new RandomizedSet();
obj.insert(100);
obj.insert(200);
obj.insert(300);
obj.insert(400);
obj.remove(200);
obj.getRandom();
