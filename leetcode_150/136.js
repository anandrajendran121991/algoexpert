var singleNumber = function (nums) {
  let xor = 0;
  for (const num of nums) {
    xor = num ^ xor;
  }
  return xor;
};

console.log(singleNumber([2, 1, 1, 10, 2]));
