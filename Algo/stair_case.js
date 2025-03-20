function staircaseTraversal(height, maxSteps) {
  const tabulation = new Array(height + 1).fill(0);
  tabulation[0] = 1;
  tabulation[1] = 1;
  for (let i = 2; i < height + 1; i++) {
    let j = i - 1;
    let sum = 0;
    let counter = maxSteps;
    while (j >= 0 && counter > 0) {
      sum += tabulation[j];
      j--;
      counter--;
    }
    tabulation[i] = sum;
  }
  return tabulation[height];
}

console.log(staircaseTraversal(4, 3));
