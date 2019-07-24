// two dimensional array



// _|_|_
// _|_|_
//  |_|

// first row
// _|_|_

let row1 = [null,null,null];
let row2 = [null,null,null];
let row3 = [null,null,null];

// let tictactoe = [
//   row1,
//   row2,
//   row3
// ];

let tictactoe = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

// 2 indexes
tictactoe[0]; // the entire first row
tictactoe[1][1] = 'X'; // the 2nd row, 2nd column

console.log(tictactoe);

// three dimensions
// [ [ [] ] ]

// rubix cube
// has 6 sides
//    _
//  _|_|_
// |_|_|_|
//   |_|
//   |_|

// each side has a 3x3 grid
// _|_|_
// _|_|_
//  | |

let rubixCube = [];
let side1 = [];
let side2 = [];
let side3 = [];
let side4 = [];
let side5 = [];
let side6 = [];
let row1 = [];
let row2 = [];
let row3 = [];

rubixCube[side][row][col] = 'blue';
