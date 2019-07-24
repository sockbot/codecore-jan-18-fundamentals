class Animal {
  constructor(numOfLegs) {
    this.numOfLegs = numOfLegs;
    this.warmBlooded = true;
    this.name = 'Spot';
    this.age = 2;
  }
}

let dog = new Animal(4);
dog.name;
dog.numOfLegs; // 4
