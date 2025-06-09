/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const operator = ["+", "-", "*", "/"];
  const hashMap = new Set(operator);
  for (const token of tokens) {
    if (!hashMap.has(token)) {
      stack.push(+token);
    } else if (token === "+") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b + a);
    } else if (token === "-") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b - a);
    } else if (token === "*") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(b * a);
    } else if (token === "/") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push(Math.trunc(b / a));
    }
  }
  return stack.pop();
};

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
