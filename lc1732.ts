function largestAltitude(gain: number[]): number {
    // create altitude array from gain array
    const altArr = gain.reduce((acc,curr) => {
        const alt = acc[acc.length - 1] + curr
        acc.push(alt)
        return acc
    },[0])
    // return max value in altitude array
    return Math.max(...altArr)
};

console.log(
    JSON.stringify(
        `input: [-5,1,5,0,-7]
        output: ${largestAltitude([-5,1,5,0,-7])}
        expected: 1`
    )
);
console.log(
    `input: [-4,-3,-2,-1,4,3,2]
    output: ${largestAltitude([-4,-3,-2,-1,4,3,2])}
    expected: 0`
);
