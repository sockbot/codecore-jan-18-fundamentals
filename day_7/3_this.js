const car = {
  speed: 50,
  drive() {
    console.log(`I am driving at ${this.speed}km/h.`);
  }
}

$('#orange-container').fadeOut(1000, function() {
  $(this).fadeIn();
});

// $(document)
// $(this)
// $('#orange-container')
// fadeOut(), then remove object
$('.shape').click(function() {
  $(this).fadeOut(1000, $(this).remove);
})

$('.shape').mousedown(function() {
  console.log("Mouse down");
})

// mousedown()
// keydown()
// keyup()
// keypress()
