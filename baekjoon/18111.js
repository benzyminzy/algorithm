const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(`\n`);

const [N, M, B] = input[0].split(' ');
const ground = input.slice(1).map((arr) => arr.split(' ').map(Number));

let TIME = Infinity;
let HEIGHT = 0;

for (let i = 256; i >= 0; i--) {
  let time = 0;
  let inventory = B | 0;

  for (let j = 0; j < ground.length; j++) {
    for (let k = 0; k < ground[j].length; k++) {
      if (ground[j][k] > i) {
        inventory += ground[j][k] - i;
        time += (ground[j][k] - i) * 2;
      } else if (ground[j][k] < i) {
        inventory -= i - ground[j][k];
        time += i - ground[j][k];
      }
    }
  }

  if (inventory >= 0 && time < TIME) {
    TIME = time;
    HEIGHT = i;
  }
}

console.log(TIME, HEIGHT);
