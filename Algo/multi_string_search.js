class Trie {
  constructor() {
    this.tree = {};
    this.endSymbol = "*";
  }

  insert(string) {
    let node = this.tree;
    for (const s of string) {
      if (!(s in node)) {
        node[s] = {};
      }
      node = node[s];
    }

    node[this.endSymbol] = true;
  }

  contains(string) {
    let node = this.tree;
    for (const s of string) {
      if (!(s in node)) {
        return false;
      }
      node = node[s];
    }

    return this.endSymbol in node;
  }
}

function multiStringSearch(bigString, smallStrings) {
  const trie = new Trie();
  const result = [];

  // Insert all suffixes of bigString into the Trie
  for (let i = 0; i < bigString.length; i++) {
    trie.insert(bigString.slice(i));
  }

  // Check if smallStrings exist in the Trie
  for (const string of smallStrings) {
    result.push(trie.contains(string));
  }

  return result;
}

console.log(
  multiStringSearch("this is a big string", [
    "this",
    "yo",
    "is",
    "a",
    "bigger",
    "string",
    "kappa",
  ])
);


class Tire {

}