function sayHi(name) {
  console.log(`Hello ${name}!`);
}

function repeatThree(fn, name) {
  fn(name);
  fn(name);
  fn(name);
}

function repeat(fn, name, count) {
  for (let i = 0; i < count; i++) {
    fn(name);
  }
}

// repeatThree(sayHi, "Jacob");
repeat(sayHi, "Jacob", 10);
