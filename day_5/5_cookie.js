// cookies!!!

// shared methods
let bake = function() {
  console.log(`I am baking a cookie with ${this.sugar}g of sugar`);
}

let eat = function() {
  console.log("I am eating a cookie");
}
const oatmeal = {
  sugar: 10,
  flour: 10,
  bake: bake,
};

const chocolateChip = {
  sugar: 20,
  flour: 15,
  bake: bake,
};

const oreo = {
  sugar: 35,
  flour: 20,
  bake: bake,
};

bake();
oreo.bake();
chocolateChip.bake();
oatmeal.bake();
