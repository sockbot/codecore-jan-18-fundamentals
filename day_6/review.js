function running() {
  // 'this' is a relative reference, it asks who was the object who called this method?
  console.log('I am running using the art asset ' + this.asset);
}

// object + properties + functionality
const mario = {
  // property: value
  asset: "mario.jpg",
  age: 40,
  favouriteColour: "red",
  profession: "plumber",
  // behaviour, abilities
  // method - a function that belongs to an object or class
  run: running,
  swim(){ console.log('swim')}
};

const luigi = {
  // property: value
  asset: "luigi.jpg",
  age: 38,
  favouriteColour: "red",
  profession: "plumber",
  // behaviour, abilities
  // method - a function that belongs to an object or class
  run: running,
  swim(){ console.log('swim')}
};

mario.run();
mario.swim();

luigi.run();
luigi.swim();

// // a function that has no name is called an anonymous function
// function() {
//   console.log('Hi');
// }

// // function expression
// let sayHi = function() {
//   console.log('Hi');
// };

// class descirbes an object

class Human {
  // this is the first method that is executed when an object is instantiated
  constructor(name, age) {
    console.log('Am I in here?');
    this.name = name;
    this.age = age;
  }
};

const man = new Human('Jacob', 39);
const woman = new Human('Julia', 38);

// higher order function
// a function that takes in a function as an argument
// or a function that returns a function
function sayHello() {
  console.log('Hi');
}
function sayGoodbye() {
  console.log('Bye');
}

// runThree is a higher order function because it takes a function as an argument
function runThree(fn) {
  fn();
  fn();
  fn();
}

runThree(sayHello);
runThree(mario.run);

// built-in higher order functions
// setTimeout(fn, delay);
// setTimeout(sayHello, 1001);
// setTimeout(sayGoodbye, 1000);

// let sayHola = function() {
//   console.log('ciao')
// }
// setInterval(function() {
//   console.log('ciao')
// }, 1000);

let counter = 0;
let intervalId = setInterval(function() {
  counter++;
  console.log(counter);
  if (counter >= 10) {
    clearInterval(intervalId);
  }
}, 1000);


// mapping
let numbers = [1,2,3,4,5];
// square mapping
// [1,4,9,16,25]

function square(number) {
  return number * number;
}

square(10); // 100

function mapping(array, fn) {
  let results = [];
  for (let element of array) {
    results.push( fn( element ) );
  }
  return results;
}

mapping(numbers, square);
