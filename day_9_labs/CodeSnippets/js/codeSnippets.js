const snippetsRef = firebase.database().ref('snippets');
let rubyCounter = 0;
let htmlCounter = 0;
let cssCounter = 0;
let jsCounter = 0;

snippetsRef.on('child_added', function(data) {
  // $('div#snippetList').html(`${data.kind}`)
  console.log(data.val().kind);

  if (data.val().kind === 'Ruby') {
    rubyCounter++;
  } else if (data.val().kind === 'HTML') {
    htmlCounter++;
  } else if (data.val().kind === 'CSS') {
    cssCounter++;
  } else if (data.val().kind === 'JavaScript') {
    jsCounter++;
  }

  $('#snippetList').html(`
    <p><a href="">Ruby (${rubyCounter} Snippets)</a></p>
    <p><a href="">HTML (${htmlCounter} Snippets)</a></p>
    <p><a href="">CSS (${cssCounter} Snippets)</a></p>
    <p><a href="">JavaScript (${jsCounter} Snippets)</a></p>
    `);
  // console.log('Ruby: ' + rubyCounter);
  // console.log('HTML: ' + htmlCounter);
  // console.log('CSS: ' + cssCounter);
  // console.log('JavaScript: ' + jsCounter);
});

$(document).ready(function() {
  $('#form-submit').on('submit', function(event) {
    event.preventDefault();
    console.log('clicked submit');
    console.log($('#kind').val());
    console.log($('#title').val());
    console.log($('#code').val());
    snippetsRef.push({
      kind: $('#kind').val(),
      title: $('#title').val(),
      code: $('#code').val()
    });
    $('#kind').val('Ruby');
    $('#title').val('');
    $('#code').val('');
  })
});
