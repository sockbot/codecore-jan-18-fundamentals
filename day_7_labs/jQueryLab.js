// In the jQuery Lab: http://bit.ly/jquery-lab
//
// Do the following exercises:
//
// Part 1
// Select all red shapes inside the orange container
$('div#orange-container div.red.shape');

// Select all medium or small shapes inside the green container
$('#green-container .small, #green-container .medium');
// $('#green-container (.small,.medium)'); // doesn't work

// Select all shapes inside any container
$('.container .shape');

// Select all link tags
$('a');

// Select all the link tags inside an "li" tag
$('li a');

// Count the number of small blue circles
$('small.blue.circle').length;

// Part 2
// When 'button 1' is clicked, remove all shapes.
$('#button-1').mousedown(function(){
  $('.shape').remove();
})

// When 'button 2' is clicked, disable button 2. (Set the 'disabled' attribute to true)
$('#button-2').mousedown(function(){
  $('#button-2').attr('disabled', 'true');
})

// When 'button 3' is clicked, set the button message to "Button 3 was clicked"
$('#button-3').mousedown(function(){
  $('#button-message').text('Button 3 was clicked');
})

// Part 3
// When any button is clicked, set the button message to "Button [button id] was clicked"
$('.button').mousedown(function(){
  // console.log($(this).text());
  $('#button-message').text(`Button ${$(this).attr('id')} was clicked`);
})

$('.button').on('click', function(event) {
  $('#button-message').text(`Button ${event.currentTarget.id} was clicked`);
});
