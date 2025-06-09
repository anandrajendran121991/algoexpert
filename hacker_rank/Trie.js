class Trie {
  constructor() {
    this.tree = {};
    this.endSymbol = "*";
  }

  insert(word) {
    let node = this.tree;
    for (const char of word) {
      if (!(char in node)) {
        node[char] = {};
      }
      node = node[char];
    }
    node[this.endSymbol] = true;
  }

  search(word) {
    let node = this.tree;
    for (const char of word) {
      if (!(char in node)) return false;
      node = node[char];
    }

    return node[this.endSymbol] === true;
  }

  startsWith(prefix) {
    let node = this.tree;
    for (const char of prefix) {
      if (!(char in node)) return false;
      node = node[char];
    }

    return true;
  }
}

const trieObj = new Trie();
trieObj.insert("anandpreetiammu");
trieObj.insert("preeti");
trieObj.insert("ammu");
trieObj.search("ammu");
trieObj.search("ammu");
trieObj.startsWith("anandggpreetiamm");
