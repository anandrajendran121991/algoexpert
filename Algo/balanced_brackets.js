function balancedBrackets(string) {
  // Write your code here.
  const hashMap = new Map();
  hashMap.set("(", ")");
  hashMap.set("[", "]");
  hashMap.set("{", "}");

  const hashMapClosing = new Set();
  hashMapClosing.add(")");
  hashMapClosing.add("]");
  hashMapClosing.add("}");
  const stack = [];
  for (const character of string) {
    if (hashMap.has(character)) {
      stack.push(hashMap.get(character)); // Found in the opening bracket hash
    } else if (character === stack[stack.length - 1]) {
      stack.pop();
    } else if (hashMapClosing.has(character)) {
      return false; // Found in the closing bracket hash
    } else {
      continue; // Not found in both the hash
    }
  }

  return stack.length > 0 ? false : true;
}

console.log(balancedBrackets("(((((({{{{{[[[[[([)])]]]]]}}}}}))))))"));
