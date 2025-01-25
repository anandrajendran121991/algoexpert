var mySqrt = function (x) {
  if (x === 1) return 1;
  let i = 1;
  let j = Math.floor(x / 2);
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      i = mid + 1;
    } else {
      j = mid - 1
    }
  }

  return Math.floor(i - 1);
};

console.log(mySqrt(64));
