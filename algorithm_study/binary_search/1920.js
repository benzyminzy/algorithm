const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(`\n`);

const arr = input[1].split(' ').map(Number);
const numList = input[3].split(' ').map(Number);

function solution(arr, numList) {
  const sortedArr = arr.sort((a, b) => a - b);

  const isIncludes = (num, arr) => {
    let left = -1;
    let right = arr.length;

    while (left + 1 < right) {
      let mid = parseInt((left + right) / 2);

      if (arr[mid] == num) {
        return 1;
      } else if (arr[mid] < num) {
        left = mid;
      } else {
        right = mid;
      }
    }
    return 0;
  };

  return numList.map((num) => isIncludes(num, sortedArr));
}

console.log(solution(arr, numList).join(`\n`));
