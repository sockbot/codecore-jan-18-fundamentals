// Go to http://vancouver.craigslist.ca
//
// Write some jQuery to get the HREF attribute of the first link on the page
// Write some jQuery to get the number of links on this page
// Write some jQuery to change the text for all links to be [Your Name]
// Write some jQuery to make Craigslist's logo link to http://www.google.com

$(document).ready(function() {
  console.log($('a').attr('href'));
  console.log($('a').length);
  $('a').text('Andy Chan');
  $('div#logo a').attr('href', "http://www.google.com");
});
