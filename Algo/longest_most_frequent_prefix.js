class Trie {
  constructor() {
    this.tree = {};
    this.maxPrefixCount = 0;
    this.maxPrefixLength = 0;
    this.maxPrefixFullString = "";
  }

  insert(string) {
    let tree = this.tree;
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (!(char in tree)) {
        tree[char] = { count: 0 };
      }
      tree = tree[char];
      tree.count++;

      if (tree.count > this.maxPrefixCount) {
        this.maxPrefixCount = tree.count;
        this.maxPrefixLength = i + 1;
        this.maxPrefixFullString = string;
      } else if (
        tree.count === this.maxPrefixCount &&
        i + 1 > this.maxPrefixLength
      ) {
        this.maxPrefixLength = i + 1;
        this.maxPrefixFullString = string;
      }
    }
  }
}

function longestMostFrequentPrefix(strings) {
  // Write your code here.
  const TrieObj = new Trie();
  for (const string of strings) {
    TrieObj.insert(string);
  }

  return TrieObj.maxPrefixFullString.slice(0, TrieObj.maxPrefixLength);
}

console.log(
  longestMostFrequentPrefix(["abcdef", "abcdefg", "aaa", "bbb", "ccc"])
);
