const fs = require('fs');

function part1(input) {
  const finalResult = [];

}
function isDir(val) {
  return val === 'dir';
}
fs.readFile('data.txt', 'utf8', (error, data) => {
  const result = data.split('\n');
  const tree = [];
  let counter = 2;
  let cursor = 0;
  while(counter < result.length - 2) {
    let split = result[counter].split(' ')
    console.log(JSON.stringify(tree, null, 2));
    switch(split[0]) {
      case 'dir':
        tree[cursor] = {value: 0, name: split[1], children: []}
        counter++;
        break;
      case '$':
        if(split[1] === 'cd') {
          if(split[2] === '..') {
            cursor--;
            counter++;
            break;
          } else {
            cursor++;
            counter++;
            break;
          }
        } else {
          counter++;
          break;
        }
      default:
        if(tree[cursor]) {
          tree[cursor].children.push({value: parseInt(split[0]), name: split[1], children: []})
        }
        counter++;
        break;
    }
  }
  return tree;
  console.log({result})
})
