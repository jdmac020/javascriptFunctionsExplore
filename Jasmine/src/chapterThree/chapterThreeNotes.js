// standard declaration using "function" keyword--assigns the name of the function to the name property
// hoisting will make this property available immediately
function first() {};

// annonymous, assigned to variable--will infer the name to assign to the property
// is part of declaration, and is also hoisted
var second = function() {};

// function is assigned to an array value--not part of a declaration, will not be hoisted.
// name property won't be available till after the assignment runs
// ...how do you run the assignment?
var myArray = new Array(3);
myArray[1] = function() {};

// Same as second, but now a new name is inferred from the function's declaration (not the variable being assigned)
var third = function someName() {};

//immediately invoked function
// var fourth = (function() { ...; return funciton() {};}){}
// allows closure--using an inner function using variables or even other functions
// a count-up function that accepts a value (or uses default of zero) and adds one
var myCounter = (function(initialValue = 0) {
  let count = initialValue;
  return function() {
    count++;
    return count;
  };
})();

var myCounterAt55 = (function(initialValue = 0) {
  let count = initialValue;
  return function() {
    count++;
    return count;
  };
})(55);

// Arrow functions--return values
// Paramaters + arrow + function implies return
// To get an object, enclose (return?) in parens
const f1 = (x, y, z) => x + y + z;

const f2 = (x, y, z) => {
  return x + y + z;
};

// Handling 'this'--what does not work
function ShowItself1(identity) {
  this.identity = identity;
  setTimeout(function() {
    console.log(this.identity);
  }, 1000);
}

var x = new ShowItself1("Functional");

// Three options that do work...

function ShowItself2(identity) {
  //using closure
  this.identity = identity;
  let that = this;
  setTimeout(function() {
    console.log(that.identity);
  }, 1000);
  
  // using bind
  setTimeout(
    function() {
      console.log(this.identity);
    }.bind(this), 2000
  );
  
  // using arrow function
  setTimeout(() => {
    console.log(this.identity);
  }, 3000);
}

var x = new ShowItself2("Javascript");

// the ...args is similar to a params[] in C#
// could be lots of arguments, could be 0--it's an array
function listArguments(...args) {
  console.log(args);
  somethingElse(...args);
}

console.log(first.name);
console.log(second.name);
console.log(myArray[1].name);
console.log(third.name);
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounterAt55());
console.log(myCounterAt55());
console.log(myCounterAt55());
console.log(f1(1,1,1));
console.log(f2(1,1,1));
listArguments(12, 4, 56);