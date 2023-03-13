/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  // create the empty result array
  const result = [];
  // using a loop populate the result array
  // set the counter variable = 1 and increment it by 1 after each iteration until the result array.length = n
  for (let i = 1; i <= n; i++) {
    // check if the counter value is divisible by 3 -> add 'Fizz' to the result array
    if (i % 3 === 0) {
      result.push('Fizz');
    }
    // check if the counter value is divisible by 5 -> add/concat 'Buzz'
    if (i % 5 === 0) {
      if (result[i - 1]) {
        result[i - 1] += 'Buzz';
      } else {
        result.push('Buzz');
      }
    }
    // else push the number as a string to the result array
    if (!(i % 3 === 0 || i % 5 === 0)) {
      result.push(i.toString());
    }
  }
  // return result array
  return result;
};

console.log(
  `Input: 3
  Output: ${fizzBuzz(3)}
  Expected: ['1','2','Fizz']`
)
console.log(
  `Input: 15
  Output: ${fizzBuzz(15)}
  Expected: ['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']`
)