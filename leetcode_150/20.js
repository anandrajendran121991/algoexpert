/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const hashMap = { "(": ")", "{": "}", "[": "]" };
  const stack = [];
  for (const bracket of s) {
    if (bracket in hashMap) {
      stack.push(hashMap[bracket]);
    } else if (stack[stack.length - 1] === bracket) {
      stack.pop();
    } else {
      return false;
    }
  }
  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
};

console.log(isValid("([])"));
