const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(`\n`)
  .map(Number)
  .sort((a, b) => a - b);

const result = [];
let flag = false;

// 수로 구성되어 있는 배열에서 7개의 요소를 합쳐서 100이 되는 요소들을 추려서 출력하는 함수
function permutation(arr, visited, count, max, sum) {
  if (count > max || sum > 100 || flag) return;

  if (count === max && sum === 100) {
    flag = true;
    visited.forEach((el, index) => {
      if (el === true) result.push(arr[index]);
    });
    return;
    // process.exit() 가능
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    permutation(arr, visited, count + 1, max, sum + arr[i]);
    visited[i] = false;
  }
}

permutation(input, [], 0, 7, 0);
console.log(result.join(`\n`));
