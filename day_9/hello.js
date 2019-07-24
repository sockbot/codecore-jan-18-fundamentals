const seconds = 10;
let count = 0;
const interval = setInterval(function() {
  if (count < seconds) {
    console.log('Hello ' + count);
  } else {
    clearInterval(interval);
  }
  count++;
}, 1000);
