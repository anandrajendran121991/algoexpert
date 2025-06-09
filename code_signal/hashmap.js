const hashSet = new Map(); // [value, count]
const result = [];
function solution(queries) {
  for (const query of queries) {
    const [operation, value] = query;
    if (operation === "ADD") add(value);
    else if (operation === "REMOVE") remove(value);
    else if (operation === "GET_NEXT") getNextGreater(value);
    else exists();
  }
  return result;
}

/**
 * Add the value to hashmap
 *
 * @param {*} value
 * @returns void
 */
function add(value) {
  if (hashSet.has(value)) hashSet.set(value, hashSet.get(value) + 1);
  else hashSet.set(value, 1);
  result.push("");
}

/**
 * Remove the count if more than 1 occurence
 *
 * @param {*} value
 * @returns void
 */
function remove(value) {
  if (!hashSet.has(value)) result.push("false");
  else {
    hashSet.set(value, hashSet.get(value) - 1);
    if (hashSet.get(value) <= 0) hashSet.delete(value);
    result.push("true");
  }
}

function getNextGreater(value) {
  const sorted = [];
  for (const [number, _] of hashSet) {
    sorted.push(number);
  }

  sorted.sort((a, b) => a - b);

  let low = 0;
  let high = sorted.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (sorted[mid] <= +value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (low > sorted.length - 1 || low < 0) result.push("");
  result.push(sorted[low]);
}

function exists() {
  result.push(hashSet.has(value) === true ? "true" : "false");
}

console.log(
  solution([
    ["ADD", "0"],
    ["ADD", "1"],
    ["ADD", "1"],
    ["ADD", "11"],
    ["ADD", "22"],
    ["ADD", "3"],
    ["ADD", "5"],
    ["GET_NEXT", "0"],
    ["GET_NEXT", "1"],
    ["REMOVE", "1"],
    ["GET_NEXT", "1"],
    ["ADD", "0"],
    ["ADD", "1"],
    ["ADD", "2"],
    ["ADD", "1"],
    ["GET_NEXT", "1"],
    ["GET_NEXT", "2"],
    ["GET_NEXT", "3"],
    ["GET_NEXT", "5"],
  ])
);
