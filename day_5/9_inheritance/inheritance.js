// inheritance
// animal may be born with some instincts
// extends
// cookies
class Cookie {
  constructor(sugar, flour) {
    this.sugar = sugar;
    this.flour = flour;
  }
  bake() { console.log("baking the cookie") }
  eat() { console.log("eating the cookie") }
}

class Oreo extends Cookie {
  constructor(sugar, flour, filling) {
    super(sugar, flour); // super allows you to call the same method from your ancestor
    this.filling = filling;
  }
  dip() { console.log("Dip in milk") }
}

let lowFat = new Cookie(0, 5);
lowFat.bake();
//lowFat.dip(); // throws an error method is not found-- method doesn't exist in Cookie class
lowFat.eat();

let oreo = new Oreo(35, 25, "vanilla");
oreo.bake();
oreo.dip();
oreo.eat();
