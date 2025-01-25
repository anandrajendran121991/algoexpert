/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const prefixTrie = new Trie();
  for (const word of words) {
    prefixTrie.insert(word);
  }
  const result = new Set();

  const dfs = (row, col, node, path) => {
    // Check bounds
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length)
      return;

    const char = board[row][col];
    if (!node[char]) {
      return;
    }
    const nextNode = node[char];
    // Check if we found a word
    if (nextNode["*"]) {
      result.add(path + char);
    }

    // Mark as visited
    board[row][col] = "#";

    // Explore neighbors
    const directions = [
      [1, 0], // down
      [-1, 0], // up
      [0, 1], // right
      [0, -1], // left
    ];
    for (const [dx, dy] of directions) {
      dfs(row + dx, col + dy, nextNode, path + char);
    }

    // Backtrack
    board[row][col] = char;
  };

  // Start DFS from each cell
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, prefixTrie.root, "");
    }
  }

  return result;
};

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (const letter of word) {
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    node["*"] = true; // Mark the end of a word
  }
}

console.log(
  findWords(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"]
  )
);
