function taskAssignment(k, tasks) {
  const pairs = [];
  const hashMap = new Map();
  for (let i = 0; i < tasks.length; i++) {
    if (hashMap.has(tasks[i])) {
      hashMap.set(tasks[i], [...hashMap.get(tasks[i]).concat(i)]);
    } else {
      hashMap.set(tasks[i], [i]);
    }
  }
  tasks.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = tasks.length - 1;
  while (leftPointer < rightPointer) {
    const pair = [
      hashMap.get(tasks[leftPointer]).shift(),
      hashMap.get(tasks[rightPointer]).shift(),
    ];
    pairs.push(pair);
    leftPointer++;
    rightPointer--;
  }

  return pairs;
}

console.log(taskAssignment(3, [1, 3, 5, 3, 1, 4]));
