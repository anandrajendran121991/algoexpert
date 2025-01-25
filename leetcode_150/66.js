/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    let plus = digits[i] + carry;
    if (i === digits.length - 1) {
      // plus on on the last item
      plus = plus + 1;
    }
    if (plus <= 9) {
      digits[i] = plus;
      break;
    } else {
      digits[i] = 0;
      carry = 1;
    }
  }

  if (digits[0] === 0) {
    digits.unshift(1);
  }
  return digits;
};

console.log(plusOne([9]));
