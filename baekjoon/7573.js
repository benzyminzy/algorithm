const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(`\n`);
const [N, I, M] = input[0].split(' ').map(Number);

let fish = [];
let partition = [];
let result = 0;

for (let i = 1; i < M + 1; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  fish.push({ x, y });
}

for (let i = 1; i < I / 2; i++) {
  partition.push({ w: i, h: I / 2 - i });
}

function catchFish(fish1, fish2) {
  let x = fish[fish1].x;
  let y = fish[fish2].y;

  for (let i = 0; i < partition.length; i++) {
    let { w, h } = partition[i];
    let count = 0;

    for (let j = 0; j < M; j++) {
      if (
        x <= fish[j].x &&
        fish[j].x <= x + w &&
        y <= fish[j].y &&
        fish[j].y <= y + h
      )
        count += 1;
    }

    if (result < count) result = count;
  }
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < M; j++) {
    catchFish(i, j);
  }
}

console.log(res);
