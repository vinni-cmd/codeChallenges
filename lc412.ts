// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

function fizzBuzz(num: number): string[] {
  // initialize string array with ['1'] since num >= 1
  const arr: string[] = ["1"];
  // do a type check for arg to see if num
  // build out array using a for loop / start at position 2 in 1-indexed array
  for (let i = 2; i <= num; i++) {
    // init variable to hold string value of current i
    let string = "";
    // else concat position as string
    if (i % 3 !== 0 && i % 5 !== 0) {
      string += i.toString();
      arr.push(string);
      continue;
    }
    if (i % 3 === 0) {
      // if position%3 === 0
      //concat 'Fizz' to string variable
      string += "Fizz";
    }
    // if position%5 === 0
    if (i % 5 === 0) {
      //concat 'Buzz' to string variable
      string += "Buzz";
    }
    arr.push(string);
  }
  return arr;
}

console.log(`
Input: 5,
Output: ${JSON.stringify(fizzBuzz(5))}
Expected: ['1','2','Fizz','4','Buzz']
`);
console.log(`
Input: 15,
Output: ${JSON.stringify(fizzBuzz(15))}
Expected: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
`);
