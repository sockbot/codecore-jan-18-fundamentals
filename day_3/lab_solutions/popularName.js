// Given an object that looks like:
//
// names = { mike: 2, john: 3, jen: 5, eli: 1}
// Write a function that takes an object above and returns a string
// noting the most popular name. It should return a string that looks like
// the most popular name is jen

let names = {
  mike: 2,
  john: 3,
  jen: 5,
  eli: 1
}

function mostPopular(nameList) {
  let mostPopularName = ''; // initialize mostPopularName to first item in object
  let occurences = 0;
  for (const key in nameList) {
    if (nameList[key] > occurences) {
      mostPopularName = key;
      occurences = nameList[key]
    }
  } return mostPopularName;
}

console.log(`The most popular name is ${mostPopular(names)}`);
