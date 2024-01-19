const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(`\n`);

const num = input[0].split(" ")[1];
const arr = input.slice(1);

function solution(num, arr) {
  let left = 1;
  let right = Math.max(...arr);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let sum = 0;

    arr.forEach((lan) => {
      sum += parseInt(lan / mid);
    });

    if (num <= sum) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

console.log(solution(num, arr));
