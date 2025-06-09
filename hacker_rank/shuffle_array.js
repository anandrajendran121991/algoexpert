class Solution {
  constructor(array) {
    this.originalArray = [...array];
  }

  /**
   * Return the shuffled array
   * @return array
   */
  shuffle() {
    let array = [...this.originalArray];
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  /**
   * Return the original array
   * @returns array
   */
  reset() {
    return this.originalArray;
  }
}

const count = {};
const obj = new Solution([1, 2, 3]);

for (let i = 0; i < 10000; i++) {
  const perm = obj.shuffle().join(",");
  count[perm] = (count[perm] || 0) + 1;
}

console.log(count);
