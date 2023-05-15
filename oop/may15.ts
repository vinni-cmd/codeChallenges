// create a calculator
// add
// subtract
// input will be numbers (two)

// Calculator class
class Calculator {
  // method
  // add
  add(num1: number, num2: number): number {
    // return sum
    return num1 + num2;
  }
  // subtract
  subtract(num1: number, num2: number): number {
    // return first input - second input
    return num1 - num2;
  }
  // method that will handle the sum of any number of inputs
  // sumAll
  sumAll(...nums: any) {
    // grab arguments object and spread into an array
    const arr = [...nums];
    // reduce the array to total
    return arr.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }
}

// test cases
const calc = new Calculator();
// console.log(`
// addition
// Input: 3,4,
// Output: ${calc.add(3, 4)},
// Expected: 7
// `);
// console.log(`
// subtract
// Input: 3,4,
// Output: ${calc.subtract(3, 4)},
// Expected: -1
// `);
console.log(`
sumAll
Input: 3,4,-1,5
Output: ${calc.sumAll(3, 4, -1, 5)},
Expected: 11
`);
