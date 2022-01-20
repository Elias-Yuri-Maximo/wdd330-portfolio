//Either create an object
const spiderman = {};
const venom = new Object();


const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

//either of these can access superman's rpoperty name
superman.name
<< 'Superman'

superman['name']
<< 'Superman'


//Example using a ternary operator to check if cap is a hero
const bewitched = true;
const captainBritain = { name: 'Captain Britain', hero: bewitched ? false : true };

captainBritain
<< { name: 'Captain Britain', hero: false }

//how to add a new property to an object
const realName = Symbol('real name');

supergirl[realName] 
<< 'Kara Danvers'

//calling methods
superman.fly()
<< 'Up, up and away!'

superman['fly']()
<< 'Up, up and away!'

//check if method is in the object
'city' in superman
<< false


//Object.keys(superman) returns an array with all keys of an objhect 
for(const key of Object.keys(superman)) {
    console.log(key);
}
//  name
//    real name
//    height
//    weight
//    hero
///    villain
//    allies
 //   fly

 //NAMESPACING
 //yOU CAN CREATE AN OBJECT TO GROUP THE METHODS THAT BELONG TO A 
 //SAME GROUP AND COULD HAVE A METHOD WITH SME NAME SOMEWHERE ELSE




 //The parse() method takes a string of data in JSON format
 // and returns a JavaScript object:
 JSON.parse(batman)
<< { name: 'Batman',
'real name': 'Bruce Wayne',
height: 74,
weight: 210,
hero: true,
villain: false,
allies: [ 'Robin', 'Batgirl', 'Superman' ] }


//The stringify() method does the opposite, taking a JavaScript 
//object and returning a string of JSON data, as can be seen in 
//the example:
const wonderWoman = {
    name: 'Wonder Woman',
    'real name': 'Diana Prince',
    height: 72,
    weight: 165,
    hero: true,
    villain: false,
    allies: ['Wonder Girl','Donna Troy','Superman'],
    lasso: function(){
        console.log('You will tell the truth!');
    }
}

JSON.stringify(wonderWoman)
//<< '{"name":"Wonder Woman","real name":"Diana Prince","height":72,
///"weight":165,"hero":true,"villain":false,"allies":["Wonder Girl",
//"Donna Troy","Superman"]}'

//RegExp OBJECT
//Ways to create a REGEX object
const pattern = /[a-zA-Z]+ing$/;
const pattern = new RegExp('[a-zA-Z]+ing');










