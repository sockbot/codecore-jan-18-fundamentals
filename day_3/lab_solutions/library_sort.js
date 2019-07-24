let library = [];
let book = '';

while (book.toLowerCase() !== 'exit' || book !== '') {
  book = prompt('Please enter a book name. Type exit to stop.');
  if (book.toLowerCase() === 'exit' || book === '') {
    break;
  } else {
    library.push(book);
  }
}
library.sort();
console.log(library.join(', ')); // library.sort().join() also ok
