// higher order functions
// a function that takes in a function as an argument OR
// returns a functions

// function(fn) {}
// function() { return function(){} }

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// calc is a higher order function becuase it takes in a function as an argument
function calc(operation, number1, number2) {
  return operation(number1, number2);
}

calc(add, 5, 6); // add(5,6) => 11
