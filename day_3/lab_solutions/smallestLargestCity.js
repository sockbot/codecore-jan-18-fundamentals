// Write a function that takes an object that looks like:
//
// cities = { vancouver: 603502, burnaby: 223220, langley: 104177 }
// and prints if the city is large (more than 150,000) or small (otherwise).
// The printout should look something like: vancouver is a large city
//
// [Stretch] Print the city name capitalized


let cities = {
  vancouver: 603502,
  burnaby: 223220,
  langley: 104177
}

function capitalizeFirst(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function citySize(cities) {
  for (const property in cities) {
    if (cities[property] > 150000) {
      console.log(`${capitalizeFirst(property)} is a large city.`)
    } else {
      console.log(`${capitalizeFirst(property)} is a small city.`)
    }
  } return;
}

citySize(cities);
