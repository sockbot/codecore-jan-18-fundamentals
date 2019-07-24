// CodeCore Fundamentals Jan 2018 cohort
// First Sunday on Jan 1
// by Andrew Chan andrew@andrewchan.ca

// Write a JavaScript program to find the first occurrence of the 1st of January being a Sunday between 2014 and 2050. Modified to return all Sunday January 1st between 2014 and 2050.

let startYear = 2014;
let endYear = 2050;
let currentYear = new Date(startYear, 0, 1);

for (i = startYear; i <= endYear; i++) {
  if (currentYear.getDay() === 0) { // 0 is Sunday
    console.log(i); // log year to console, and increment year
    currentYear = new Date(i+1, 0, 1);
  } else { // increment year and test again
    currentYear = new Date(i+1, 0, 1);
  }
}
