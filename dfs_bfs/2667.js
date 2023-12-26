const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(`\n`);

const length = input[0] | 0;
const map = input.slice(1).map((str) => str.split('').map(Number));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const visited = new Array(length)
  .fill()
  .map(() => new Array(length).fill().map(() => -1));

// 그룹 번호
let count = 0;
let result = [];

function BFS(map, visited, count, y, x) {
  const queue = [];
  let answer = 1;

  queue.push([y, x]);
  visited[y][x] = count;

  while (queue.length > 0) {
    // 현재 위치 [y, x]
    const current = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = current[1] + dx[i];
      const ny = current[0] + dy[i];

      if (nx < 0 || ny < 0 || nx >= length || ny >= length) continue;

      if (map[ny][nx] !== 0 && visited[ny][nx] === -1) {
        queue.push([ny, nx]);

        visited[ny][nx] = count;
        answer += 1;
      }
    }
  }

  result.push(answer);
}

for (let i = 0; i < length; i++) {
  for (let j = 0; j < length; j++) {
    if (map[i][j] !== 0 && visited[i][j] === -1) {
      BFS(map, visited, count, i, j);
      count += 1;
    }
  }
}

result.sort((a, b) => a - b);
console.log([count, ...result].join(`\n`));
