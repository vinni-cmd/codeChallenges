// twoSum(nums,target)
function twoSum(nums: number[], target: number): number[] {
  // loop through nums array
  for (let i = 0; i < nums.length; i++) {
    // loop through all subsequent values in nums
    for (let j = i + 1; j < nums.length; j++) {
      // if sum of combo of above values === target
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// test cases:
console.log(`
  Input: ([2,7,11,15],9),
  Output: ${JSON.stringify(twoSum([2, 7, 11, 15], 9))},
  Expected: [0,1]`);
console.log(`
  Input: ([3, 2, 4], 6),
  Output: ${JSON.stringify(twoSum([3, 2, 4], 6))},
  Expected: [1,2]`);
