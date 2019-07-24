// jQuery selector methods

// use attr() to get the href value of the first anchor tag
$('a').attr('href');

// set the href values for all the anchor tags
$('a').attr('href', 'http://codecore.ca');

// use eq() to select a single element
$('a').eq(0).attr('href', 'http://codecore.ca');

// use addClass() add highlight class to all shapes
$('.shape').addClass('highlight');

// toggleClass()
$('.shape').toggleClass('highlight');

// removeClass()
$('.shape').removeClass('highlight');

// remove all blue shapes
$('.blue.shape').remove();

// hide all blue shapes (display: none)
// opposite of .show()
$('.blue.shape').hide();

// hide all the shapes in the orange container
$('#orange-container .shape').children().hide();

// remove all the small red circles
$('.small.red.circle').remove();

// set HTML contents of reset buttton
$('#reset').html("Nuke 'em");

// get HTML contents of all links
$('a').eq(0).html();
$('a').eq(1).html();
$('a').eq(2).html();
$('a').eq(3).html(); // etc

// fadeOut() then fadeIn() orange container
$('#orange-container').fadeOut(2000, function() {
  $('#orange-container').fadeIn(2000);
});
