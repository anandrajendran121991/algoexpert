class Trie {
  constructor() {
    this.node = {};
    this.endSymbol = "*";
    this.words = [];
  }

  insert(string) {
    let node = this.node;
    for (const char of string) {
      if (!(char in node)) {
        node[char] = { words: [] };
      }

      node = node[char];
      node.words.push(string); // Store word for quick lookup
    }

    node[this.endSymbol] = true;
  }

  autocomplete(string) {
    let node = this.node;
    for (const char of string) {
      if (!(char in node)) return [];

      node = node[char];
    }

    return node.words; // Return stored words;
  }
}

function autocomplete(words, prefix) {
  const trieObj = new Trie();
  for (const word of words) {
    trieObj.insert(word);
  }

  return trieObj.autocomplete(prefix);
}

console.log(autocomplete(["apple", "ape", "apricot", "banana", "bat"], "ap"));
