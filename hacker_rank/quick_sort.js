function countingSort(arr) {
  // Write your code here
  let max = Math.max(...arr);
  const result = new Array(max + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = result[arr[i]] + 1;
  }

  const sorted = [];
  for (let j = 0; j < result.length; j++) {
    let value = result[j];
    while (value > 0) {
      sorted.push(j);
      value--;
    }
  }

  return sorted;
}

console.log(countingSort([1, 1, 3, 2, 1]));
