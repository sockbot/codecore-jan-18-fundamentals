// CodeCore Fundamentals Jan 2018 cohort
// Capitalize Even Letters
// by Andrew Chan andrew@andrewchan.ca

const inputString = prompt('Enter an input string');
let outputString = '';

for (i = 0; i < inputString.length; i++) {
  if (i % 2 === 0) {
    outputString = outputString.concat(inputString.charAt(i).toUpperCase());
  } else outputString = outputString.concat(inputString.charAt(i).toLowerCase())
}

console.log(outputString);
