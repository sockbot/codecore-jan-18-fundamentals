// CodeCore Fundamentals Jan 2018 cohort
// Palindrome
// by Andrew Chan andrew@andrewchan.ca

// Write a piece of code that checks whether a passed String is a palindrome or not.

let isPalindrome = false;

let string = prompt('Give me a string to check if it is a palindrome.');
string = string.toLowerCase(); // change to lowercase so we can use char codes to compare

for (i = 0; i < string.length; i++) {
  if (string.charAt(i) === string.charAt(string.length-1-i)) {
    isPalindrome = true;
  } else {
    isPalindrome = false;
    break;  // any better way to write this without using break?
  }
}

console.log(isPalindrome);
