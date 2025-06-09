let fn = (arr) => {
  let prefix = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefix.push(prefix[prefix.length - 1] + arr[i]);
  }

  return prefix;
};

console.log(fn([1, 2, 3, 4, 5]));
