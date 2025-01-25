/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const stack = [];
  let result = 0;
  let current = 0;
  let sign = 1;

  for (const num of s) {
    if (num >= "0" && num <= "9") {
      // compute the current by multiplying by 10 to tackle the consecutive nums (4500)
      current = current * 10 + parseInt(num, 10);
    } else if (num == "+") {
      // compute the res and update the sign to 1
      result += sign * current;
      current = 0;
      sign = 1;
    } else if (num == "-") {
      // compute the res and update the sign to -1
      result += sign * current;
      current = 0;
      sign = -1;
    } else if (num == "(") {
      // push the [res, sign] on to the stack
      stack.push(result);
      stack.push(sign);
      result = 0;
      sign = 1;
    } else if (num == ")") {
      // pop the [res, sign] and recompute the res
      result += sign * current;
      result *= stack.pop(); // apply sign
      result += stack.pop(); // prev result to the current res
      current = 0;
    }
  }

  if (current !== 0) result += current * sign;

  return result;
};

console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
