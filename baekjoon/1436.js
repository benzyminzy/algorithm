const input = require('fs').readFileSync('./input.txt').toString().trim();

function solution(number) {
  let count = 0;

  for (let i = 666; ; i++) {
    if ((i + '').indexOf('666') > -1) count += 1;
    if (count === number) {
      return i;
    }
  }
}

console.log(solution(input | 0));
