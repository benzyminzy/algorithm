const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(`\n`);

const cards = input[1].split(' ').map(Number);
cards.sort((a, b) => b - a);

let result = 0;

for (let i = 1; i < cards.length; i++) {
  result += cards[0] + cards[i];
}

console.log(result);
