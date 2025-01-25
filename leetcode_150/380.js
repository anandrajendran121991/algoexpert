var RandomizedSet = function () {
  this.hashMap = new Map();
  this.array = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (val in this.hashMap) return false;
  this.hashMap[val] = this.array.length;
  this.array.push(val);
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!(val in this.hashMap)) {
    return false;
  }
  let itemIdx = this.hashMap[val];
  let lastElement = this.array[this.array.length - 1];
  this.array[itemIdx] = lastElement;
  this.hashMap[lastElement] = itemIdx;
  delete this.array[this.array.length - 1];
  delete this.hashMap[val];
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const length = this.array.length;
  let index = Math.floor(Math.random() * length);
  return this.array[index];
};

/**
 * @return {object}
 */
RandomizedSet.prototype.getObject = function () {
  console.log(this.hashMap);
  console.log(this.array);
};

var obj = new RandomizedSet();
var param_1 = obj.insert(1);
var param_2 = obj.insert(10);
var param_3 = obj.insert(100);
var param_4 = obj.insert(1000);
var param_5 = obj.remove(10);
var param_6 = obj.getRandom();
var param_6 = obj.getObject();
console.log(param_6);
