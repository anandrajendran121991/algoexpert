function validIPAddresses(string) {
  // Write your code here.
  const validIp = [];
  if (string.length > 12) return validIp;

  function backTracking(startIdx, dots, currIp) {
    if (dots === 4 && startIdx === string.length) {
      validIp.push(currIp.slice(0, -1)); // Remove the last dot
      return;
    }

    if (dots > 4) {
      return;
    }

    for (let j = startIdx; j < Math.min(startIdx + 3, string.length); j++) {
      let current = +string.slice(startIdx, j + 1);
      if (current < 256 && (startIdx === j || string[startIdx] != "0")) {
        backTracking(j + 1, dots + 1, currIp + current + ".");
      }
    }
  }
  backTracking(0, 0, "");
  return validIp;
}
console.log(validIPAddresses("1921680"));
