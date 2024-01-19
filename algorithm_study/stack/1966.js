const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(`\n`);

const results = [];

function solution(arr1, arr2) {
  const num = parseInt(arr1[1]);
  const priorityArr = arr2.split(' ').map((el) => parseInt(el));
  const queue = new Array(parseInt(arr1[0])).fill().map((_, index) => index);

  let order = 1;

  while (queue.length > 0) {
    let maxNum = 0;
    const currentNum = queue.shift();

    for (let i = 0; i < priorityArr.length; i++) {
      if (priorityArr[i] >= maxNum) {
        maxNum = priorityArr[i];
      }
    }

    if (priorityArr[currentNum] >= maxNum) {
      priorityArr[currentNum] = null;
      if (num === currentNum) {
        return order;
      }
      order++;
    } else {
      queue.push(currentNum);
    }
  }
}

for (let i = 1; i < input.length; i += 2) {
  results.push(solution(input[i].split(' '), input[i + 1]));
}

console.log(results.join(`\n`));
