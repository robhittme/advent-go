const assert = require('assert');
const fs = require('fs');

let final = [];

  const parseNums = (line) => line.trim().split(/\s+/).map(str => parseInt(str, 10));
  fs.readFile('formatted.txt', 'utf8', function(err, data) {
    const split = data.split('\n').map(parseNums)
    console.log(part1(split))
  })

const part1 = (tri) => {
  return tri.filter((t) => {
    return (
      (t[0] + t[1] > t[2]) &&
      (t[0] + t[2] > t[1]) &&
      (t[1] + t[2] > t[0])
    )
  }).length;
}

const part2 = (calories) => {
  return topThree.reduce((acc, val) => {
    return val + acc;
  }, 0)
}


//part2(example)

