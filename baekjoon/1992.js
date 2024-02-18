const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(`\n`);

const N = input[0] | 0;
const arr = input.slice(1).map((el) => el.split('').map(Number));
let answer = [];

function check(number, y, x) {
  let current = arr[y][x];

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      if (current !== arr[y + i][x + j]) {
        return -1;
      }
    }
  }

  return current;
}

function divide(number, y, x) {
  let current = arr[y][x];
  const temp = check(number, y, x);

  if (current === temp) {
    return answer.push(current);
  }

  const n = number / 2;

  answer.push('(');
  divide(n, y, x);
  divide(n, y, x + n);
  divide(n, y + n, x);
  divide(n, y + n, x + n);
  answer.push(')');
  return;
}

divide(N, 0, 0);

console.log(answer.join(''));
