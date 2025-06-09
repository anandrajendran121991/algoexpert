/**
 * @param {string[]} strs
 * @return {string[][]}
 * Complexities: Time => O(n * m * log m) | Space => O(n) where n is the length of the strs and m is the length of the longest string
 */
var groupAnagrams = function (strs) {
  const hashMap = new Map();
  for (let str of strs) {
    const sortedArr = str.split("").sort();
    let sortedString = sortedArr.join("");
    if (hashMap.has(sortedString)) {
      hashMap.get(sortedString).push(str);
    } else {
      hashMap.set(sortedString, [str]);
    }
  }

  return Array.from(hashMap.values);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// {
//     "aet" : ["eat", "tea", "ate"],
//     "ant" : ["tan", "nat"],
//     "abt" : ["bat"]
// }
