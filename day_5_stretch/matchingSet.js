// Matching Sub-Set
// Creating a function, matchingSet, that takes two arrays as arguments. It should return an array of all the elements that are shared between the two arrays (without duplicates). Effectively, it should return the intersection of both arrays.
// Example:
// Find Duplicate Values
// Write a function, findDuplicates, that takes an array of strings and/or integers, values. Return a new array containing all the values are duplicated in the array.
// ￼matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7]) // returns [3, 4]
// ￼matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y']) // returns ['j', 'n']

function matchingSet(sourceArray, targetArray) {
  if (Array.isArray(sourceArray) && Array.isArray(targetArray)) {
    let matchingElements = [];
    for (let i = 0; i < sourceArray.length; i++) {
      if (targetArray.includes(sourceArray[i])) {
        matchingElements.push(sourceArray[i]);
      }
    }
    console.log(matchingElements);
    return matchingElements;
  } else {
    console.log('matchingSet must take arrays as arguments.');
    return;
  }
}

matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7]) // returns [3, 4]
matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y']) // returns ['j', 'n']
