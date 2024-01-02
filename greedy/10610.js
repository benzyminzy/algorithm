const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('')
  .map(Number)
  .sort((a, b) => b - a);

if (input[input.length - 1] !== 0) {
  console.log(-1);
  return;
}

let num = 0;
for (let i = 0; i < input.length - 1; i++) {
  num += input[i];
}

num % 3 === 0 ? console.log(input.join('')) : console.log(-1);
