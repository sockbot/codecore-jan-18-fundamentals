// methods, another name for a function
// method is associated witha  class or an object

// array: its parent is an object

let shoppingList = ['milk', 'eggs', 'cheese'];
shoppingList.push('butter'); // push() adds item to end of the list
shoppingList.push('beer'); // push() adds item to end of the list
shoppingList.push('chips'); // push() adds item to end of the list

shoppingList[shoppingList.length] = 'dip';
shoppingList[shoppingList.length] = 'nachos';
shoppingList[10] = 'popcorn;' // everything between 'nachos' and 'popcorn' is undef

console.log(shoppingList);

shoppingList.pop(); // removes item from the end
shoppingList.shift(); // remove item from start
console.log(shoppingList);

shoppingList.unshift('juice'); // add item to start
console.log(shoppingList);
