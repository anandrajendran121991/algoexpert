function collidingAsteroids(asteroids) {
  // Write your code here.
  const stack = [];
  for (let asteroid of asteroids) {
    while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
      let diff = Math.abs(stack[stack.length - 1], asteroid);
      if (diff < 0) {
        stack.pop();
      } else if (diff > 0) {
        asteroid = 0;
      } else {
        asteroid = 0;
        stack.pop();
      }
    }

    if (asteroid !== 0) {
      stack.push(asteroid);
    }
  }
  return stack;
}

console.log(collidingAsteroids());
