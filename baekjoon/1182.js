const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(`\n`);
const [N, S] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

function permutation(visited, number, rest, output, max) {
  const sum = visited.reduce((acc, cur) => acc + cur, 0);

  if (visited.length > 0 && sum === number) {
    output.push(visited);
  }

  if (visited.length === max) return;

  for (let i = 0; i < rest.length; i++) {
    const newArr = rest.slice(i + 1);
    permutation([...visited, rest[i]], number, newArr, output, max);
  }
}

let output = [];
permutation([], S, array, output, N);

console.log(output.length);
