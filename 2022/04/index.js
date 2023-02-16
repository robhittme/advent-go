const assert = require('assert');
const fs = require('fs');

const example = [
  [ '13-13', '14-89' ],
  [ '7-72', '8-71' ]
];

function isBetween(num, start, end) {
  if(parseInt(num) >= parseInt(start) && parseInt(num) <= parseInt(end)) {
    return true;
  }
  return false;
}
function partialOverlap(arr) {
  if(arr.length > 1) {
    const [start, end] = arr[0].split('-')
    const [s, e] = arr[1].split('-')
    if(isBetween(start, s, e) || isBetween(end, s, e)) {
      console.log({arr, type: 'first'})
      return true;
    }
    if(isBetween(s, start, end) || isBetween(e, start, end)) {
      console.log({arr, type: 'second'})
      return true;
    }
    console.log({arr, type: 'not overlapping' })
    return false;
  }
  console.log({arr, type: 'not overlapping' })
  return false;
}
function fullOverlap(arr) {
  if(arr.length > 1) {
    const [start, end] = arr[0].split('-')
    const [s, e] = arr[1].split('-')
    if(isBetween(start, s, e) && isBetween(end, s, e)) {
      console.log({arr, type: 'first'})
      return true;
    }
    if(isBetween(s, start, end) && isBetween(e, start, end)) {
      console.log({arr, type: 'second'})
      return true;
    }
    console.log({arr, type: 'not overlapping' })
    return false;
  }
  console.log({arr, type: 'not overlapping' })
  return false;
}
function part1(input) {
  return input.filter((i) => {
    return fullOverlap(i)
  }).length;
}

console.log(part1(example))

function part2(input) {
  return input.filter((i) => {
   return partialOverlap(i)
  }).length
}
fs.readFile('data.txt', 'utf8', (error, data) => {
  const arr = data.split('\n').map((i) => i.split(','));
  //
  console.log("part1: ", part1(arr), arr.length)
  console.log("part2: ", part2(arr))
})
