function xor(a, b) {
  // check to see if one of the arguments evals to true
    // check to see if one of the args evals to false
      // return true
  // return false
  return a !== b
}

// test cases

console.log(`
  Input: xor(true, true),
  Output: ${xor(true, true)},
  Expected: false`
)
console.log(`
  Input: xor(false, true),
  Output: ${xor(false, true)},
  Expected: true`
)
console.log(`
  Input: xor(false, false),
  Output: ${xor(false, false)},
  Expected: false`
)


// Exclusive "or" (xor) Logical Operator
// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.