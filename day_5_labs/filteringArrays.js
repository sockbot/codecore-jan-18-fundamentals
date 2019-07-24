// Part 1
// Write a function that takes a number and returns whether the number is positive or not.
//
// [Stretch]: return false if the parameter is not a number.
//
// Part 2
// Write a function called filter that takes two parameters, an array (a) and another function (fn). This function should return a new array containing all the items in a for which fn returns true. For example, you should be able to call it like this:
//
// filter([1,3,4], function(num){
//   return num > 2;
// });
// Test filter using the isPositive function you wrote above and the following array [-5, 0, 1, 'car'].
//
// [Stretch]: Afterwards, try to achieve the same results using the built in ES6 filter function or the lodash filter function.

function isPositive(num) {
  if (num > 0 && typeof num === 'number') {
    return true;
  } else {
    return false;
  }
}

function filter(array, fn) {
  let newArray = [];
  for (let element in array) {
    if (fn(array[element]) === true ){
      newArray.push(array[element]);
    }
  }
  console.log(newArray);
  return newArray;
}

filter([-5, 0, 1, 'car', true, 23, 2, -2, 0.3, -98], isPositive);

// isPositive('test');
// console.log(typeof 3);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof true);
// console.log(typeof 'true');
