const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(`\n`);

const [length, line, startNode] = input[0].split(' ').map(Number);

// 초기화 단계
const graph = {};
new Array(length).fill().map((_, index) => (graph[index + 1] = []));

input.slice(1).forEach((arr) => {
  const [node, linkedNode] = arr.split(' ').map(Number);
  graph[node].push(linkedNode);
  graph[linkedNode].push(node);
});

// 배열 정렬
for (let key in graph) {
  graph[key] = graph[key].sort((a, b) => a - b);
}

function DFS(graph, currentNode, visited) {
  // 기저 사례
  if (visited.includes(currentNode)) return;
  visited.push(currentNode);
  graph[currentNode].forEach((node) => DFS(graph, node, visited));
}

let visited = [];
DFS(graph, startNode, visited);
console.log(visited.join(' '));

function BFS(graph, startNode) {
  const queue = [];
  const visited = [];

  queue.push(...graph[startNode]);
  visited.push(startNode);

  while (queue.length > 0) {
    const firstNode = queue.shift();

    if (!visited.includes(firstNode)) {
      visited.push(firstNode);
      queue.push(...graph[firstNode]);
    }
  }

  return visited;
}

console.log(BFS(graph, startNode).join(' '));
