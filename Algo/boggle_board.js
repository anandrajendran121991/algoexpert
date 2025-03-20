class Trie {
  constructor() {
    this.node = {}; // basically hashMap
    this.endSymbol = "*"; // indicates end of the word
  }

  insert(word) {
    let node = this.node;
    for (const character of word) {
      if (!(character in node)) {
        node[character] = {};
      }
      node = node[character];
    }

    node[this.endSymbol] = true;
  }
}

function boggleBoard(board, words) {
  // Instantiate the Trie class
  const trie = new Trie();

  // Loop through the array words and insert the word into the trie
  for (const word of words) {
    trie.insert(word);
  }

  const result = new Set();
  const rowLength = board.length;
  const colLength = board[0].length;
  for (let row = 0; row < rowLength; row++) {
    for (let col = 0; col < colLength; col++) {
      dfs(row, col, result, board, trie.node, "");
    }
  }

  return Array.from(result);
}

function dfs(row, col, result, board, trie, path) {
  const rowLength = board.length;
  const colLength = board[0].length;
  if (row < 0 || row >= rowLength || col < 0 || col >= colLength) return;

  const current = board[row][col];
  if (!(current in trie)) return;

  const newTrie = trie[current];
  if ("*" in newTrie) result.add(path + current);

  board[row][col] = "#"; // Mark as visited
  // Explore neighbors
  const directions = [
    [1, 0], // down
    [-1, 0], // up
    [0, 1], // right
    [0, -1], // left
    [1, 1], // down rigt
    [1, -1], // down left
    [-1, 1], // up right
    [-1, -1], // up left
  ];
  for (const [dx, dy] of directions) {
    dfs(dx + row, dy + col, result, board, newTrie, path + current);
  }

  board[row][col] = current;
}

console.log(
  boggleBoard(
    [
      ["t", "h", "i", "s", "i", "s", "a"],
      ["s", "i", "m", "p", "l", "e", "x"],
      ["b", "x", "x", "x", "x", "e", "b"],
      ["x", "o", "g", "g", "l", "x", "o"],
      ["x", "x", "x", "D", "T", "r", "a"],
      ["R", "E", "P", "E", "A", "d", "x"],
      ["x", "x", "x", "x", "x", "x", "x"],
      ["N", "O", "T", "R", "E", "-", "P"],
      ["x", "x", "D", "E", "T", "A", "E"],
    ],
    [
      "this",
      "is",
      "not",
      "a",
      "simple",
      "boggle",
      "board",
      "test",
      "REPEATED",
      "NOTRE-PEATED",
    ]
  )
);
