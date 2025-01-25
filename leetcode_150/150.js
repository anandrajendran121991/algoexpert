/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (const token of tokens) {
    switch (token) {
      case "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case "-":
        const b = stack.pop();
        const a = stack.pop();
        stack.push(a - b);
        break;
      case "/":
        const divisor = stack.pop();
        const dividend = stack.pop();
        stack.push(Math.trunc(dividend / divisor));
        break;
      default:
        stack.push(+token);
    }
  }

  return stack.pop();
};

console.log(evalRPN(["3", "11", "5", "+", "-"]));
