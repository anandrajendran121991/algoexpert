class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = "*";
  }

  insert(word) {
    let node = this.root;
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      if (!(letter in node)) {
        node[letter] = {};
      }
      node = node[letter];
    }
    node[this.endSymbol] = true;
  }

  search(string) {
    let node = this.root;
    for (const letter of string) {
      if (!(letter in node)) {
        return false;
      }
      node = node[letter];
    }
    return this.endSymbol in node;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let letter = prefix[i];
      if (!(letter in node)) {
        return false;
      }
      node = node[letter];
    }

    return true;
  }

  findLongestCommonPrefix() {
    let node = this.root;
    let prefix = "";

    // Traverse the Trie to find the common prefix
    while (node) {
      const keys = Object.keys(node);

      // If there is more than one branch or we reach the end of a word, stop
      if (keys.length !== 1 || keys[0] === this.endSymbol) break;

      // Append the single key to the prefix
      prefix += keys[0];
      node = node[keys[0]];
    }

    return prefix;
  }
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const trie = new Trie();
  for (const word of strs) {
    trie.insert(word);
  }
  return trie.findLongestCommonPrefix();
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
