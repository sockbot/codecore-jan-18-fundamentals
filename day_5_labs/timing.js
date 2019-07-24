// Change your page script to write to the page "Loading..." and then, 3 seconds later, "Hello, World!"
//
// Stretch: Make your page display "Ready...", then "Set...", then "Go!", one second after another.
//
// Make a counter using setInterval. Count from 1 up, every second.
//
// Stretch: Create two counters, one for even numbers and one for odd. Run them at the same time.
//
// Use setInterval to log '.' to the screen every 1 second. Stop after 10 seconds have passed.
//
// (Hint: Use setTimeout to stop things after 10 seconds)
//
// Stretch: Build a blast-off countdown using setInterval.
//
// 10 9 8 7 6 5 4 3 2 1 Blast Off!

//
// function helloWorld() {
//   console.log("Hello, World!");
// }
// function ready() {
//   console.log("Ready...");
// }
// function set() {
//   console.log("Set...");
// }
// function go() {
//   console.log("Go!");
// }
//
// console.log("Loading...");
// setTimeout(helloWorld, 3000);
//
// setTimeout(ready, 0);
// setTimeout(set, 1000);
// setTimeout(go, 2000);
// let i = 1;
// setInterval(function() {
//   console.log(i);
//   i++;
// }, i*1000);

// let oddCounter = 1;
// let evenCounter = 2;
// let id1 = setInterval(function() {
//   console.log(oddCounter);
//   oddCounter+=2;
//   if (oddCounter >= 10) {
//     clearInterval(id1);
//   }
// }, 1000)
//
// let id2 = setInterval(function() {
//   console.log(evenCounter);
//   evenCounter+=2;
//   if (oddCounter >= 10) {
//     clearInterval(id2);
//   }
// }, 1000)

// let id3Counter = 0
// let id3 = setInterval(function() {
//   console.log('.');
//   id3Counter++;
//   if (id3Counter >= 10) {
//     clearInterval(id3);
//   }
// }, 1000)

let id4Counter = 10;
let id4 = setInterval(function() {
  console.log(id4Counter);
  if (id4Counter <= 0) {
    clearInterval(id4);
    console.log('Blast off!!!')
  }
  id4Counter--;
}, 1000)
