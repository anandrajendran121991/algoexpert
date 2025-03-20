function minimumCharactersForWords(words) {
  // Write your code here.
  // n * m where n is the length of the words and m is the length of the word
  const wordHashCount = new Map();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      const character = word[j];
      const characterPosition = `${i},${character}`;
      if (wordHashCount.has(characterPosition)) {
        wordHashCount.set(
          characterPosition,
          wordHashCount.get(characterPosition) + 1
        );
      } else {
        wordHashCount.set(characterPosition, 1);
      }
    }
  }

  const newHash = new Map();
  for (const [key, count] of wordHashCount) {
    const [position, character] = key.split(",");
    if (newHash.has(character)) {
      newHash.set(character, Math.max(newHash.get(character), count));
    } else {
      newHash.set(character, count);
    }
  }

  const result = [];
  for (const [character, count] of newHash) {
    for (let i = 0; i < count; i++) {
      result.push(character);
    }
  }
  return result;
}

console.log(
  minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"])
);
