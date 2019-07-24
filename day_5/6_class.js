// examples of classifications? categories

// income brackets
// human class
// dog breeds
// cars, SUV, sedans, hatch
// houses
// pepper shaker class of pepper

// house can hold people
// 8-12' per story
// 5'7" average human

// can a blueprint hold people?
// can you stay warm in a blueprint
// the blueprint describes what the house should be
// the blueprint is the plans for the house
// we can reuse the blueprint to make many houses
// we can reuse classes to make objects

class House {
  // reserved keyword in JavaScript
  // constructor method - this is the first method that is run when we make an object from this class
  constructor(colour) {
    // property a.k.a. instance variable of the class house
    this.colour = colour;
    console.log(`Inside the constructor method of a ${this.colour} house`);
  }
}

// "new" keyword allows us to make an instance of a class. construct an object from a class
let bungalow = new House("green"); // create a new object of class House
let teepee = new House("grey");
let mansion = new House("gold");
let condo = new House("blue");

let shoppingList = new Array(); // this is creating a new object of class Array
const car = new Object();
