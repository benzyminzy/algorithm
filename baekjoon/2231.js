const input = require('fs').readFileSync('./input.txt').toString().trim();

// 가장 작은 생성자를 구해내는 프로그램
function solution(num) {
  let result = 0;

  for (let i = 1; i < num; i++) {
    let tempArr = String(i).split('').map(Number);
    let temp = i;

    for (let j = 0; j < tempArr.length; j++) {
      temp += tempArr[j];
    }

    if (temp === num) {
      result = i;
      break;
    }
  }
  return result;
}

console.log(solution(input | 0));
