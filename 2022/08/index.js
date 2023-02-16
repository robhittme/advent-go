const fs = require('fs')

/*
 * [
  [ '3', '0', '3', '7', '3' ],
  [ '2', '5', '5', '1', '2' ],
  [ '6', '5', '3', '3', '2' ],
  [ '3', '3', '5', '4', '9' ],
  [ '3', '5', '3', '9', '0' ]
]
*/

function isVisible(arr, col, row) {
    if(
      arr[col][row] > arr[col][row-1] &&
      arr[col][row] > arr[col-1][row] &&
      arr[col][row] > arr[col][row+1] &&
      arr[col][row] > arr[col+1][row]
    ) {
     console.log(arr[col][row])
     return true;
    }
     console.log(arr[col][row])
   return false;


}
function part1(arr) {
  let count = arr.length + arr[0].length;
  let col = 1;
  let row = 1;
  while(col < arr.length-1 || row < arr.length-1){
  for(let i = 0; i<arr.length-2;i++) {
    if(isVisible(arr, col+i, row)) {
      count += arr[col+i][row]
    }
  }
  col++
  for(let i = 0; i<arr.length-2;i++) {
    if(isVisible(arr, col, row+i)) {
      count += arr[col][row+i]
    }
  }
  row++
}
  return count;
}

fs.readFile('data.txt', 'utf8', (error, data) => {
  const arr = data.split('\n')
  const map = arr.map((a) => a.split(''))
  console.log(part1(map.slice(0, -1)))
})
