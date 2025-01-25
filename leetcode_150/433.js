/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  const hashMap = new Map();
  // if the endGene does not include in the bank we return -1 as its not possible
  if (!bank.includes(endGene)) return -1;
  // Push the start gene to the bank to construc our adjacency list
  bank.push(startGene);
  // Build adjacency list using wildcard patterns
  for (const gene of bank) {
    for (let i = 0; i < gene.length; i++) {
      let mutatedGene = gene.slice(0, i) + "*" + gene.slice(i + 1);
      if (hashMap.has(mutatedGene)) {
        hashMap.set(mutatedGene, [...hashMap.get(mutatedGene)].concat(gene));
      } else {
        hashMap.set(mutatedGene, [gene]);
      }
    }
  }

  // BFS Traversal
  const queue = [startGene]; // [currentGene, mutationCount]
  const visited = new Set();
  visited.add(startGene);
  let mutationCount = 0;
  while (queue.length > 0) {
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      const gene = queue.shift();
      if (gene === endGene) return mutationCount;
      for (let j = 0; j < gene.length; j++) {
        let pattern = gene.slice(0, j) + "*" + gene.slice(j + 1);
        if (hashMap.has(pattern)) {
          for (const mutatedGene of hashMap.get(pattern)) {
            if (visited.has(mutatedGene)) {
              continue;
            }
            queue.push(mutatedGene);
            visited.add(mutatedGene);
          }
        }
      }
    }
    mutationCount++;
  }

  return -1;
};

console.log(
  minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])
);
