const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(`\n`);

const [node, line] = input[0].split(" ").map(Number);

const graph = {};

new Array(node).fill().map((_, index) => {
  graph[index + 1] = [];
});

input.slice(1).forEach((el) => {
  const [n, v] = el.split(" ").map(Number);
  graph[n].push(v);
  graph[v].push(n);
});

function BFS(graph, start, visited) {
  let Q = [];

  Q.push(start);
  visited.push(start);

  while (Q.length > 0) {
    const current = Q.shift();

    for (let i = 0; i < graph[current].length; i++) {
      const node = graph[current][i];

      if (!visited.includes(node)) {
        Q.push(node);
        visited.push(node);
      }
    }
  }
}

let result = 0;
let visited = [];
for (let i = 1; i <= node; i++) {
  if (visited.includes(i)) continue;
  BFS(graph, i, visited);
  result += 1;
}

console.log(result);
