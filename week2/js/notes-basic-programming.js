//Playing with scope
c=3;
console.log(c);
{ c = 5; console.log(c); }
{ const c = 15; console.log(c); }
console.log(c);

//How to put an apostrophe inside of a string 
let testString = 'elias'
let lengthOfString = testString.length

//each primirive data type has methods, '.' will have you execute them
const upperCase = testString.toUpperCase();
//Checks which is the first character
const whichCaracterFirst = testString.charAt(0);
//Checks what is the index of e in the stign
const whereIsA = testString.indexOf('e');
//Checks if the name includes E
const IsThereE = testString.includes('e');


//String literals using ``
const name = `Siri`;`Hello ${ name }!`;
//<< 'Hello Siri!'
const age = 39;`I will be ${ age + 1 } next year`;
//<< 'I will be 40 next year'

//Symbols create a uninque ID
const uniqueID = Symbol();
const uniqueID = Symbol('this is a unique ID');

//This can access the description of the sy,bol
String(uniqueID)
//<< 'Symbol(this is a unique ID)'

const A = Symbol.for('shared symbol');
const B = Symbol.for('shared symbol');
//These two variables would point towards the same variable.

//Checks if the number is an interger 
Number.isInterger(34.99679);

0xAF; // A represents 10, F represents 15<< 175
0o47; // 4 eights and 7 units<< 39

1e6; // means 1 multiplied by 10 to the power 6 (a million)<< 1000000
2E3; // 2 multiplied by 10^3 (two thousand)<< 2000

//When using a number method, put a space before a dot
5 .toExponential(); //>> "5e+0"


// Rounds a number to third decimal
PI.toFixed(3); 
// only one dot is needed when using constants or variables<< "3.142"

points++; // will return 6, then increase points to 7<< 6
++points; // will increase points to 8, then return it<< 8



//2e308; // too big!<< Infinity

points -= 5; // decreases points by 5<< 15
points *= 2; // doubles points<< 30
points /= 3; // divides value of points by 3<< 10
points %= 7; // changes the value of points to the remainder if its current value is divided by 7<< 3

// If I have a number in a string (2+'4') Javastcript will try and add both '24'

//changes string into number
Number('23'); // << 23

//Changes number into string
10..toString();//<< '10'

//Parse int is used to transform string to number
const address = '221B Baker Street';
parseInt(address, 10)//<< 221

//null = 0 
//undefined = not declared. 

//VALUES THAT WILL ALWAYS RETURN FALSE
* "" // double quoted empty string literal
* '' // single quoted empty string literal
* `` // empty template literal
* 0* -0 // considered different to 0 by JavaScript!
* NaN
* false
* null
* undefined


//! = LOGICAL NOT 
!true // = FALSE

//&& (Logical AND)
// || (Logical OR)


//Coerção de dados é quando Javascript junta ou compara variaveis 
//de valores diferentes como iguais (if 5 == '5') >> True
