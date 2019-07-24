// Write some code that writes "1" to the console, then 1 second later writes "2" to the console, then 2 seconds after that writes "3" to the console, ..., until it gets to "10".

// let counter = 0;
// let id = setInterval(function() {
//   console.log(counter+1);
//   counter++;
//   if (counter >= 10) {
//     clearInterval(id);
//   }
// }, 1000);


// function countUp() {
//   for (let i = 0; i < 10; i++) {
//     setTimeout(function() {
//       console.log(i+1);
//     }, 1000 * i);
//   }
// }


function countUp() {
  for (let i = 0; i < 10; i++) {
    setTimeout(logger.bind(null, i+1), 1000 * i);
  }
}

function logger(num) {
  console.log(num);
}

countUp();
