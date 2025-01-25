var WordDictionary = function () {
  this.root = {};
  this.endSymbol = "*";
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    if (!(letter in node)) {
      node[letter] = {};
    }
    node = node[letter];
  }
  node[this.endSymbol] = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const dfs = (idx, node) => {
    if (idx === word.length) {
      if (node[this.endSymbol]) {
        return true;
      }
      return false;
    }

    let character = word[idx];
    if (character === ".") {
      for (const key in node) {
        if (dfs(idx + 1, node[key])) {
          return true;
        }
      }

      return false;
    } else {
      if (!node[character]) {
        return false;
      }
      return dfs(idx + 1, node[character]);
    }
  };

  return dfs(0, this.root);
};

var obj = new WordDictionary();
obj.addWord("bad");
obj.addWord("dad");
obj.addWord("mad");
var param_2 = obj.search("b.d");
console.log(param_2);
