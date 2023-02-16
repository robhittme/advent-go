const assert = require('assert')
const fs = require('fs')

const example = [
  'vJrwpWtwJgWrhcsFMMfFFhFp',
'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
'PmmdzqPrVvPwwTWBwg',
'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
'ttgJtRGJQctTZtZT',
'CrZsJsPPZsGzwwsLwLmpwMDw'
]

const priorityScore = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26,
  'A': 27,
  'B': 28,
  'C': 29,
  'D': 30,
  'E': 31,
  'F': 32,
  'G': 33,
  'H': 34,
  'I': 35,
  'J': 36,
  'K': 37,
  'L': 38,
  'M': 39,
  'N': 40,
  'O': 41,
  'P': 42,
  'Q': 43,
  'R': 44,
  'S': 45,
  'T': 46,
  'U': 47,
  'V': 48,
  'W': 49,
  'X': 50,
  'Y': 51,
  'Z': 52,
}

function getFirstHalf(arr) {
  return arr.slice(0, (arr.length / 2));
}

function getSecondHalf(arr) {
  return arr.slice((arr.length / 2));
}

function part1(compartments) {
  const priorities = compartments.map((val, idx) => {
    const first = getFirstHalf(val)
    const last = getSecondHalf(val)
    const acc = first.split('').filter((f) => {
      return last.includes(f)
    })
    return acc[0];
  })

  return priorities.reduce((acc, val) => {
    if(val) acc += priorityScore[val]
    return acc;
  }, 0)
}

const groupByThree = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i += 3) {
    result.push(array.slice(i, i + 3));
  }
  return result;
};

function common(arr) {
  return arr[0].split('').filter((a) => arr[1].includes(a) && arr[2].includes(a))[0];
}

function part2(compartments) {
  let counter = 0;
  const grouping = groupByThree(compartments)
  const commons = grouping.map((g) => common(g))
  return commons.reduce((acc, val) => {
    if(val) acc += priorityScore[val]
    return acc;
  }, 0)
}

fs.readFile('data.txt', 'utf8', (err, data) => {
    arr = data.split('\n')
    console.log(part2(arr))
})
