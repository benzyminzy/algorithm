let [N, M, K] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let max = Math.min(parseInt(N / 2), M);

N = N - max * 2;
M = M - max;

N + M >= K ? console.log(max) : console.log(max - Math.ceil((K - (N + M)) / 3));
