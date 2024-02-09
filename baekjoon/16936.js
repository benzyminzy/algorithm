const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(`\n`);

const N = Number(input[0]);
const A = input[1].split(' ').map((x) => BigInt(x));
let result = [];

function solution(x, visited, depth) {
  if (!A.includes(x)) return;

  visited.push(x);
  if (visited.length === N) {
    result = visited;
    return;
  }

  solution(x * 2n, visited, depth + 1);
  if (x % 3n === 0n) {
    solution(x / 3n, visited, depth + 1);
  }
}

for (let i = 0; i < A.length; i++) {
  solution(A[i], [], 0);
}

console.log(result.join(' '));
