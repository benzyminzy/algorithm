let [n, arr] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(`\n`);
arr = arr.split(' ').map(Number);

let maxEndingHere = arr[0];
let maxSoFar = arr[0];

for (let i = 1; i < n; i++) {
  maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
  maxSoFar = Math.max(maxSoFar, maxEndingHere);
}

console.log(maxSoFar);
