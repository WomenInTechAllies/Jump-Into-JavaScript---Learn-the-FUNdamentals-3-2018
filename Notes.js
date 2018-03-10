//What is an object
const me = {
    name : "Susan",
    age: 39,
    married: true,
    hobbies: ["Coding", "Wine Drinking", "Sarcastic Comments"],
    placesLived: [{city:"Denver", state:"Colorado"}, 
                  {city:"Teaneck", state: "New Jersey"}],
    drinkingCoffee : coffeeTime(),
};

function coffeeTime (){
    return true;
}

//More about Window Object
window.location.href;
window.location.href = 'https://www.womenintechallies.com/';
window.history.back();

//Variables
//Primitives … String, Symbol, Number, Boolean, Undefined, NULL
//Objects … Arrays, functions, object literals

var name = "Susan";

let company = "Cardinal Solutions";
let age = 39;

const height = 68.4;
const skyDirection = "up";

age = 40; // let allows for changes
//height = 67; this will error because created using const - no changes


//----Scope Example
// i IS NOT known here
// j IS NOT known here
// k IS known here, but undefined
// l IS NOT known here

function loop(arr) {
    // i IS known here, but undefined
    // j IS NOT known here
    // k IS known here, but has a value only the second time loop is called
    // l IS NOT known here

    for( var i = 0; i < arr.length; i++ ) {
        // i IS known here, and has a value
        // j IS NOT known here
        // k IS known here, but has a value only the second time loop is called
        // l IS NOT known here
    };

    // i IS known here, and has a value
    // j IS NOT known here
    // k IS known here, but has a value only the second time loop is called
    // l IS NOT known here

    for( let j = 0; j < arr.length; j++ ) {
        // i IS known here, and has a value
        // j IS known here, and has a value
        // k IS known here, but has a value only the second time loop is called
        // l IS NOT known here
    };

    // i IS known here, and has a value
    // j IS NOT known here
    // k IS known here, but has a value only the second time loop is called
    // l IS NOT known here
}

loop([1,2,3,4]);

for( var k = 0; k < arr.length; k++ ) {
    // i IS NOT known here
    // j IS NOT known here
    // k IS known here, and has a value
    // l IS NOT known here
};

for( let l = 0; l < arr.length; l++ ) {
    // i IS NOT known here
    // j IS NOT known here
    // k IS known here, and has a value
    // l IS known here, and has a value
};

loop([1,2,3,4]);

// i IS NOT known here
// j IS NOT known here
// k IS known here, and has a value
// l IS NOT known here

// --- "This" & Scope

var myFunction = function () {
    console.log(this); // this = global, [object Window]
  };
  myFunction();
  
  var myObject = {};
  myObject.myMethod = function () {
    console.log(this); // this = Object { myObject }
  };
  
  var nav = document.querySelector('.nav'); // <nav class="nav">
  var toggleNav = function () {
    console.log(this); // this = <nav> element
  };
  nav.addEventListener('click', toggleNav, false);

  //More "this"
var nav = document.querySelector('.nav'); // <nav class="nav">
var toggleNav = function () {
  console.log(this); // <nav> element
  setTimeout(function () {
    console.log(this); // [object Window]
  }, 1000);
};
nav.addEventListener('click', toggleNav, false);