const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(`\n`);

let [length, sum] = input[0].split(' ').map(Number);
let count = 0;

for (let i = length; i > 0; i--) {
  if (sum === 0) break;
  const num = parseInt(sum / input[i]);
  if (num) {
    count += num;
    sum %= input[i];
  }
}

console.log(count);
