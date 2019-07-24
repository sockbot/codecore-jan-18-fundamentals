$(function() {
  // Write jQuery Code that reproduces the following: http://jquery-drills.herokuapp.com/coffee/exercise_1
  $('.primary').mousedown(function() {
    if ($('.primary').hasClass('danger')) { // if button has danger class, change colour to blue
      $(this).css({
        'background-color': '#428bca',
        'border-color': '#285e8e'
      });
    } else { // else change colour to red
      $(this).css({
        'background-color': '#d2322d',
        'border-color': '#ac2925'
      });
    }
    $(this).toggleClass('danger'); // toggle danger class on click
  });

  // http://jquery-drills.herokuapp.com/exercise_4
  $('#email-submit input[type=button]').click(function() {
    // add fields to <p> tags, set display: show;
    // console.log('test');
    $('#first-name').show().html(`First Name: ${$('#field1').val()}`);
    $('#last-name').show().html(`Last Name: ${$('#field2').val()}`);
    $('#email').show().html(`Email: ${$('#field3').val()}`);
  });

  // [Stretch]: Finish this one as well: http://jquery-drills.herokuapp.com/coffee/exercise_3
  // on key up, replace contents of text area with whatever is in the text field
  $('#input-form').on('keyup', function(event) {
    let inputText = $('#input-text:text').val();
    console.log(inputText);
    $('#output-text').show().html(inputText);
  });

  $('#input-form').submit(function(event) {
    event.preventDefault();
  })
});
