// Write a function that takes in an array and returns another whose
// first element is the smallest number and whose second element
// is the largest number.
//
// For example if you call the function with array [3,64,3,56,34,12,5,0]
// you should get back an array [0, 64]

const numbersArray = [101,-83,3,64,3,56,34,12,5,0,102];

function smallestAndLargestNumber(numbers) {
  let smallest = numbers[0];
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > largest) {
      largest = numbers[i];
    } else if (numbers[i] < smallest) {
      smallest = numbers[i];
    } else {
      // do nothing, as the number is already equal to the smallest or largest
    }
  }
  return [smallest, largest];
}

function smallestAndLargestUsingSort(numbers) {
  numbers.sort(function(a, b) { return a - b; }); // why does this work?
  return [numbers[0], numbers[numbers.length-1]];
}

function sortUsingForOf(numbers) {
  let smallest = numbers[0];
  let largest = numbers[0];
  for (element of numbers) {
    if (element > largest) {
      largest = element;
    } else if (element < smallest) {
      smallest = element;
    } else {
      // do nothing, as the number is already equal to the smallest or largest
    }
  } return [smallest, largest];
}

console.log(smallestAndLargestNumber(numbersArray));
console.log(smallestAndLargestUsingSort(numbersArray));
console.log(sortUsingForOf(numbersArray));
