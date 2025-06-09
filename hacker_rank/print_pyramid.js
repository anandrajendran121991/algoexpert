function pyramid(n) {
  let spaceCount = n - 1;
  let startCount = 1;
  let space = " ";
  let star = "*";
  for (let row = 0; row < n; row++) {
    let spaces = space.repeat(spaceCount);
    let stars = star.repeat(startCount);
    console.log(spaces + stars + spaces);
    spaceCount--;
    startCount += 2;
  }
}

function staircase(n) {
  // Write your code here
  let space = " ";
  let hash = "#";
  let spaceCount = n - 1;
  let hashCount = 1;
  for (let row = 0; row < n; row++) {
    let spaces = space.repeat(spaceCount);
    let hashes = hash.repeat(hashCount);
    console.log(spaces + hashes);
    spaceCount--;
    hashCount++;
  }
}

pyramid(5);
staircase(5);
