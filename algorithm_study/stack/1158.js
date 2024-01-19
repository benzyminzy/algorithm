const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(` `);

const length = parseInt(input[0]);
const num = parseInt(input[1]);

let arr = new Array(length).fill().map((_, index) => index + 1);
const answer = [];

while (arr.length > 0) {
  if (arr.length >= num) {
    const tempArr = arr.splice(0, num);
    answer.push(tempArr.pop());
    arr = [...arr, ...tempArr];
  } else {
    const temp = num % arr.length;
    if (temp === 0) {
      answer.push(arr.pop());
    } else {
      const tempArr = arr.splice(0, temp);
      answer.push(tempArr.pop());
      arr = [...arr, ...tempArr];
    }
  }
}

console.log(`<${answer.join(', ')}>`);
