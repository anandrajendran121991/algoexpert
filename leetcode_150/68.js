/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const res = [];
  let line = [];
  let lineCount = 0;
  let i = 0;
  while (i < words.length) {
    while (
      i < words.length &&
      lineCount + words[i].length + line.length <= maxWidth
    ) {
      line.push(words[i]);
      lineCount += words[i].length;
      i++;
    }

    const totalSpace = maxWidth - lineCount;
    let availableSlots = line.length - 1;
    if (i === words.length || line.length === 1) {
      // last line or line length 1
      // Handle the last line or lines with a single word
      const lastLine =
        line.join(" ") + " ".repeat(maxWidth - lineCount - (line.length - 1));
      res.push(lastLine);
      line = [];
      lineCount = 0;
    } else {
      let quotient = Math.floor(totalSpace / availableSlots);
      let remainder = totalSpace % availableSlots;

      for (let k = 0; k < line.length - 1; k++) {
        let space = "";
        for (let l = 0; l < quotient; l++) {
          space += " ";
        }
        if (remainder > 0) {
          space += " ";
          remainder--;
        }
        line[k] += space;
      }

      res.push(line.join(""));

      line = [];
      lineCount = 0;
    }
  }

  return res;
};

console.log(
  fullJustify(
    [
      "Science",
      "is",
      "what",
      "we",
      "understand",
      "well",
      "enough",
      "to",
      "explain",
      "to",
      "a",
      "computer.",
      "Art",
      "is",
      "everything",
      "else",
      "we",
      "do",
    ],
    20
  )
);
