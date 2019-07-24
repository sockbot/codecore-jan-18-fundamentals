const mom = {
  name: "Madonna",
  age: 65,
  baby: {
    name: "Lordes",
    age: 20,
  }
}

// What's Madonna's baby's name?
mom.baby.name;
console.log(`Madonna's baby's name is ${mom.baby.name}.`);

// Madonna's kids:

let kids = [
  { name: "Lordes", age: 20 },
  { name: "Jacob", age: 39 },
  { name: "Jason", age: 21 },
  { name: "Tam", age: 35 },
  { name: "Steve", age: 30 },
]

// what is the name of the 1st kid on the list
kids[0].name;

// what is the age of the last kid on the list
kids[kids.length-1].age;
