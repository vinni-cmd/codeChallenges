const runningSum = function (nums) {
  // if nums only has one value return nums
  if (nums.length === 1)  {
    return nums
  }
  // else 
  // variable for curr running sum;
  let runningSum = 0
  // variable for new arr
  const newArr = []
  // loop over nums
  for (let num of nums) {
    // calculate new running sum
    runningSum += num
    // push to new arr
    newArr.push(runningSum);
  }
  return newArr
};

console.log(`
  Input: [1,2,3,4],
  Output: ${runningSum([1,2,3,4])},
  Expected:[1,3,6,10]`
)
console.log(`
  Input: [1,1,1,1,1],
  Output: ${runningSum([1,1,1,1,1])},
  Expected:[1,2,3,4,5]`
)
console.log(`
  Input: [3,1,2,10,1],
  Output: ${runningSum([3,1,2,10,1])},
  Expected:[3,4,6,16,17]`
)

