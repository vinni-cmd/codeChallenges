/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function (accounts) {
  // for each customer, determine their total wealth
  const customerWealth = accounts.map(customer => customer.reduce((accum, curr) => accum + curr))
  // determine the customer with the most wealth
  const maxWealth = Math.max(...customerWealth);
  // return the wealth of that customer
  return maxWealth
};

// Tests
console.log(`
Input: [[1,2,7],[4,5,2]]
Output: ${maximumWealth([[1, 2, 7], [4, 5, 2]])}
Expected: 11
`)
console.log(`
Input: [[20],[4,5,2],[8,9,10],[7,7,7]]
Output: ${maximumWealth([[20], [4, 5, 2], [8, 9, 10], [7, 7, 7]])}
Expected: 27
`)