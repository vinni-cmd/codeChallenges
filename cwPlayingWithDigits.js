function digPow(n, p) {
  // determine the sum of the digits of n taken to the successive powers of p
  // convert n to an array
  const nArr = n.toString().split('');
  // loop through each digit of n
  // for each digit raise it to the power of p + index(of n)
  const raisedArr = nArr.map((num, index) => num ** (p + index));
  // sum all the results from the previous step
  const sum = raisedArr.reduce((acc, currVal) => {
    return acc + currVal;
  }, 0)
  // determine the result(k) of the sum divided by n
  const k = sum / n
  // if k is an integer return the integer
  if (Number.isInteger(k)) {
    return k;
  }
  // else return -1
  return -1;
}

// Test cases
console.log(`
  Input: 89, 1,
  Output: ${digPow(89, 1)},
  Expected: 1`
)
console.log(`
  Input: 92, 1,
  Output: ${digPow(92, 1)},
  Expected: -1`
)
console.log(`
  Input: 46288, 3,
  Output: ${digPow(46288, 3)},
  Expected: 51`
)


// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51