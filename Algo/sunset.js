/**
 * @param {*} buildings
 * @param {*} direction
 * @returns {*} array
 * @complexities Time => O(nlogn + n) | Space => O(n)
 */
function sunsetViews(buildings, direction) {
  // Write your code here.
  const sunset = [];
  let max = -Infinity;
  if (direction === "EAST") {
    for (let i = buildings.length - 1; i >= 0; i--) {
      let buildingHeight = buildings[i];
      if (buildingHeight > max) {
        sunset.push(i);
        max = buildingHeight;
      }
    }
    sunset.sort((a, b) => a - b);
  } else {
    for (let i = 0; i < buildings.length; i++) {
      let buildingHeight = buildings[i];
      if (buildingHeight > max) {
        sunset.push(i);
        max = buildingHeight;
      }
    }
  }
  return sunset;
}

console.log(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], "EAST"));
console.log(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], "WEST"));
