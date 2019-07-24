// mapping
// higher order functionality and data structures

doubleIt(10); // 20
doubleIt(40); // 80

function doubleIt(number) {
  return number * 2;
}

let numbers = [11, 34, 99];

function doubleEverything(fn, array) {
  let results = [];
  for (let element of array) {
    results.push(fn(element));
  }
  return results;
}

doubleEverything(doubleIt, numbers); // expected to return [22, 68, 198]
