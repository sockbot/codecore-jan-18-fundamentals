// Write a function that prompts the user to enter a sentence and then
// return an object whose keys are the letter and values are the number
// of occurrences of that letter, for example, if the user enters hello
// world, it will return: {h: 1, e: 1, l: 3, o: 2, w: 1, d: 1}

// By Andrew Chan Jan 2018

const inputSentence = prompt('Enter a sentence:');

function letterFrequency(sentence) {
// Split sentence into an array of letters, then return an object created by
// iterating through each element in the array, creating a new element for each
// letter
  let sentenceArray = sentence.split('');
  let frequencyObj = {};
  for (let letter of sentenceArray) {
    if (frequencyObj[letter] === undefined) { // if letter does not yet exist in the object
      frequencyObj[letter] = 1; // then create key and set value to 1
    } else {
      frequencyObj[letter]++; // increment the value of the letter if it already exists
    }
  }
  return frequencyObj;
}

letterFrequency(inputSentence);
