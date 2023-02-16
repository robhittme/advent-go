const assert = require('assert')
const fs = require('fs');

fs.readFile('data.txt', 'utf8', function(err, data) {
  const final = [];
  const split = data.split('\n')
  split.forEach((s) => {
    let n = s.split(',');
    let t = n[0].split(' ');
    final.push(t);
  })
  console.log(final)
  console.log(part2(final));
})


const example = [
  ['A', 'Y'],
  ['B', 'X'],
  ['C', 'Z'],

]
function game(left, right) {
  switch (left) {
    case 'A':
      if(right == 'X') {
        return 3
      }
      if(right == 'Y') {
        return 6
      }
      if(right == 'Z') {
        return 0
      }
    case 'B':
      if(right == 'X') {
        return 0
      }
      if(right == 'Y') {
        return 3
      }
      if(right == 'Z') {
        return 6
      }
    case 'C':
      if(right == 'X') {
        return 6
      }
      if(right == 'Y') {
        return 0
      }
      if(right == 'Z') {
        return 3
      }
  }
}

function game2(left, right) {
      if(right == 'X') {
        return 1
      }
      if(right == 'Y') {
        return 5
      }
      if(right == 'Z') {
        return 9
      }
}


function convert(val) {
  const Y = 2;
  const X = 1;
  const Z = 3;
  if(val == 'X') return X;
  if(val == 'Y') return Y;
  if(val == 'Z') return Z;
}

function part1(guide) {
  let score = 0;
  guide.forEach((g) => {
    if(g[0] && g[1]) {
      score += convert(g[1]);
      score += game(g[0], g[1]);
    }
  })
  console.log({score})
  return score;
}

function part2(guide) {
  let score = 0;
  guide.forEach((g) => {
    if(g[0] && g[1]) {
      score += game2(g[0], g[1]);
    }
  })
  console.log({score})
  return score;
}

//assert(part1(example) === 15)
//console.log(part1(example))

=======
const fs = require('fs')

fs.readFile('data.txt', 'utf8', (error, data) => {
  const split = data.split('\n')
  console.log(part2(split))
})

const example = [
  'A Y',
  'B X',
  'C Z'
];

function game(left, right) {
  switch(left) {
    case 'A':
      if(right === 'X') return 3;
      if(right === 'Y') return 6;
      if(right === 'Z') return 0;
    case 'B':
      if(right === 'X') return 0;
      if(right === 'Y') return 3;
      if(right === 'Z') return 6;
    case 'C':
      if(right === 'X') return 6;
      if(right === 'Y') return 0;
      if(right === 'Z') return 3;
  }
}

function adjust(left, right) {
  switch(left) {
    case 'A':
      if(right === 'X') return 'A Z';
      if(right === 'Y') return 'A X';
      if(right === 'Z') return 'A Y';
    case 'B':
      if(right === 'X') return 'B X';
      if(right === 'Y') return 'B Y';
      if(right === 'Z') return 'B Z';
    case 'C':
      if(right === 'X') return 'C Y';
      if(right === 'Y') return 'C Z';
      if(right === 'Z') return 'C X';
  }
  return result;
}

function convert(val) {
  if(val == 'X' || val == 'A') return 1;
  if(val == 'Y' || val == 'B') return 2;
  if(val == 'Z' || val == 'C') return 3;
  return 0;
}

function part1(arr) {
  let score = 0;
  arr.forEach((a) => {
    if(a) {
      score += convert(a[2])
      score += game(a[0], a[2])
    }
  })
  return score;
}

function part2(arr) {
  let score = 0;
  arr.forEach((a) => {
    if(a) {
      const h = adjust(a[0], a[2])
      score += convert(h[2])
      score += game(h[0], h[2])
    }
  })
  return score;
}

//assert(part2(example) === 12)
