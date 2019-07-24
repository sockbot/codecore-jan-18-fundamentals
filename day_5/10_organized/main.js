// import .js from another file
const Cookie = require('./cookie.js');
const Oreo = require('./oreo.js');

let lowFat = new Cookie(0, 5);
lowFat.bake();
//lowFat.dip(); // throws an error method is not found-- method doesn't exist in Cookie class
lowFat.eat();

let oreo = new Oreo(35, 25, "vanilla");
oreo.bake();
oreo.dip();
oreo.eat();
