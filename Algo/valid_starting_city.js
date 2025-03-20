function validStartingCity(distances, fuel, mpg) {
  // Write your code here.
  let max = -Infinity;
  let validIdx = -1;
  for (let i = 0; i < distances.length; i++) {
    let distanceToNext = distances[i];
    let canTravel = fuel[i] * mpg;
    let remaining = canTravel - distanceToNext;
    if (remaining > max) {
      max = remaining;
      validIdx = i;
    }
  }

  return validIdx;
}

console.log(
  validStartingCity([10, 20, 10, 15, 5, 15, 25], [0, 2, 1, 0, 0, 1, 1], 20)
);
