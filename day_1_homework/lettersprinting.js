// CodeCore Fundamentals Jan 2018 cohort
// by Andrew Chan andrew@andrewchan.ca

let letter = 97 // CharCode 97 is letter 'a'
let printLetters = String.fromCharCode(letter); // initialize printed letters to a single letter 'a'. This string will hold all of the letters to be printed
let addLetter = String.fromCharCode(letter); // initialize a string with a single letter 'a'. This should always hold only a single character.

for (let x = 0; x <= 25; x++) { // loop from 0-25 for each letter of the alphabet

  for (let y = 0; y < x; y++) { // for each letter, add a single letter to the printed string (add 0 for first iteration)
    printLetters = printLetters + addLetter;
  }

  console.log(printLetters); // print the entire string

  letter = letter + 1; // change to next letter in alphabet
  printLetters = String.fromCharCode(letter);
  addLetter = String.fromCharCode(letter);
}

// how to do this using only one variable to hold the string?
