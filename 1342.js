/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  // create variable to store number of steps
  let steps = 0;
  // while loop
  while (num !== 0) {
    // else check to see if currNum is even -> divide by 2
    if (num % 2 === 0) {
      num /= 2;
    }
    // check to see if currNum is odd -> subtract 1
    else {
      num -= 1;
    }
    steps++;
  }
  // return steps
  return steps;
};

console.log(
  `Input: 3
  Output: ${numberOfSteps(3)}
  Expected: 3`
)
console.log(
  `Input: 14
  Output: ${numberOfSteps(14)}
  Expected: 6`
)
console.log(
  `Input: 8
  Output: ${numberOfSteps(8)}
  Expected: 4`
)