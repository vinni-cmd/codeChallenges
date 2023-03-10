/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // create result array to populate in loop
  const result = [];
  // create variable to hold running sum and assign it a value of 0
  let currSum = 0;
  // loop over nums array
  for (let i = 0; i < nums.length; i++) {
    // increment running sum by the value of the element at the current index
    currSum += nums[i];
    // push the updated running sum to the results array
    result.push(currSum);
  }
  // return the results array
  return result;
};

console.log(
  `Input: [1,2,3,4]
  Output: ${runningSum([1, 2, 3, 4])}
  Expected: [1,3,6,10]`
)
console.log(
  `Input: [1,1,1,1]
  Output: ${runningSum([1, 1, 1, 1])}
  Expected: [1,2,3,14]`
)