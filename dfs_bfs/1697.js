const [N, K] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(` `)
  .map(Number);

const graph = new Array(100_002).fill().map(() => -1);

function BFS(start, arrive) {
  const Q = [];

  Q.push(start);
  graph[start] = 0;

  while (Q.length > 0) {
    const temp = Q.shift();
    let count = graph[temp];

    if (temp - 1 >= 0 && temp - 1 <= 100_000) {
      if (graph[temp - 1] === -1) {
        Q.push(temp - 1);
        graph[temp - 1] = count + 1;
      } else if (graph[temp - 1] > count + 1) {
        Q.push(temp - 1);
        graph[temp - 1] = count + 1;
      }
    }

    if (temp + 1 >= 0 && temp + 1 <= 100_000) {
      if (graph[temp + 1] === -1) {
        Q.push(temp + 1);
        graph[temp + 1] = count + 1;
      } else if (graph[temp + 1] > count + 1) {
        Q.push(temp + 1);
        graph[temp + 1] = count + 1;
      }
    }
    if (temp * 2 >= 0 && temp * 2 <= 100_000) {
      if (graph[temp * 2] === -1) {
        Q.push(temp * 2);
        graph[temp * 2] = count + 1;
      } else if (graph[temp * 2] > count + 1) {
        Q.push(temp * 2);
        graph[temp * 2] = count + 1;
      }
    }
  }

  return graph[arrive];
}

console.log(BFS(N, K));
