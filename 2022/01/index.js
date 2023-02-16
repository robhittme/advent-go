const assert = require('assert');
const fs = require('fs');

const final = [];

  fs.readFile('data.txt', 'utf8', function(err, data) {
    const split = data.split('\n')
    let counter = 0;
    split.forEach((s) => {
      if(s === '') {
        counter++;
      } else {
        final.push([])
        final[counter].push(s);
      }
    })
    console.log("part1", part1(final))
    console.log("part2", part2(final))
  })

const example = [
  [
    1000,
    2000,
    3000,
  ],
  [
    4000,

  ],
  [
    5000,
    6000,

  ],
  [
    7000,
    8000,
    9000,
  ],
  [
    10000
  ]]

const part1 = (calories) => {
  let most = 0;
  calories.forEach((a) => {
    const total = a.reduce((acc, val) => {
      return JSON.parse(val) + acc;
    }, 0);
    if(total > most) {
      most = total;
    }
  })
  return most;
}

const part2 = (calories) => {
  let elves = [];
  calories.forEach((a) => {
    const total = a.reduce((acc, val) => {
      return JSON.parse(val) + acc;
    }, 0);

    elves.push(total)
  })
  const sorted = elves.sort((a,b) => b - a);
  const topThree = sorted.slice(0,3);
  return topThree.reduce((acc, val) => {
    return val + acc;
  }, 0)
}

assert(part1(example) === 24000)
assert(part2(example) === 45000)

part2(example)

