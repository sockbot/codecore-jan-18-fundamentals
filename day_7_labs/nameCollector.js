$(document).ready(function(){
  $('form#name-collector').on('submit', function(event){
    event.preventDefault();
    let newName = $('input#newName').val(); // getter
    $('table#name-table').append("<tr><td>" + newName + "</td></tr>") // setter

    // clear the form and refocus onto the text field
    // $('input#newName').val("")
    $('input[id=newName]').val("");
    $('input#newName').focus();
  })
});
