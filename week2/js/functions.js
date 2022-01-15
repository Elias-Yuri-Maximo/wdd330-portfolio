function hello(){
    console.log('Hello World!');
}

//Function expressions
//Functins expressions assign the value of the function the 
//variable  
const goodbye = function(){
    console.log('Goodbye World!');
};

const goodbye = function bye(){
    console.log('Goodbye World!');
};

//Declaring a function in the body
//NOT ADVISED
const hi = new Function('console.log("Hi World!");');

//A ninja programmer should always declare 
//functions using function literals, function declarations 
//Or function expressions.

//A function that doesn’t explicitly return anything 
//(such as all the 
//examples we have seen so far) will return undefined by default.

function square(x){
    return x*x;
}

//Creating a default parameter
function hello(name='World') {
    console.log(`Hello ${name}!`);
}

function discount(price, amount=10) {
    return price*(100-amount)/100;
}

//Arrow functions
const square = x => x*x;

//Longer Arrow functions
const tax = (salary) => {
    const taxable = salary - 8000;
    const lowerRate = 0.25 * taxable;
    taxable = taxable - 20000;
    const higherRate = 0.4 * taxable;
    return lowerRate + higherRate;
}

//CALLBACKS AND CALLBACK FUNCTIONS
function sing(song,callback) {
    console.log(`I'm singing along to ${song}.`);
    callback();
}

function dance() {
    console.log("I'm moving my body to the groove.");
    // ( We’re just logging a simple message to the console in these examples, 
    //but these functions could be used to do anything in a 
    //practical sense.)
}

    //tHIS FUNCTION CALLS A sing and the callback
// also executes the dance function
sing('Let It Go',dance);
//<< 'I'm singing along to Let It Go.'
//'I'm moving my body to the groove.'


//It could also be done using an anonymous function
sing('Let It Go',()=>{ console.log("I'm standing on my head.");});
//<< 'I'm singing along to Let It Go.'
//'I'm standing on my head.'


// Using a callback function to sort numbers
function numerically(a,b){    
    return a-b;
}

[1,3,12,5,23,18,7].sort(numerically);
//<< [1, 3, 5, 7, 12, 18, 23]

////  THIS FUNCTION CAN BE USED TO SORT NUMBERS
/////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////
////////////////////////////////////////////////////////
function numerically (a,b) {
    if (a < b) {
        return -1;
    } else if (a> b) {
        return 1;
    } else {
        return 0;
    }
}

colors.forEach( (color,index) =>
    console.log(`Color at position ${index}  is ${color}`) );
/*<<  "Color at position 0 is Red"
    "Color at position 1 is Green"
    "Color at position 2 is Blue"*/

//The reduce() method is another method that iterates 
//over each value in the array, but this time it cumulatively 
//combines each result to return just a single value. 
//The callback function is used to describe how to combine 
//each value of the array with the running total.

[1,2,3,4,5].reduce( (acc,val) => prev + val ); //<< 15

//The filter() method returns a new array that only contains items
//from the original array that return true when passed to the
// callback

const numbers = [ 2, 7, 6, 5, 11, 23, 12 ]
numbers.filter(x => x%2 === 0 ); // this returns true if the number is even
//<< [ 2, 6, 12 ]
