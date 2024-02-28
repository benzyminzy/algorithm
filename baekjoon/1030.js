const [s, N, K, R1, R2, C1, C2] = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let array = new Array(51).fill().map(() => new Array(51).fill().map(() => -1));

function fractal(size, y, x, isBlack) {
  if (y + size <= R1 || y > R2 || x + size <= C1 || x > C2) {
    return;
  }

  if (size === 1) {
    array[y - R1][x - C1] = isBlack ? 1 : 0;
    return;
  }

  let ns = size / N;
  let blackStart = (N - K) / 2;
  let blackEnd = N - blackStart;

  for (let i = 0; i < N; i++) {
    const ny = y + ns * i;
    for (let j = 0; j < N; j++) {
      let nx = x + ns * j;
      const isNextBlack =
        isBlack ||
        (i >= blackStart && i < blackEnd && j >= blackStart && j < blackEnd);

      fractal(ns, ny, nx, isNextBlack);
    }
  }
}

fractal(N ** s, 0, 0, false);

let answer = [];

for (let i = 0; i <= R2 - R1; i++) {
  for (let j = 0; j <= C2 - C1; j++) {
    answer.push(array[i][j]);
  }
  answer.push('\n');
}

console.log(answer.join(''));
