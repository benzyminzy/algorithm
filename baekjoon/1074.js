const [N, r, c] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const next = [
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1],
];

let count = 0;
let result = 0;

function visit(x, y) {
  for (i = 0; i < next.length; i++) {
    const nx = x + next[i][0];
    const ny = y + next[i][1];

    if (nx === c && ny === r) {
      result = count;
      console.log(count);
      process.exit(0);
    }
    count++;
  }
}

function divide(number, x, y) {
  if (number === 1) {
    if (x + 2 >= c && y + 2 >= r) return visit(x, y);
    count += 4;
    return;
  }

  if (2 ** number + x >= c && 2 ** number + y >= r) {
    const NN = 2 ** (number - 1);

    divide(number - 1, x, y);
    divide(number - 1, x + NN, y);
    divide(number - 1, x, y + NN);
    divide(number - 1, x + NN, y + NN);
  } else {
    count += 2 ** number * 2 ** number;
  }
}

divide(N, 0, 0);
console.log(result);
