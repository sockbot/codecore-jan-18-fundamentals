// Strings are arrays of charcacters

let name = 'Jacob';
// name[0];
// name[1];
// name[2];
// name[3];
// name[4];
//
// name.length; // 5
//
// name[0] = 'Y'; // doesn't change the string -- fails silently
// console.log(name);
//
// name = 'Yacob'; // you have to change the entire string
// console.log(name);
//
// // if you want to treat a string like an array you can create it in an array
// let letters = ['J','a','c','o','b'];
// letters[0] = 'Y';
// console.log(letters);

let csv = name.split(); // turns Jacob into a single entry array ['Jacob']
console.log(csv);
csv = name.split(''); // split() takes an parameter that is the delimiter
console.log(csv);
let letter = name.split('')[2]; // stores the 3rd item in the array
console.log(letter);

let join = csv.join(','); // join turns an array into a string
console.log(join);
