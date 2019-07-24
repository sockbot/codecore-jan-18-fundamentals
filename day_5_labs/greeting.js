// Create two person objects with an "age" attribute and a "name" attribute. Then, add a "greet" method to both people. The method should accept a person as a parameter and outputs the following:
//
// "Hello, [name1]. I am [name2]. Pleased to meet you." if person1 is older than person2.
//
// "Yo [name2]. I'm totally [name1]. Wsup!." if person2 is older than person1.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet(person) {
    if (person.age > this.age) {
      console.log(`Hello, ${person.name}. I am ${this.name}. Pleased to meet you.`);
    } else if (this.age > person.age) {
      console.log(`Yo ${person.name}. I'm totally ${this.name}. Wsup!.`)
    } else if (this.age === person.age) {
      console.log("Ages are equal")
    } else {
      console.log("error");
    }
  }
}

let personAlice = new Person('Alice', 25);
let personBob = new Person('Bob', 40);

personAlice.greet(personBob);
personBob.greet(personAlice);
