let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    alert("Hello!");
  };
  
  user.sayHi(); // Hello!

  //Just like in Python the object can have methods

  /*// Other ways of declatring the method.

user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function(){...}"
    alert("Hello");
  }
};*/


//This is the other way of declaring the method, where they keyword 'this'
//is basically self from python
let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  
  };
  
  user.sayHi(); // John

  let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}



//In this example it creates the method and assigns it to different 
//objects, and the 'this' makes the function generic.
// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)


// Arrow functions have no this !!!!