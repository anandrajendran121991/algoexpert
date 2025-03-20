function generateDivTags(numberOfTags) {
  // Write your code here.
  const result = [];
  function recursive(openTagRequired, closeTagRequired, prefix) {
    if (openTagRequired > 0) {
      let newPrefix = prefix + "<div>";
      recursive(openTagRequired - 1, closeTagRequired, newPrefix);
    }

    if (closeTagRequired > openTagRequired) {
      let newPrefix = prefix + "</div>";
      recursive(openTagRequired, closeTagRequired - 1, newPrefix);
    }

    if (closeTagRequired === 0) {
      result.push(prefix);
    }
  }
  recursive(numberOfTags, numberOfTags, "");
  return result;
}

console.log(generateDivTags(3));
