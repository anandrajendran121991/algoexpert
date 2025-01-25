/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    const seenIndices = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (seenIndices.has(nums[i])) {
            const lastIndex = seenIndices.get(nums[i]);
            if (i - lastIndex <= k) {
                return true;
            }
        }
        seenIndices.set(nums[i], i);
    }
    
    return false;
};
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
