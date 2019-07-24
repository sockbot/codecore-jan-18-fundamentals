$('#form-1').submit(function(event) {
  event.preventDefault();
  const newColor = $('#form-1 input[type=text]').val();
  $('.circle').css('background-color', newColor);
})
