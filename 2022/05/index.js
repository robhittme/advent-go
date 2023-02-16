const fs = require('fs');

/*    [V] [G]             [H]
[Z] [H] [Z]         [T] [S]
[P] [D] [F]         [B] [V] [Q]
[B] [M] [V] [N]     [F] [D] [N]
[Q] [Q] [D] [F]     [Z] [Z] [P] [M]
[M] [Z] [R] [D] [Q] [V] [T] [F] [R]
[D] [L] [H] [G] [F] [Q] [M] [G] [W]
[N] [C] [Q] [H] [N] [D] [Q] [M] [B]
 1   2   3   4   5   6   7   8   9
 */
const example = [
  ['N', 'D', 'M', 'Q', 'B', 'P', 'Z'],
  ['C', 'L', 'Z', 'Q', 'M', 'D', 'H', 'V'],
  ['Q', 'H', 'R', 'D', 'V', 'F', 'Z', 'G'],
  ['H', 'G', 'D', 'F', 'N'],
  ['N', 'F', 'Q'],
  ['D', 'Q', 'V', 'Z', 'F', 'B', 'T'],
  ['Q', 'M', 'T', 'Z', 'D', 'V', 'S', 'H'],
  ['M', 'G', 'F', 'P', 'N', 'Q'],
  ['B', 'W', 'R', 'M']
]
const example1 = [
  ['Z', 'N'],
  ['M', 'C', 'D'],
  ['P']
]

function part1(input) {
   input.forEach((i) => {
    const [num, origin, dest] = i;
    let crates = example[origin-1].splice(-(num));
    example[dest-1] = [...example[dest-1], ...crates.reverse()]
  })
  return example.map((e) => e[e.length-1]).join('')
}

function part2(input) {
   input.forEach((i) => {
    const [num, origin, dest] = i;
    let crates = example[origin-1].splice(-(num));
    example[dest-1] = [...example[dest-1], ...crates]
  })
  return example.map((e) => e[e.length-1]).join('')
}

fs.readFile('data.txt', 'utf8', (error, data) => {
  const results = [];
  const n = data.split('\n').map((e) => e.split(' '))

  const r = n.reduce((acc, val) => {
    const res = val.map((v) => parseInt(v)).filter((u) => !isNaN(u))
    if(res.length) acc.push(res)
    return acc;
  }, [])
//  console.log(part1(r))
  console.log(part2(r))

})

