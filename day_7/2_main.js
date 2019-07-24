// window.onLoad () {}
// document.addEventListener()
// document.addEventListener(
//   "DOMContentLoaded",
//   function() {
//     //document.write("Jacob was here"); // stomp over document
//
//     // change the content of a tag:
//     // 1. select it
//     // 2. edit its inner html
//     // document.getElementByTagName();
//     // document.getElementByClass();
//     const element = document.getElementById("title"); // returns <h1 id="title">Jason is here</h1>
//
//     element.innerHTML; // returns Jason is here
//     element.innerHTML = "Tyler was here" // change to Tyler was here
//   }
// );

// ^^^^ same thing as above in jQuery
$(function(){
  $('#title').html("Tyler was here");
});

$(); // check to see if jQuery is loaded

// how do we check in jQuery if a page is loaded?
$(document).ready(function() {
  $('#title').html(); // get (no arguments)
  $('#title').html('Matt was here'); // set
  $('#title').css("color", "pink");

}); // $ selects document, listen for ready
