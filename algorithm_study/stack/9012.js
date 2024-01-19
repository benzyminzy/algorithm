const input = require('fs')
  .readFileSync('/dev/stdin').toString().trim().split(`\n`).slice(1);

const results = [];

function solution(str) {
  const tempArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      tempArr.push(str[i]);
    } else {
      if (tempArr.pop() !== '(') return false;
    }
  }

  return tempArr.length === 0;
}

input.forEach((str) => results.push(solution(str) ? 'YES' : 'NO'));
console.log(results.join(`\n`));
