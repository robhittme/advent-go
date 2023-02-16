const fs = require('fs');

const example = [
  [2, 3, 4],
 // [1, 1, 10]
]

function sqft(arr) {
  const num = arr.map((e) => parseInt(e));
  const [l, w, h] = num;
  const [a, b, _ ] = num.sort((a, b) => a - b)
  return (2*l*w) + (2*w*h) + (2*h*l) + a*b;
}

function cubic(arr) {
  const num = arr.map((e) => parseInt(e));
  const [l, w, h] = num;
  const [a, b, _ ] = num.sort((a, b) => a - b)
  return (a + a + b + b) + (l*w*h);
}

function part1(input) {
  return input.reduce((acc, val) => acc + sqft(val), 0)
}

function part2(input) {
  return input.reduce((acc, val) => acc + cubic(val), 0)
}

fs.readFile('data.txt', 'utf8', (error, data) => {
  const areas = data.split('\n');
  const nums = areas.map((a) => a.split('x'));
  console.log(part1(nums.slice(0, -1)));
  console.log(part2(nums.slice(0, -1)));
})

