// good morning
// 1,2,3,4,5,6,7,8,9,10
// 1,3,5,7,9 odd numbers
// 2,4,6,8,10 even numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1 % 2 === 0; // true even, false odd

// if (numbers[0] % 2 === 0) {
//   console.log('that number is even');
// } else {
//   console.log('that number is odd');
// }

// turn this ^^^^ into a function
// function isEven(number) {
//   if (number % 2 === 0) {
//     console.log('that number is even');
//   } else {
//     console.log('that number is odd');
//   }
// }

function isEven(number) {
  // console.log('even');
  return number % 2 === 0;
}

function isOdd(number) {
  // console.log('odd');
  return number % 2 !== 0;
}

isEven(numbers[0]);
isEven(numbers[1]);
isEven(numbers[2]);

function pluck(fn, array) {
  let results = [];
  for (let element of array) {
    fn(element) ? results.push(element) : false;
  }
  console.log(results);
  return results;
}
pluck(isEven, numbers);
pluck(isOdd, numbers);
