// syntax sugar

const yoshi = {
  // properties of yoshi
  type: "dinosaur",
  colour: "green",
  longTongue: true,
  // methods
  hop: function() { console.log("I am hopping...") },
  // cut out ": function"
  attack() { console.log("Attack with the tongue....") },
}

console.log(yoshi.colour);
yoshi.hop();
yoshi.attack();
