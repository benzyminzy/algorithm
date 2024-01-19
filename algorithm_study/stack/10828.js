const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(`\n`);

class Stack {
  constructor() {
    this.arr = [];
    this.answer = [];
  }
  push(num) {
    this.arr.push(num);
  }
  pop() {
    this.answer.push(this.arr.pop() || -1);
  }
  size() {
    this.answer.push(this.arr.length);
  }
  empty() {
    this.answer.push(this.arr.length === 0 ? 1 : 0);
  }
  top() {
    this.answer.push(this.arr[this.arr.length - 1] || -1);
  }
}

const stack = new Stack();

for (let i = 1; i < input.length; i++) {
  if (input[i].includes('push')) {
    stack.push(parseInt(input[i].split(' ')[1]));
  } else {
    stack[input[i]]();
  }
}

console.log(stack.answer.join(`\n`));
