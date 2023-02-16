const fs = require('fs');

function part1(input) {
  let floor = 0;
  for(let i = 0; i < input.length; i++) {
    if(input[i] === '(') floor++;
    if(input[i] === ')') floor--;
    if(floor === -1) return i;
  }
  return floor;
}


fs.readFile('data.txt', 'utf8', (error, data) => {
  const split = data.split('');
  console.log(part1(split))
})
