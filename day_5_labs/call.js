// Write a function named "call" which takes a number and two functions as parameters, and returns the result of calling the two functions on the number.
//
// const doubleIt = function (x) {
//  return 2 * x;
// }
//
// const addOne = function(x) {
//   return x + 1;
// }
//
// // Write a function so you can use:
// call(5, doubleIt, addOne); // => 11

function call(number, fn1, fn2) {
  return fn2(fn1(number));
}

const doubleIt = function(x) {
 return 2 * x;
}

const addOne = function(x) {
  return x + 1;
}

console.log(call(5, doubleIt, addOne));
