// function nextGreaterElement(array) {
//   // Write your code here.
//   const hash = new Map();
//   for (let i = 0; i < array.length; i++) {
//     if (hash.has(array[i])) {
//       hash.set(array[i], [...hash.get(array[i]).concat(i)]);
//     } else {
//       hash.set(array[i], [i]);
//     }
//   }
//   const result = new Array(array.length).fill(-1);
//   array.sort((a, b) => a - b);
//   for (let i = 0; i < array.length; i++) {
//     let current = array[i];
//     while (i + 1 < array.length && array[i + 1] <= current) {
//       i++;
//     }

//     for (const value of hash.get(current)) {
//       if (i + 1 < array.length) result[value] = array[i + 1];
//     }
//   }

//   return result;
// }

function nextGreaterElement(array) {
  // Write your code here.
  const result = new Array(array.length).fill(-1);

  const stack = [0]; // [idx]
  for (let i = 1; i < array.length * 2; i++) {
    const circularIdx = i % array.length;
    while (array[circularIdx] > array[stack[stack.length - 1]]) {
      const peekPos = stack.pop();
      result[peekPos] = array[circularIdx];
    }
    stack.push(circularIdx);
  }
  return result;
}

console.log(nextGreaterElement([7, 6, 8, 4, 3, 2, 1]));
// Time = O(n) | Space => O(n)
