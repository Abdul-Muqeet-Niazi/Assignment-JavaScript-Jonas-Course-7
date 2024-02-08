'use strict';

// Default Parameters in Functions (Important Topic);

const bookings = []

function flightBooking(FlightNumber, Passenger = 1, Price = 500 * Passenger) {    // Default Value
    const booking = {
        FlightNumber,
        Passenger,
        Price
    };
    console.log(booking);
    bookings.push(booking);
}

flightBooking('FA32', 2, 1000); // If a person does not add Passengers or price then what we had to do ? In this case we have to gave a default value;
flightBooking('FA33');
flightBooking('FA34', 4, ); // Now if a person frogets the price then the default value multiply the passsenger with price.
flightBooking('FA35', undefined, 500); // You cant escape the Arguments instead of last! It will gave error.
console.log(bookings);


// How Passing Arguments Works (Important Topic):
const flightNum = 'CR007';
const salman = {
    name: 'Salman',
    passport: 42510078956
};

const checkIn = function (flightNumber, Passenger) {
    // Now here the flight Number is changed for any reason means redefined here
    flightNumber = 'LH249';
    Passenger.name = 'Mr. ' + Passenger.name
    if (Passenger.passport === 42510078956) {
        console.log("Checked In");
        
    } else {
        console.log('Wrong Passport! 🤨');
    }
};

checkIn(flightNum, salman);
console.log(flightNum);     // So here you see that flightNum does not change
console.log(salman);    // While this is changed WHY? 

// Because passing a primitive type to a function is really just the same as creating a copy like this, outside of the function.
// So the value is simply copied.
// On the other hand, when we pass an object to a function, it is really just like copying an object like this. And so whatever we change in a copy will also happen in the original.


// Passing by Values vs. Passing by References (Theory Topic [Important]):

// There are two terms that are used all the time when dealing with functions, which is passing by value, and passing by reference and many experienced programmers that are new to JavaScript have some confusion between these terms and how it works in JavaScript.
// So JavaScript does not have passing by reference, only passing by value, even though it looks like it's passing by reference. So there are languages like C++, where you can pass a reference to any value, instead of the value itself. This works even with primitives,
// so you could pass a reference to the value of five, and then the original value, outside of the function, would be changed. And this is called pass by reference. But once again, JavaScript does not have pass by reference. And I know it's confusing, because as we just learned, for objects, we do in fact pass in a reference.
// For Objects we basically pass a reference to the function, but we do not pass by reference,


// First Class & High Order Functions (Important Topic):
// First Class Functions:
// 1) JavaScript treats functions as first citizens.
// 2) This means that functions are simply values. [Store functions in variables or properties]
const add = function (a, b) {
    console.log(a + b);
}
add(5, 5);
// 3) Functions are just another 'type' of objects. [function present in object]
const counter = {
    value: 32,
    output: function () {
        console.log(this.value++);
    }
}
counter.output();
// 4) Pass functions as arguments to other functions.
const greet = function () {console.log('Hey Leader!')};
addEventListener("click", greet)    // Dont define any button or something else may happened that when you click on every part of screen will show the greet function console.
// 5) Return Function From Functions.
function qoute(text) {
    return function() {
        console.log(text);
    }
};
qoute(`I love the smell of FEAR`);
// 6) Call methods on functions.
// counter.output.bind(someOtherObjects); // Here 'bind' is the method of the functions.

// High Order Functions:
// A function that recieve another functions as an arguments, that returns a new function or both.
const greeting = function () {console.log('Hey Leader! 😉')};
addEventListener("click", greeting);

// Functions that returns new Functions.
function qoute2(text) {
    return function() {
        console.log(text);
    }
};
qoute2(`I love the smell of FEAR`);


// Functions accepting Callback Functions (Most Important Topic 🧐);
const singleWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const firstUpperWord = function(str) {
    const [first, ...other] = str.split(' ')
    return [first.toUpperCase(), ...other].join(' ');
}

// Where "fn" is callBack Function, so in this way we use as the below with parameter as string.
// New Element Discovered: This below ".name" is a method of the function which shows the function name.
const transformer = function(str, fn) {
    console.log(`Original Text: ${str}`);
    console.log(`Transformed Into First Upper Word: ${fn(str)}`);   
    console.log(`Transformed By: ${fn.name}`);  // This ".name" ← ;
};
transformer('Hello Programmar', firstUpperWord);
transformer('Hello Programmar', singleWord);

// Why we use call back function?? Why we dont put directly function into another function??
// Because of: ↓↓

function solution() {
    console.log('Here is the solution ↑'); 
}

function adding(a, b, callBack) {
    console.log(a+b);
    callBack();
}

adding(5, 5, solution);

// Answer is we dont want to gave function name in function as parameter we have once declared a name which we used as function! Exapmle ↓↓
function addings(a, b) {
    console.log(a+b);
    solution();
}
addings(2, 2);
// It will work in same way but here is the confusion which will amaze you for example, I have to add one time solution funcion and other time I want put question funtion but not at the same time:
function solutions() {
    console.log('2'); 
}
function questions() {
    console.log('What is 1 + 1 ?'); 
}

// You will do this way in which you make two different functions + bad practice, for this type we use callback function;
function together() {
    questions();
    console.log('thats one time');
}
function togethers(){
    solutions();
    console.log('thats second time'); 
}
// Power of Call back function It will work in same way but thats professional way↓↓;
function power(callback) {
    callback();
}
power(questions);
power(solutions);

// Functions Returning Functions (Most Important Topic 🧐):

// This way the return functions written ↓↓;
function greetMachine(greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}
// This way the return functions execute ↓↓;
const greeter = greetMachine('Assalam-o-laikum');
// Now you might thing then how we wrote the second parameter '(name)', Here's the way;
greeter('Programmar');
// Where variable {greeter} becomes the name of return function and you can put as parameter in it.
// Here is also the second way;
greetMachine('Programmar is on')('Fire 👏');
// Where first parameter become function and second parameter become return function;

// Now trying on Arrow Functions, Which looks weird;
const greetArrowFunction = greet => name => {
    console.log(`${greet} ${name}`);
}
greetArrowFunction('Hello')('Sir');

// Call and Apply Methods on Functions {Means "Functions Methods"};
// Example: Make an Airline Booking Site;
const lufthansa = {
    name: "Lufthansa",
    iataCode: 'LH',
    bookings: [],
    book: function (FlightNum, name) {
        console.log(`${name} booked a seat on ${this.name} flight ${this.iataCode}${FlightNum}`);
        // Now push these data into bookings;
        this.bookings.push({Airline: this.name, Code:`${this.iataCode}${FlightNum}`}) 
    }
};
lufthansa.book(69, 'Sikandar Azam');
lufthansa.book(69, 'Sikandar Azam');
console.log(lufthansa.bookings);

// Now, Lufthansa company made another airline called Enthista Airline,
const enthista = {
    name: 'Enthista',
    iataCode: 'EN',
    bookings: [],
    // Now you might think that we copy the upper function and paste it here it can also be done but it is a bad Practice!! So ↓↓,
}
// Here we make a copy of that;
const books = lufthansa.book;
// books(23, 'William Son')   // It will show undefined bcz you might know that in regular function, when "this" is called it shows undefined. Always remember the THIS keyword depends on the way of function called.
// Wants to see the error uncomment it ↑↑;
// Now for this case there are three function methods "CALL", "APPLY" & "BIND".
// "CALL" method;
books.call(enthista, 70, "Williams Burk");
// Here books is now a function and functions looks like objects and objects have methods so in this way functions also have methods which is "CALL", "APPLY" & "BIND".
// Where call has parameter which means 'points towards to' is "enthista".
books.call(enthista, 71, "Sofam");
books.call(lufthansa, 72, "Joe Stor");   // You can also apply on lufthansa.
console.log(enthista.bookings);
// You can also make more and more airline and apply function methods.

// "APPLY" method;
// APPLY methods only use on arrays not directly call in parameter just like in CALL mehtods.
const flightbook = [73, "Jonas"]
books.apply(enthista, flightbook); // But it does not used anymore here is a new way,
books.call(enthista, ...flightbook); // Always use call methods!! the result will be same

// So in Summary we have another tool in our tool box which is CALL & APPLY.

// "BIND" Method:
// The bind() method allows an object to borrow a method from another object without copying.
// Returns a copy of the given function (Makes another function) with the specified "this" value, and initial arguments (if provided).
books.bind(enthista, 23, "Lowandsaki")
// In this way BIND method does not work ↑
// This way BIND method work
const enthista2 = books.bind(enthista);
enthista2(74, 'Henry');
// You can also set permanent value of parameter look;
const enthista3 = books.bind(lufthansa, 75);
enthista3('Kalvin');
enthista3('Schmedtmann');
// Where "75" is permanently locked on every log!

// "BIND" with event listener!
enthista.planes = 5;   // It will make plane property and set value to "5".
enthista.buyPlane = function () {
    console.log(this);
    this.planes++       // It will take the property and increament it!
    console.log(this.planes);
}
document.querySelector(".buy").addEventListener("click", enthista.buyPlane.bind(enthista)); 
// Here it points to the element of class! You have to remember in theory lectures that in event handler function, "THIS" keyword points to the element (which is document.querySelector(".buy")) on which the handler (which is enthista.buyPlane) is attached to.
// Now for the result in increament of planes you want to pass the function in event listener so we will use bind method which returns new function.

// Partial Function / "BIND" using for parameters!
// Partial application starts with a function. We take this function and create a new one with one or more of its arguments already “set” or partially applied. This sounds odd, but it will reduce the number of parameters needed for our functions.
const addTax = (rate, value) => {
    return value + value * rate;
}
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(98));

// Small Challenge! (look out this challenge! it is important 🤨)
const tax = function (rate) {
    return function(value) {
        return value + value * rate
    }
};
console.log(tax(0.23)(90)); // Now here look at this more closely that we have to know that first parameter (0.23) is the (value) argument {means return function} & second parameter (90) is the (rate) argument {means first function}.

// IMMEDIATELY INVOKED FUNCTIONS EXPRESSION (IIFE) [Basic Topic];
// It is the function which is used to immediately call the functions without declaring it or named it, Now its look confusing so here we will look;

// function () {
//     console.log('I am an IIFE Function');
// }

// If you call it like that ↑ then there will be error because javascript cant accept functions without declaring it or named it!!
// SO we put paranthesis with them and immediately call the function!

(function () {
    console.log('I am an IIFE Function');
})();

// It also works on Arrow Functions!

(() => console.log('I am also an IIFE Function'))();

// Now you are thinking why it is used, Well there is no perfect answer but developer used to say that It is important bcz it ensures that code inside IIFE does not interfere with other code or be interfered by another code and so code is safe.

// CLOSURES (MOST IMPORTANT TOPIC)
// In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.
// "OR"
// A closure is the closed over variable environment of the execution context in which a function was created, even after that execution context is gone.
// "OR"
// A Closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserve the scope chain throughout time.
// "OR"
// A Closure makes sure that a function does not loose connection🔗 to variables📃 that existed at the functions birth place.
// "OR"
// A Closure is like a backpack🎒 that a function carries around wherever it goes. This backpack🎒 has all the variables📃 that were present in the environment where the function was created.

// I have wrote all the definitions because most of peoples dont understand this topic due to complex!
// Example;

const secureBooking = function() {
    let passsengerCount = 0;

    return function() {
        passsengerCount++;
        console.log(passsengerCount);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

// SO you are thinking that where the closures are made, but In-fact Closures are not made they are accidently made!
// AND interesting part is  that you cannot access "Closures" and some developer also say that you cant see "closure" but you can see ↓;

console.dir(booker);    // Where in the console click on function and look out the [[scopes]] & click on it where double square bracket means that you cant access and manipulate it, Or even if you try it will show you undefined!

// So you might think where you describe these closures so it can define in DEFINITIONS but if you cant then please you see this video (JavaScript course [Closer Look at Functions {Closures}])!

// Here More Examples About Closures!

let f;
const g = function() {
    let a = 2;
    f = function() {
        console.log(a * 2);
    }
}

g();
f();
console.dir(f); // You can also see the console where 'a' variable is stored!

// Re-assigning Value of 'f':
const h = function() {
    let b = 4;
    f = function() {
        console.log(b * 2);
    }
}

h();
f();
console.dir(f); // Now here "b" variable is stored!

// Last Example;

// New Element Discovered "SET-TIME-OUT" 
// The setTimeout() method allows you to execute a piece of code after a certain amount of time has passed,
// You can think of the method as a way to set a timer to run JavaScript code at a certain time.

const boardingAnnouncement = function(n, wait) {
    let passengersGroup = n/3 ;

    setTimeout(function(){
        console.log(`We are now boarding ${n} passengers`);
        console.log(`There are 3 groups, each with ${passengersGroup} passengers`);
    }, wait * 1000);

    console.log(`We will start boarding in ${wait} seconds`);
}

boardingAnnouncement(18, 5);

// Where "CLOSURES" also retrieve global variable ↓↓;

const boardingAnnouncement2 = function(n, wait) {

    setTimeout(function(){
        console.log(`We are now boarding ${n} passengers`);
        console.log(`There are 3 groups, each with ${passengersGroup} passengers`);
    }, wait * 1000);

    console.log(`We will start boarding in ${wait} seconds`);
}

let passengersGroup = 60 ;
boardingAnnouncement2(180, 5);

// Code Challenge # 1;
// It is the challenge of not basically code but in-fact it is of thinking!

(function() {
    const header = document.querySelector('h1');
    header.style.color = 'grey';

    document.querySelector("body").addEventListener('click', function() {
        header.style.color = 'White'
    })
})();


// ------------------------------------------------------------ Session Completed ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------