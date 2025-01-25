// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isHappy = function (n) {
//   return rec(n, new Set());
// };

// function rec(n, hashMap) {
//   if (n === 1) return true; // base case

//   if (hashMap.has(n)) return false; // base case

//   hashMap.add(n);

//   let res = 0;
//   while (n > 0) {
//     res += Math.floor(n % 10) * Math.floor(n % 10);
//     n = Math.floor(n / 10);
//   }

//   return rec(res, hashMap);
// }

var isHappy = function (n) {
  const hashMap = new Set();

  while (n > 1) {
    if (hashMap.has(n)) return false;

    hashMap.add(n);
    let res = 0;
    while (n > 0) {
      res += Math.floor(n % 10) * Math.floor(n % 10);
      n = Math.floor(n / 10);
    }
    n = res;
  }

  return true;
};

console.log(isHappy(19));
