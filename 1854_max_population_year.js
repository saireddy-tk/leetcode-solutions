/**
 * @param {number[][]} logs
 * @returns {number}
 */

// Constraints:

// 1 <= logs.length <= 100
// 1950 <= birthi < deathi <= 2050

function maximumPopulation(logs) {
  const arr = new Array(2051).fill(0);

  // for birth and dead we add +1 and -1
  for (const log of logs) {
    arr[log[0]] += 1;
    arr[log[1]] -= 1;
  }

  let maxPop = 0;
  let curPop = 0;
  let year = 1950;

  // if sum birth and same time we'll sub death if any new birth starts before death curPop increases
  for (let i = 1950; i < 2051; i++) {
    curPop += arr[i];
    if (curPop > maxPop || (maxPop === curPop && i < year)) {
      maxPop = curPop;
      year = i;
    }
  }

  return year;
}

console.log(
  maximumPopulation([
    [1950, 1961],
    [1960, 1971],
    [1970, 1981],
  ])
);
