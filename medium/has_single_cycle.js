const hasSingleCycle = (array) => {
  let i = 0;
  let currentIdx = 0;
  while (i < array.length) {
    if (i > 0 && currentIdx === 0) {
      return false;
    }
    let nextPostionTojump = array[currentIdx];
    let nextIdx = (currentIdx + nextPostionTojump) % array.length;
    currentIdx = nextIdx >= 0 ? nextIdx : nextIdx + array.length;
    i++;
  }
  return currentIdx === 0;
};

console.log(hasSingleCycle([2, 3, 1, -4, -4, 2]));
