const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(`\n`);

const [length, num] = input[0].split(' ');
const arr = input[1].split(' ').map(Number);

let left = -1;
let right = arr.reduce((a, b) => Math.max(a, b));
let mid = Math.floor((left + right) / 2);

while (left + 1 < right) {
  mid = Math.floor((left + right) / 2);
  let sum = 0;

  for (let i = 0; i <= length; i++) {
    sum += arr[i] > mid ? arr[i] - mid : 0;
  }

  if (sum >= num) {
    left = mid;
  } else {
    right = mid;
  }
}

console.log(left);
