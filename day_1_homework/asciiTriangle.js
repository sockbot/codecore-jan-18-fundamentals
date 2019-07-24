// CodeCore Fundamentals Jan 2018 cohort
// ASCII Triangle
// by Andrew Chan andrew@andrewchan.ca

// create a string with the number of Os needed
// draw the string from top to bottom with the number of spacers in front of each row

const base = parseInt(prompt('How wide is the triangle?'));
let row = '';

// the number of Os in a triangle of base n is n plus the sum of all integers less than n: f(n) = n + (n-1)n/2
for (i = 0; i < base + (base-1)*base/2; i++) {
  row = row.concat('O ')
}

for (i = 1; i < base+1; i++) { // draw the triangle one row at a time, top to bottom
  let drawRow = ''; // reinitialize the drawRow at each iteration

  for (k = 0; k < base-i; k++) { // but before adding characters, add spaces based on which row is being drawn. For row 0, count down from base-1 to 0; for row 1, count down from base-2 to 0, etc.
      drawRow = drawRow.concat('X');
  }

  for (j = 0; j < i*2; j++) { // 1st row draw 1 char, 2nd row draw 2 chars, etc.
    drawRow = drawRow.concat(row.charAt(j)); // add two characters to the drawRow, 'O ' for each iteration
  }
  console.log(drawRow);
}

// how to do this without storing 'O ' in 'row'?
