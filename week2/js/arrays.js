const heroes = [];

heroes[0] = 'Superman';

const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow'];
avengers[avengers.length - 1];//<< 'Black Widow'

// removes and returns last item
avengers.pop();

//removes and returns first item
avengers.shift();

//appends value to the end of array
avengers.push('Thor');

//concatenates two arrays
avengers = avengers.concat(['Hulk','Hawkeye', 'Black Widow']);

avengers = [ ...avengers, ...['Hulk','Hawkeye', 'Black Widow'] ];
//should return ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Hawkeye', 'Black Widow']

avengers.join();
//'Captain America, Iron Man, Thor, Hulk, Hawkeye, Black Widow'


//Returns items [2,4], returns a string with them
avengers.slice(2,4) // starts at the third item (index of 2) and finishes at the fourth (the item with index 4 is not included)
//<< ['Thor', 'Hulk']

//Splice chooses an index [3] 
//and removes x (1 in this case) elements counting from it
//returns it in the end
avengers.splice(3, 1, 'Scarlet Witch');
//<< ['Hulk']

//This would just ad quicksilver after Scarlet Witch
avengers.splice(4,0,'Quicksilver');
//<< []

//Reverses order
avengers.reverse();//<< ['Black Widow', 'Hawkeye', 'Quicksilver', 'Scarlet Witch', 'Iron Man', 'Captain America']

//Returns index of item in parenthesis
avengers.indexOf('Iron Man');//<< 3
//If the item is not in the array it returns -1

avengers.includes('Spider Man', 1); // will start the search from the second element in the array
//<< false

///////////////////////////////////////////////////////
//MULTIDIMENIONAL ARRAYS
const coordinates = [[1,3],[4,2]];

//////////////////////////////////////////////////////
//SETS
const list = new Set();

list.add(1);

list.add(2).add(3).add(4);
//<< Set { 1, 2, 3, 4 }

//If numbers are repeated they will be saved only once to the set
const moreNumbers = new Set([7,7,7,7,7,8,8,8,9,9]);
moreNumbers

////////////////////////////////////////////////////
//MAPS

//, whereas maps are solely focused on the storage and retrieval of key-value pairs.
// The value of an object's properties can be accessed directly, whereas maps restrict 
//you to using the get() method to retrieve any values.

const romanNumerals = new Map();

romanNumerals.set(1,'I');
//<< Map { 1 => 'I' }

romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
//<< Map { 1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V' }

//looks for the 4th element
romanNumerals.get(4); //<< 'IV'

romanNumerals.has(5); //<< true

//A map can be created with multiple values by using a nested array as a parameter:
const heroes = new Map([ ['Clark Kent','Superman'],['Bruce Wayne', 'Batman']]);

//Removes superman from the map
heroes.delete('Clark Kent');//<< true

//Removes all pairs
heroes.clear();
heroes.size;//<< 0


//Converts the map using the spread method
[...romanNumerals]
//<< [ [ 1, 'I' ], [ 2, 'II' ], [ 3, 'III' ], [ 4, 'IV' ], [ 5, 'V' ] ]

const weak = new WeakMap();


//This snippet uses the ternary ooperator to execute an if statement.
const n = 5;
n%2 === 0 ? console.log('n is an even number') : console.log('n is an odd number');
//<< 'n is an odd number'

//Places it inside of a template string
console.log(`n is a ${(n%2 === 0)? 'even' : 'odd'} number`);

if (number === 4) {
    console.log('You rolled a four');
} else if (number === 5) {
    console.log('You rolled a five');
} else if(number === 6){
    console.log('You rolled a six');
} else {
    console.log('You rolled a number less than four');
}
//Many elses and ifs can be nested in order to have many conditions be checked

//Switch can be used for the same effect
switch (number) {
        case 4:
                console.log('You rolled a four');
                break;   
        case 5:    
                console.log('You rolled a five');
                break;    
        case 6:    
                console.log('You rolled a six');
                break;    
        default:    
                console.log('You rolled a number less than four');    
                break;}

            
///////////////////////////////////////////////////////////////
//Loops

let bottles = 11;while (--bottles){
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
}

let bottles = 10;
do {
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
    bottles--;
} while (bottles > 0)

//FOR LOOP
//for (initialization ; condition ; after) { do something }

for (let bottles = 10 ; bottles > 0 ; bottles--) {
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
}

//Nested for loop 
for(let i=1 ; j<13 ; i++){
    for(let i=1 ; j<13 ; j++){
        console.log(`${j} multiplied by ${i} is ${i*j}`);
        }
    }


// This would iterate over the set 
for(const letter of letters) {
    console.log(letter);
}
/*
<< h
e
l
o
  */

//This iterates over maps 
const romanNumerals = new Map();
romanNumerals.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');

romanNumerals
//<< Map { 1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V' }

