// Go to https://en.wikipedia.org/wiki/Justin_Bieber in your browser.
//
// Write some jQuery to change the title of the article to Your Name.
// Write some jQuery to hide the body of the article
// Write some jQuery to remove the wikipedia logo
// Write some jQuery to change the image on the right hand side to a different picture

$('#firstHeading').html('Andy Chan');
$('#mw-content-text p').hide();
$('.mw-wiki-logo').hide();
$('table.infobox.biography.vcard img').attr('src', 'https://i.pinimg.com/736x/d4/c2/3e/d4c23ea0f9e8bf03db6935e412c3f89b--interview-images-football-fever.jpg');
