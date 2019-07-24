class Cookie {
  constructor(sugar, flour) {
    this.sugar = sugar;
    this.flour = flour;
  }
  bake() { console.log("baking the cookie") }
  eat() { console.log("eating the cookie") }
}

// module.exports
module.exports = Cookie;
