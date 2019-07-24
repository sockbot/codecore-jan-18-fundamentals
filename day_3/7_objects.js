// objects - things we can sense
// touch, taste, hear, see, smell

// ikea table is flat, shiny, light
// computer has a screen, keyboard, power bar
// human has a name, age, hair, eyes

// objects - fundamental building blocks behind anything meaningful in programming

// const car = new Object(); // object constructor
// const car = {}; // object initializer
// const - the memory location of our object should never change
// object has properties

const car = {
  make: 'Toyota', // property: value
  model: 'MR2',
  year: 1989
};

car.capacity = 2; // dot operator allows us to create properties after object is created
car.colour = 'white';

console.log(car);

const human = {
  name: 'Andy',
  age: 37
}

human.hairColour = 'black';
// human.hair colour = 'black'; // will throw an error

// arrays extend the object class
// array is built upon object
// human = {};
// another way to create properties in our object is to use the [] syntax;
human['hairColour'] = 'black';
human[0] = 'something???';

console.log(human);

// an array is just an object with the properties as index values
shoppingList = {
  0: 'milk',
  1: 'cheese',
  2: 'eggs',
  3: 'bread'
}

const me = {
  name: 'Andy',
  age: 37,
  hobby: 'Games',
  hairColour: 'black',
  skill: 'programming'
};

const you = new Object();
you.hasRib = true;
you.name = 'Ada';
let property = 'skill';
you[property] = 'typing';

console.log(me);
console.log(you);
