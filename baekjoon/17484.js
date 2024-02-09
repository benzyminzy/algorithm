const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(`\n`);
const [N, M] = input[0].split(' ').map(Number);

let result = Infinity;

function solution(sum, x, depth, step) {
  if (depth > N) {
    if (sum < result) result = sum;
    return;
  }

  const way = input[depth].split(' ').map(Number);

  if (x - 1 >= 0 && step !== -1)
    solution(sum + way[x - 1], x - 1, depth + 1, -1);
  if (step !== 0) solution(sum + way[x], x, depth + 1, 0);
  if (x + 1 < M && step !== 1) solution(sum + way[x + 1], x + 1, depth + 1, 1);
}

for (let i = 0; i < M; i++) {
  solution(0, i, 1);
}

console.log(result);
