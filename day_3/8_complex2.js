// objects + complexity

const me = {
  name: 'Andy',
  age: 37,
  // hobby: 'rock climbing',
  hobbies: ['rock climbing', 'cycling'], // properties can be arrays
  skills: ['programming', 'public speaking']
};

me.name; // accessor: getter / setter
me.name = 'Prince'; // setter
me.name;

me.name = 'Symbol';
me.name;

me.skills; // returns an array
me.skills[1]; // returns public speaking
