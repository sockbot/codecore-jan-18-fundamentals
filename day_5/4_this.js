// this - what is this?
// this is a question: who are we, where are we in? who called us? who do we belong to?

const car = {
  // properties
  make: "Porsche",
  model: "Boxster",
  capacity: 2,
  speed: 50,
  // methods
  drive () {
    console.log(`I'm driving at ${ this.speed }km/h`);
  },
  stop() {
    console.log("I'm stopping, my speed is now 0km/h");
  },
  park() {
    console.log("I'm parking, my speed is 5km/h");
  }
};

// test
console.log(car.make);
console.log(car.model);
console.log(car.capacity);
console.log(car.speed);
car.drive();
car.speed = 20;
car.drive();
