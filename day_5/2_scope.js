// scope - the reach of a variable or function

let jumping = function() {
  console.log("I am jumping...");
};

const mario = {
  profession: "plumber",
  age: 40,
  favouriteFood: "pizza",
  asset: "mario.jpg",
  // methods
  run: running, // reference to a function
  jump: jumping,
};

const luigi = {
  profession: "plubmer",
  age: 38,
  favouriteFood: "sushi",
  asset: "luigi.jpg",
  // methods
  run: running,
  jump: jumping,
};

//shared methods
// this running function is put into the global namespace
function running() {
  console.log("start run animation");
  console.log("move along the x axis");
  console.log("check for collision");
  console.log("update timer");
  console.log("update score");
};

mario.run();
luigi.run();
mario.jump();
luigi.jump();
