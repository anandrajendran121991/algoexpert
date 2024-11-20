/**
 * @description Solution using left multiples and right multiples and create a new array products array
 * @param {number[]} array
 * @returns {number[]}
 * @complexities Time => O(n) | Space => O(n)
 */
const arrayOfProducts = (array) => {
  const arrayOfProducts = [];
  const leftProducts = [];
  const rightProducts = [];
  let leftMultiples = 1;
  for (const value of array) {
    leftProducts.push(leftMultiples);
    leftMultiples *= value;
  }

  let rightMultiples = 1;
  for (let r = array.length - 1; r >= 0; r--) {
    rightProducts[r] = rightMultiples;
    rightMultiples *= array[r];
  }

  let i = 0;
  const j = array.length;
  while (i < j) {
    arrayOfProducts.push(leftProducts[i] * rightProducts[i]);
    i++;
  }
  return arrayOfProducts;
};

const naiveApproach = (array) => {
  const productArray = [];
  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i != j) {
        product *= array[j];
      }
    }
    productArray.push(product);
  }

  return productArray;
};

const uisngModOperator = (array) => {
  const productArray = [];

  for (let i = 0; i < array.length; i++) {
    let count = 1;
    let j = i + 1;
    let product = 1;
    while (count < array.length) {
      j = j % array.length;
      product *= array[j];
      count++;
      j++;
    }
    productArray.push(product);
  }

  return productArray;
};

console.log(arrayOfProducts([5, 1, 4, 2]));
