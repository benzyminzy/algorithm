const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(`\n`);

function solution(arr1, arr2) {
  const obj = {};

  arr1.forEach((el) => {
    const num = parseInt(el);
    obj[num] = obj[num] + 1 || 1;
  });

  return arr2.map((el) => obj[el] || 0).join(" ");
}

console.log(solution(input[1].split(" "), input[3].split(" ")));
