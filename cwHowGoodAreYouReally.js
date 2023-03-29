function betterThanAverage(classPoints, yourPoints) {
  // calculate class average
  // add your point to classPoints array
  const completePoints = [...classPoints];
  completePoints.push(yourPoints);
  // reduce new array to a total value
  const total = completePoints.reduce((acc, curr) => acc + curr);
  // calculate mean
  const average = total / completePoints.length;
  // return comparison
  return yourPoints > average;
}

// Tests

console.log(`
  Input: ([3,5,4,10],8),
  Output: ${betterThanAverage([3, 5, 4, 10], 8)},
  Expected: true`
)
console.log(`
  Input: ([3,5,4,10],1),
  Output: ${betterThanAverage([3, 5, 4, 10], 1)},
  Expected: false`
)
console.log(`
  Input: ([3,5,4,10],6),
  Output: ${betterThanAverage([3, 5, 4, 10], 6)},
  Expected: true`
)

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!