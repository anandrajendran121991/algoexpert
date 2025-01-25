const sum = (num, res = 0) => {
  if (num === 0) {
    return res;
  }

  res = res + num;
  return sum(num - 1, res);
};

console.log(sum(10));
