const Cookie = require('./cookie.js')

class Oreo extends Cookie {
  constructor(sugar, flour, filling) {
    super(sugar, flour); // super allows you to call the same method from your ancestor
    this.filling = filling;
  }
  dip() { console.log("Dip in milk") }
}

module.exports = Oreo; // allows another .js file to reference this file
