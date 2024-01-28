const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(`\n`);

const [N, M] = input[0].split(' ');
const Arr = input.splice(1);

const WhiteStartBoard = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];

const BlackStartBoard = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

function countDiff(arr, y, x) {
  let count1 = 0;
  let count2 = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (arr[i][j] !== BlackStartBoard[i - y][j - x]) count1 += 1;
      if (arr[i][j] !== WhiteStartBoard[i - y][j - x]) count2 += 1;
    }
  }
  return Math.min(count1, count2);
}

function solution(arr, type) {
  let result = N * M;

  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      result = Math.min(result, countDiff(arr, i, j, type));
    }
  }
  return result;
}

console.log(solution(Arr));
