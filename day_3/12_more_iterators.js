// step through an object
// for...in

const me = {
  name: 'Andy',
  age: 37
}

for (let property in me) {
  console.log(`The property ${property} is ${me[property]}.`);
  console.log(me[property]);
  // let customProperty = 'name'
  // me[customProperty];
  // me['name']; // 'Andy'
}

let mom = {
  name: 'Julia',
  baby: {
    name: 'Sienna'
  }
}

mom.name;
mom.baby.name;

for (let property in mom) {
  let value = mom[property];

  if (typeof value == "object") {
    for (let property in value) {
      console.log(value[property] ); // baby's name
    }
  // } else if (Array.isArray(value)) {
  //   for ( of ) {}
  //
  } else {
    console.log( value ); // mom's name
  }

  // for (let innerProperty in property) {
  //   console.log(property[ innerProperty ]);
  // }
}
