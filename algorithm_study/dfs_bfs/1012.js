const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(`\n`);

function DFS(map, x, y, width, height) {
  if (x < 0 || y < 0 || x >= width || y >= height || map[y][x] !== 1) return;

  map[y][x] = -1;

  DFS(map, x + 1, y, width, height);
  DFS(map, x - 1, y, width, height);
  DFS(map, x, y + 1, width, height);
  DFS(map, x, y - 1, width, height);
}

function solution(arr, width, height) {
  let result = 0;

  const map = new Array(height)
    .fill()
    .map(() => new Array(width).fill().map(() => 0));

  arr
    .map((position) => position.split(' '))
    .forEach((position) => {
      map[position[1]][position[0]] = 1;
    });

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (map[i][j] === 1) {
        DFS(map, j, i, width, height);
        result += 1;
      }
    }
  }

  return result;
}

let idx = 1;
let answer = [];
for (let i = 0; i < input[0]; i++) {
  const [width, height, count] = input[idx].split(' ').map(Number);
  answer.push(solution(input.slice(idx + 1, idx + count + 1), width, height));
  idx = idx + count + 1;
}

console.log(answer.join(`\n`));
