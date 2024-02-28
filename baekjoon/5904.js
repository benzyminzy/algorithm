const N = require('fs').readFileSync('input.txt').toString().trim() | 0;

let answer = '';

function moo(num) {
  let size = 3;
  let index = 0;
  if (num === 1) return (answer = 'm');
  if (num <= 3) return (answer = 'o');

  // N보다 큰 moo배열의 크기 구하기
  while (size < num) {
    size = size * 2 + index + 4;
    index++;
  }

  let front_back = (size - index - 3) / 2;

  if (size - front_back + 1 <= num) {
    moo(num - size + front_back);
  } else if (num === front_back + 1) {
    return (answer = 'm');
  } else {
    return (answer = 'o');
  }
}

moo(N);
console.log(answer);
