// a function that is associated with an obejct or a class
// in an array, we can call the push() pop() or sort() method
// let shoppingList = new Array();
// or
let shoppingList = [];
shoppingList.push("butter"); // push() is a method that adds an item to the end of my shoppingList

// video games
// characters have functionality or behaviour

// mario bros.
// mario - has the ability to move, jump, duck, swim, fly, ride on a dinosaur
// const mario = new Object();

const mario = {
  // describing mario's properties
  profession: "plumber",
  age: 40,
  favouriteFood: "pizza",
  moustache: true,
  // describe mario's functionality or behaviour
  // mario can ...
  // we can only call this run function with context to mario
  run: function(){
    console.log("Mario is running");
    return;
  },
  // jump:,
  // swim:,
};

mario.age; // 40
mario.profession; // "plumber"
mario.run; // => [Function]
mario.run(); // execute the function

// anonymous function - a function that has no name
// function(){};

// function declaration
function add(number1, number2) {
  return number1 + number2;
} // puts the add function into the global namespace

// function expression
let add = function() {}; // we can control the scope of the variable
