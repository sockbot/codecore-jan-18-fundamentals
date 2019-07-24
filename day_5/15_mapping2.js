// mapping again...
// [1, 2, 3].forEach( function(element) {
//   console.log(element * 2);
// });

// higher order functions built into javascript
// timing functions

// setInterval(fn, delay); // will continue to call
// setTimeout(fn, delay); // will only call once

// delay is in milliseconds
// function sayHi() {
//   console.log("Hi!");
// }

// setTimeout(sayHi, 1000);
// setTimeout( function() { // better do to this so not to pollute global namespace
//   console.log("Hi!");
// }, 1000);

// setInterval( function() {
//   console.log("Hi!");
// }, 1000);

let counter = 0; // why doesn't this work inside the anon function?
let id = setInterval( function() {
  console.log("Hi!");
  counter++;
  if (counter > 10) {
    clearInterval(id);
  }
}, 1000);

// the order is
setTimeout(function() { console.log("fries")}, 500);
setTimeout(function() { console.log("milkshake")}, 1000);
setTimeout(function() { console.log("steak")}, 3000);
