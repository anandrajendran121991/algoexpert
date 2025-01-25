const findFlames = (nameOne, nameTwo) => {
  if (nameOne.length === 0 || nameTwo.length === 0)
    return "Enter two different names";
  nameOne = nameOne.replace(/\s+/g, "");
  nameTwo = nameTwo.replace(/\s+/g, "");
  const flameHashMap = {
    f: "Friends - A bond built on trust, laughter, and memories",
    l: "Lovers - A connection so deep, it speaks the language of hearts.",
    a: "Affection - A warm embrace that makes everything feel right.",
    m: "Marriage - A lifelong partnership where love grows stronger every day.",
    e: "Enemy - A rivalry fueled by conflict, yet often misunderstood.",
    s: "Siblings - Partners in crime, united by blood and childhood.",
  };
  nameOne = nameOne.toLowerCase();
  nameTwo = nameTwo.toLowerCase();
  let lengthOne = nameOne.length;
  let hashMap = {};
  for (const letter of nameTwo) {
    if (!(letter in hashMap)) hashMap[letter] = 1;
    else hashMap[letter] += 1;
  }

  for (const letter of nameOne) {
    if (letter in hashMap && hashMap[letter] > 0) {
      lengthOne--;
      hashMap[letter] = hashMap[letter] - 1;
    }
  }

  for (const value of Object.values(hashMap)) {
    lengthOne += value;
  }

  lengthOne--;

  if (lengthOne < 0) lengthOne = 0;

  let indexToRemove = lengthOne;
  let flames = "flames";

  // Remove elements while wrapping the index
  while (flames.length > 1) {
    indexToRemove = indexToRemove % flames.length;
    flames = flames.slice(0, indexToRemove) + flames.slice(indexToRemove + 1);
    indexToRemove = indexToRemove + lengthOne;
  }

  return flameHashMap[flames];
};

console.log(findFlames("Anand", " Ammu"));
