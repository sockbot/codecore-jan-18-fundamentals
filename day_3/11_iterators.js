// loop, repeat
// while
// for
// do... while

// arrays

let shoppingCart = ['USB-C Cable', 'Kindle', 'Pillow'];

shoppingCart[0];
shoppingCart[1];
shoppingCart[2];

// for..of is specifically for arrays
// for (let element of array) {
//
// }

for (let item of shoppingCart) {
  console.log(`You have placed a ${item} into your shoppingCart.`)
}

let sales = [19.99, 349.00, 30.00];
let total = 0;

for (let sale of sales) {
  total += sale;  // total = total + sale
}
console.log(`The total cost of your shopping cart is $${total}.`)

// complex array: check for win condition
let tictactoe = [
  ['X', 'X', 'X'],
  ['X', 'O', 'O'],
  ['O', 'O', 'X'],
]

// flattening a tictactoe square
for (let row of tictactoe) {
  for (let col of row) {
    console.log(col);
  }
}

// flattening a cube
// for (let face of cube) {
//   for (let row of face) {
//     for (let col of row) {
//
//     }
//   }
// }
