/**
 * @param {number} n - a positive integer
 * @return {number} - reversed bits of n
 */
var reverseBits = function (n) {
  let result = 0;
  // Iterate through all 32 bits
  for (let i = 0; i < 32; i++) {
    // Shift result to left by 1 to make room for the next bit
    result <<= 1;

    // Get the rightmost bit of n using AND operation and add it to result
    result |= n & 1;

    // Shift n to the right to process the next bit
    n >>= 1;
  }

  return result >>> 0; // Convert result to an unsigned integer
};

// Test case
console.log(reverseBits(43261596)); // Output: 964176192
