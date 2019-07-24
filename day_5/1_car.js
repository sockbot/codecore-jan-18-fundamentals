// make me a car object
// give it 3 properties: make, model, capacity
// give it 3 methods: park, drive, stop
// test out your methods by console.log a message in each
// and executing them individually

// object literal notation
const car = {
  make: "Toyota",
  model: "MR2",
  capacity: 2,
  park: function() {
    console.log(`${this.make} ${this.model} is parked.`);
    return;
  },
  drive: function() {
    console.log(`${this.make} ${this.model} is driving.`);
    return;
  },
  stop: function() {
    console.log(`${this.make} ${this.model} is stopped.`);
    return;
  }
};
car.park();
car.drive();
car.stop();

// alternative object notation
const truck = new Object();
truck.make = "Ford";
truck.model = "Ranger";
truck.capacity = 4;
truck.park = function() {
  console.log(`${this.make} ${this.model} is parked.`);
  return;
};
truck.park(); // execute park() function
