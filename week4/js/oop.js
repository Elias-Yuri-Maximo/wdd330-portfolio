
//EXAMPLE OF A CONSTRUCTOR FUNCTION
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }    
}
//Dice object with a roll() method

const redDice = new Dice();
//<< Dice { sides: 6, roll: [Function] }

//Object, Array and Function are all built-in constructor functions

//THIS IS THE MOST MODERN WAY INTRODUCED 
//in order to create
class Dice {
    constructor(sides=6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
}

class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
}

//PROTOTYPAL INHERITANCE
//This allows you to change the class after it has been created

Turtle.prototype;
//<< Turtle {}

//this adds an attribute to a prototype
Turtle.prototype.weapon = 'Hands';
//<< 'Hands'

//This creates a function and adds it to the Turtle class
Turtle.prototype.attack = function(){
    return `Feel the power of my ${this.weapon}!`;
    }
//<< [Function]

//These methods are all added to all objects of the Turtle class

//Ways of getting the prototype
raph.constructor.prototype;
//<< Turtle { attack: [Function], weapon: 'Hands' }

Object.getPrototypeOf(raph);
//<< Turtle { attack: [Function], weapon: 'Hands' }
//Recommended way :D

raph.__proto__
//<< Turtle { attack: [Function], weapon: 'Hands' }


//.hasOwnProperty(); shows wether or not the class 
//has their own attribute
raph.hasOwnProperty('name');
//<< true
raph.hasOwnProperty('weapon');
//<< false

//THE PROTOTYPE IS UPDATED LIVE 
//so everything you alter on the protoype, will be altered in 
//the objects too.


//EXAMPLES OFN OVERWRITING DEFAULT VALUES FROM THE PROTOYPE
leo.weapon = 'Katana Blades';
//<< 'Katana Blades';

raph.weapon = 'Sai';
//<< 'Sai'

don.weapon = 'Bo Staff';
//<< 'Bo Staff'

//WHEN TO USE PROTOTYPE
//The prototype can be used to add any new properties and
// methods after the class has been declared. It should be 
//used to define any properties that will remain the same 
//for every instance of the class. The weapon example was 
//unsuitable because all the turtles use a different weapon
// (we just used it in the example above to demonstrate 
//overwriting). They do, however, like the same food — pizza! 
//This makes a good candidate for a prototype property, if it 
//wasn't included in the original class declaration:


//PUBLIC AND PRIVATE METHODS
//By default all mehtods are public. 

raph.weapon
//<< 'Sai'

raph.weapon = 3;
//<< 3

class Turtle {
    constructor(name,color) {
        this.name = name;
        let _color = color;
        this.setColor = color => { return _color = color; }
        this.getColor = () => _color;
    }
}

//_color is a private attribute 
//get and set colors are the only ways of accessing it 
//it helps to avoid any invalid values being put in 

this.setColor = (color) => {
    if(typeof color === 'string'){
        return _color = color;
        } else {
            throw new Error('Color must be a string');
        }
    }
    
    raph.setColor(4);
//   << Error: Color must be a string

//INHERITANCE
Object.getPrototypeOf(raph);
//<< Turtle {}


//OBJECT CONSTRUCTOR
//When an object asks for a method, 
//Javascript will go all the way up the ineritance chain

//inheritance can be created through the keyword 
//extends
class Turtle {
    constructor(name) {
        this.name = name;
        }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }

    swim() {
        return `${this.name} paddles in the water`;
    }
}

//The key word extends shows that NinjaTurtle inherits from Turtle
class NinjaTurtle extends Turtle {
    constructor(name) {
        super(name);
        this.weapon = 'hands';
    }
    attack() { return `Feel the power of my ${this.weapon}!` } 
}

//Super is used to call the parent class 

//POLYMORPHISM
//every object has the method (.toString() for instance), but it acts differently 
//for each object

//you can change the toString method on a class 

//You can create a method for Arrays for instance
//This gets the first and last items.
Array.prototype.first = function() {
    return this[0];
}

Array.prototype.last = function() {
    return this[this.length -1];
}
//delete method that returns deleted item
Array.prototype.delete = function(i) {
    return self.splice(i,1);
}

//MONKEY PATCHING
//when people change native code 
//dISCOURAGED IN js
//Could be ddone in a safe manner by creating a subclass to add
//the working methods
class myArray extends Array {
    constructor(...args){
        super(...args);
    }
    delete(i) {
        return this.splice(i,1);
    }
}

const Human = {
    arms: 2,
    legs: 2,
    walk() { console.log('Walking'); }
    }

const lois = Object.create(Human);


lois.arms
<< 2

lois.legs
<< 2

lois.walk()
<< Walking


const Superhuman = Object.create(Human);

//In this case human is becoming a super object
Superhuman.change = function() {
return `${this.realName} goes into a phone box and comes out as ${this.name}!`;
};

//Every time a new object is created using the Object.create()
//method, the new object inherits all the properties and methods
//from the parent object, which becomes the new object’s 
//prototype. For example, we can see that the prototype of 
//the superman object is the Superhuman object using this
//code

//MIXIN functions
//This is a way of passing methods and properties to another 
//object without using inheritance 

const a = {};

const b = { name: 'JavaScript' };

Object.assign(a,b);
//<< { name: 'JavaScript' }

a.name
//<< 'JavaScript'

function mixin(target,...objects) {
    for (const object of objects) {   
    if(typeof object === 'object') {
        for (const key of Object.keys(object)) {
            if (typeof object[key] === 'object') {
            target[key] = Array.isArray(object[key]) ? [] : {};
            mixin(target[key],object[key]);
            } else {
            Object.assign(target,object);  
            }
        }
        }
    }
    return target;
}


//Using mixin in order to create attributes on the fly
mixin(wonderWoman,{ name: 'Wonder Woman', realName: 'Diana Prince' });

wonderWoman.change()
<< 'Diana Prince goes into a phone box and comes out as Wonder Woman'

//This makes a deep copy of an object
function copy(target) {
    const object =  Object.create(Object.getPrototypeOf(target));
    mixin(object,target);
    return object;
}

//This makes them not affect each other when making a copy
const bizarro = copy(superman);

bizarro.name = 'Bizarro';
//<< 'Bizarro';

bizarro.realName = 'Subject B-0';
//<< 'Subject B-0'

bizarro.change()
<< 'Subject B-0 goes into a phone box and comes out as Bizzaro!'

//This makes a factory function that can be passed to create 
//new superhero classes
function createSuperhuman(...mixins) {
    const object = copy(Superhuman);
    return mixin(object,...mixins);
}

const hulk = createSuperhuman({name: 'Hulk', realName: 'Bruce Banner'});

hulk.change()
<< 'Bruce Banner goes into a phone box and comes out as Hulk!'


//Examples of mixin objects
const flight = {
    fly() {
        console.log(`Up, up and away! ${this.name} soars through the air!`);
        return this;
    }
}
const superSpeed = {
    move() {
        console.log(`${this.name} can move faster than a speeding bullet!`);
        return this;
    }  
}
const xRayVision = {
    xray() {
        console.log(`${this.name} can see right through you!`);
        return this;
    }  
}

//ading stuff using the mixin function
mixin(superman,flight,superSpeed,xRayVision);

mixin(wonderwoman,flight,superSpeed);


//In some cases 
superman.findFriends = function() {
    for(const friend of this.friends) {
        console.log(`${friend.name} is friends with ${this.name}`);
    };
}

superman.findFriends();
//<<  Batman is friends with Superman
//    Wonder Woman is friends with Superman
//    Aquaman is friends with Superman

superman.findFriends = function() {
    this.friends.forEach((friend) => {
        console.log(`${friend.name} is friends with ${this.name}`);
    }
    );
}

superman.findFriends();
//<<  Batman is friends with Superman
//    Wonder Woman is friends with Superman
//    Aquaman is friends with Superman
//If using an arrow function, 'this' works fine
