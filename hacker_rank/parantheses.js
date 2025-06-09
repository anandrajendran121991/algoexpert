const { hash } = require("crypto");

function analyzeParanthesis(brackets) {
  const stack = [];
  let depth = 0;
  let maxDepth = 0;
  const hashMap = new Map();
  const breadth = new Map();
  hashMap.set("(", ")");
  hashMap.set("{", "}");
  hashMap.set("[", "]");
  for (const bracket of brackets) {
    if (hashMap.has(bracket)) {
      depth++;
      maxDepth = Math.max(maxDepth, depth);
      if (breadth.has(depth)) breadth.set(depth, breadth.get(depth) + 1);
      else breadth.set(depth, 1);
      stack.push(hashMap.get(bracket));
    } else if (stack.length > 0 && bracket === stack[stack.length - 1]) {
      depth--;
      stack.pop();
    } else {
      return { depth: 0, breadth: 0, balanced: false };
    }
  }

  if (stack.length > 0) {
    return { depth: 0, breadth: 0, balanced: false };
  }

  let maxBreath = 0;
  for (const count of breadth.values()) {
    maxBreath = Math.max(count, maxBreath);
  }
  return { depth: maxDepth, breadth: maxBreath, balanced: true };
}

console.log(analyzeParanthesis("(()())"));
