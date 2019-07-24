// CodeCore Fundamentals Jan 2018 cohort
// Prime numbers
// by Andrew Chan andrew@andrewchan.ca

// Ask the user for a number x and then print the first x prime numbers

let primesWanted = parseInt(prompt('How many prime numbers do you want?'));
let currentNum = 2; // counter for checking all numbers, 1 is not prime so start at 2
let primeCount = 0;

const isPrime = (n) => { // based on pseudocode from wikipedia
  if (n <= 1) {
    return false;
  } else if (n <= 3) {
    return true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i+2) === 0) {
      return false;
    } else
    i = i + 6;
  }
  return true;
}

while (primeCount < primesWanted) {
  if (isPrime(currentNum)) { // if prime, log to console, check next number and increment primeCount
    console.log(currentNum);
    currentNum++;
    primeCount++;
  } else { // otherwise just check next number
    currentNum++;
  }
}
