// CodeCore Fundamentals Jan 2018 cohort
// Capitalize a string
// implement str.toUppercase() ?
// by Andrew Chan andrew@andrewchan.ca

const lowercaseString = prompt('Input a lowercase string');
let uppercaseString = '';
let storeLetter = '';

// for each character in the string of length x
// if it is an non-lower case char, directly copy to new string
// else change to upper case, then copy to new string
// then print new string to console

for (i = 0; i < lowercaseString.length; i++) {
  if (lowercaseString.charCodeAt(i) < 97 || lowercaseString.charCodeAt(i) > 122) { // chars 97 to 122 are lowercase chars; if outside this range copy directly to new string
    uppercaseString = uppercaseString.concat(lowercaseString.charAt(i)); // add the first char to the string; uppercase chars are 32 less than lower case.
  } else {
    storeLetter = String.fromCharCode(lowercaseString.charCodeAt(i)-32); // store the new uppercase letter into a variable
    uppercaseString = uppercaseString.concat(storeLetter); // concat the new letter to the final uppercase string
  }
}

console.log(uppercaseString);
