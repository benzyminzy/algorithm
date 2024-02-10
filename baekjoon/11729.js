const input = require('fs').readFileSync('input.txt').toString() | 0;

const log = [];

function solution(number, start, mid, end) {
  if (number === 1) return log.push(`${start} ${end}`);

  // 마지막 원판을 마지막 장대로 옮길 때 그 전의 원판들은 start -> mid
  solution(number - 1, start, end, mid);

  log.push(`${start} ${end}`);

  // 마지막 원판을 옮기고 나서는 그 전의 원판들을 mid to end
  solution(number - 1, mid, start, end);
}

solution(input, 1, 2, 3);

console.log(`${log.length} \n${log.join(`\n`)}`);
