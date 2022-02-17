//Functions themselves have attributes
function square(x) {
    return x*x;
}

square.length;


function sayHello(greeting='Hello'){
    return `${ greeting }, my name is ${ this.name }`;
}

sayHello.call(clark, 'How do you do');
//<< 'How do you do, my name is Clark'

sayHello.call(bruce);
//<< 'Hello, my name is Bruce'

square.call(null, 4)
<< 16
//You can use the method call, 
//but youneed to pass null as the first parameter

//Atrtributes can be added to functions

//Momoization

function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
}

//The .cahce keyword will save the result in the memory 
//So it doesn't need to be calculated again

(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
    })();
    //<< 'Hello World'

    //The parenthesis at the end makes it execute once it is declared

    let a = 1;
    let b = 2;
    
    (()=>{
        const temp = a;
        a = b;
        b = temp;
    })();
    
    a;
    //<< 2
    
    b;
    //<< 1
    
    console.log(temp);
    //<< Error: "temp is not defined"
    //THis makes temp be a temporary variable, it executes  and goes away.
    
    
    //INITIALIZATION CODE
    //This code shows how the functions initializes it and then
    //is eliminated
    (function() {
        const name = 'Peter Parker'; // This might be obtained from a cookie in reality
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
        const date = new Date(),today = days[date.getDay()];
        console.log(`Welcome back ${name}. Today is ${today}`);
    
    })();
    //<< 'Welcome back Peter Parker. Today is Tuesday'

    {
        const name = 'Peter Parker'; // This might be obtained from a cookie in reality
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday'];
        const date = new Date(),today = days[date.getDay()];
        console.log(`Welcome back ${name}. Today is ${today}`);
    }
    //<< 'Welcome back Peter Parker. Today is Tuesday'

    //By putting use strict inside of function will make only that 
    //block strict
    (function() {
    'use strict';

    // All your code would go inside this function
    
    })();

    (function() {
        // block A
        const name = 'Block A';
        console.log(`Hello from ${name}`);
        }());
    
        (function() {
        // block B
        const name = 'Block B';
        console.log(`Hello from ${name}`);
    }());
    
    //<<  Hello from Block A
    //    Hello from Block B

    //Functions that rewrite themselves 
    //This is done bt attributing it to a variable 
    function party(){
        console.log('Wow this is amazing!');
        party = function(){
            console.log('Been there, got the T-Shirt');
        }
    }

    function party(){
        console.log('Wow this is amazing!');
        party = function(){
            console.log('Been there, got the T-Shirt');
        }
    }
    
    const beachParty = party; // note that the party function has not been invoked
    
    beachParty(); // the party() function has now been redefined, even though it hasn't been called explicitly
    //<< 'Wow this is amazing!'
    
    party(); 
   // << 'Been there, got the T-Shirt'
    
    beachParty(); // but this function hasn't been redefined
   // << 'Wow this is amazing!'
    
    beachParty(); // no matter how many times this is called it will remain the same
    //<< 'Wow this is amazing!'

    //RECURSIVE FUNCTIONS
    //Recursive functions are the ones that invocke themselves
    //until a certain condition is met

    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    //Function to calculate the conjecture
    //function collatz(n, sequence=[n]) {
    //    if (n === 1){
     //       return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    //    }
    
    //    if (n%2 === 0) {
    //        n = n/2;
    //    } else { 
    //        n = 3*n + 1;
     //   }
    
    //    return collatz(n,[...sequence,n]);
    //}

    collatz(18);
//<< 'Sequence took 21 steps. It was 18,9,28,14,7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1'

//CALLBACKS
//They can help asynchronous programming
//Only one piece of code will ever be executed


function wait(message, callback, seconds){
    setTimeout(callback,seconds * 1000);
    console.log(message);
}
//The timeoput function calls the callback a few seconds after the first 
//function was executed

function selfDestruct(){
    console.log('BOOOOM!');
}

// This shows how it works asynchronously
wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');

//<< 'This tape will self-destruct in five seconds ... '
//<< 'Hmmm, should I accept this mission or not ... ? '
//<< 'BOOOOM!'

//Take a deepeer llook at CALLBACK FUNCTIONS
//callback hell

//This shows an example of callback functionson a game
login(userName, function(error,user) {
    if(error){
        throw error;
    } else {  
        getPlayerInfo(user.id, function(error,info){
        if(error){
        throw error;
        } else {
            loadGame(info, function(error,game) {
                if(error){
                        throw error;
                    } else {
                    // code to run game
                }
            });
        }
        });
    }
});

//PROMISES
//Resolved promises - the operation was completed successfully
//Rejected promises - didn't work
//Super promise
//There is a pending phase where the promise is waiting

//Creating promises
//They are objects that need a constructor function
const promise = new Promise( (resolve, reject) => {
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});

//promise example using a dice 
const promise = new Promise( (resolve,reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 1) ? resolve(n) : reject(n);
    }, n*1000);
});
//DIVE deeper into promises

//Dealing with a settled promise

//Example of the catch method
promise.catch( result => console.log(`Drat! ... I rolled a ${result}`));

//Example of the then method
promise.then( result => console.log(`I rolled a ${result}`) )
            .catch( result => console.log(`Drat! ... I rolled a ${result}`) );



            const dice = {
                sides: 6,
                    roll() {
                        return Math.floor(this.sides * Math.random()) + 1;
                    }
                }
                
                console.log('Before the roll');
                
                const roll = new Promise( (resolve,reject) => {
                    const n = dice.roll();
                    if(n > 1){
                        setTimeout(()=>{resolve(n)},n*200);
                    } else {
                        setTimeout(()=>reject(n),n*200);
                    }
                });
                
                roll.then(result => console.log(`I rolled a ${result}`) )
                .catch(result => console.log(`Drat! ... I rolled a ${result}`) );
                
                console.log('After the roll');

//CHANGING MULTIPLE PROMISES
login(userName)
.then(user => getPlayerInfo(user.id))
.then(info => loadGame(info))

// this chains multiple promises

//ASYNC FUNCTIONS
//sHOWS HOW THE GAME EXAMPLE WOULD BE WITH ASYNC FUNCTIONS
async function loadGame(userName) {

    try {
        const user = await login(userName);
        const info = await getPlayerInfo (user.id);
        // load the game using the returned info
    }

    catch (error){
        throw error;
    }
}

//GENERALIZED FUNCTIONS
//It can be used to create 

//Example of a more gneric function

function random(a,b=1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    } 
    return Math.floor((b-a+1) * Math.random()) + a;
}

random(6);
//<< 4

random(10,20);
//<< 13

//Example ofit using another function
function square(n) {
    return n*n;
}

random(1,10,square);
//<< 49


//FUNCTION THAT RETURN FUNCTIONS

function returnHello() {
    console.log('returnHello() called');
    return function() {
        console.log('Hello World!');
    }
}

//CLOSURES

//This demonstrates scopes of variables
const outside = 'In the global scope';
function fn() {
    const inside = 'In the function scope';
}

outside
//<< 'In the global scope'

inside
//<< ReferenceError: inside is not defined

//Closure keeps alive those variables that had a local scope on a function
function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    console.log(outside);
    inner();
}

//Returning functionss

function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    return inner;
}

//This is a practical example of closure
function closure() {
    const a = 1.8;
    const b = 32;
    return c => c * a + b;
}

const toFahrenheit = closure();

//This is a counter example
function counter(start){
    let i = start;
    return function() {
        return i++;
    }
}

//Starts the function with an i

//GENERATORS
//genereate itarators that mantain the value state of the value
function* exampleGenerator() {
    // code for the generator goes here
    }


//CREATES THE FIBONACCI NUMBERS
function* fibonacci(a,b) {
    let [ prev,current ] = [ a,b ];
    while(true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}
//FUNCTIONAL PROGRAMMING
//has gained attention in later years
//Use of pure functions

//example of pure function
function reverse(string) {
    return string.split('').reverse().join('');
}

const message = 'Hello JavaScript';
reverse(message);
//<< 'tpircSavaJ olleH'

message // hasn't changed
//<< 'Hello JavaScript'

let number = 42;
let result = 0;

//example of inpure funtion
function impureAdd(x) {
    result = number + x;
}

impureAdd(10);
result;
//<< 52

//const number = 42;
//Example of a pure function that achieves the same
function pureAdd(x,y) {
    return x + y;
}

result = pureAdd(number,10);
//<< 52

//Read more about pure functions

//Pure functions perform one simple task and can be used more than once

//HIGHER ORDER FUNCTIONS
//accept other functions as arguments

function multiplier(x){
    return function(y){
        return x*y;
    }
}

doubler(10);
//<< 20

tripler = multiplier(3);

tripler(10);
//<< 30

//HIGHER ORDER
function power(x) {
    return function(power) {
        return Math.pow(x,power);
    }
}

//CURRYING
//Afunction is curried when not all arguments are presented to the function
//This relies on higher order functions
//Allows turning one function into several ones


function curry(func,...oldArgs) {
    return function(...newArgs) {
        const allArgs = [...oldArgs,...newArgs];
        return func(...allArgs);
    }
}


//Getting functional

///////////////////////////////////////////////////////////////
//AJAX
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

//aLLOWS PAGES TO COMMUNICATE ASYNC WITH SERVER
//JS was originally designed as a client-side programming languge
//AJAX enables JS to communicate with the server

//THE FETCH API
//The fetch API is the standard today for requesting server stuff

fetch('https://example.com/data')
//.then( // code that handles the response )
//.catch( // code that runs if the server returns an error )

//RESPONSE INTERFACE

const url = 'https:example.com/data';

fetch(url)
.then((response) => {
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
//.then( response => // do something with response )
//.catch( error => console.log('There was an error!') 
//The redirect method could be used to send it to a new URL

//TEXT RESPONSES
fetch(url)
.then( response => response.text() ); // transforms the text stream into a JavaScript string
//.then( text => console.log(text) )
//.catch( error => console.log('There was an error: ', error))
//In this example when there is an error it will respond with a text

fetch(url)
.then( response => response.blob() ); // transforms the data into a blob object
//.then( blob => console.log(blob.type) )
//.catch( error => console.log('There was an error: ', error))
//Once the JS reads the whole file,  it returns the promise

//JSON responses 
//Most common form of AJAX answer

//CREATING A RESPONSE OBJECT
const response = new Response( 'Hello!', {
    ok: true,
    status: 200,
    statusText: 'OK',
    type: 'cors',
    url: '/api'
});

//REQUEST INTERFACE
//CONSTRUCTOR FUNCTION USED TO CREAT REQUEST OBJ
const request = new Request('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
});

//HEADERS INTERFACE
const headers = new Headers();
const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' })

headers.has('Content-Type');
//<< true

headers.get('Content-Type');
//<< 'text/plain'

headers.set('Content-Type', 'application/json');

headers.append('Accept-Encoding','gzip,deflate');

headers.delete('Accept-Encoding')


//for(const entry of headers.entries(){
//    console.log(entry);
//    }
    //<< [ 'Content-Type', 'application/json' ]

//PUTTING IT ALL TOGETHER

const url = 'https:example.com/data';
const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' })

const request = (url,{
    headers: headers
})

fetch(request)
.then( function(response) {
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
//.then( response => // do something with response )
//.catch( error => console.log('There was an error!') )

//RECEIVING INFORMATION
