// alert('Hello world');

let favoriteFood = 'Borsch';
let borschAge = 1222;
document.write(
  'My favorite food is ' +
    favoriteFood +
    "! That's it! And " +
    favoriteFood +
    ' is very old! I was invented ' +
    parseInt(borschAge) +
    2 +
    ' years ago!'
);

let name = 'John';
let welcomeMessage1 = "Hello, I'm";
let welcomeMessage2 = 'and I say to you: "Hello!"';
// console.log(welcomeMessage1 + " " + name + " " + welcomeMessage2);
console.log(`${welcomeMessage1} ${name} ${welcomeMessage2}`);

let annesAge = 27;
let anne = {
  name: 'Anne',
  age: annesAge,
  child: {
    name: 'Joe',
    age: 2,
  },
};
console.log(anne.child.name);
anne.child.name = 'Stesha';
console.log(anne.child.name);
delete anne.age;
console.log(anne);
anne.age = 35;
anne.child.favoriteGame = 'Football';
console.log(anne);

let currentUserName = 'sam';

let userAges = {
  anne: 27,
  sam: 112,
  megan: 97,
};
console.log(userAges[currentUserName]);
userAges[currentUserName] = 12;
console.log(userAges[currentUserName]);

let numberArray = [1, 2, 3];
let mixedArray = [
  1,
  'two',
  numberArray,
  { age: 5, name: 'kseniia', ukrinian: true },
];

console.log(numberArray[1]);
// to get access to an property of an Object, which is the part of array
console.log(mixedArray[3].ukrinian);
// to get access to the item of the Array, which is the part of bigger array
console.log(mixedArray[2][1]);
console.log(numberArray.length);

// Primitive Data types doesnt change, they keep the copy of data, which was previosly created
let a = 1;
let b = a;
console.log(a);
console.log(b);

a = 3;
console.log(a);
console.log(b);

// Complex data types change, they doesnt keep the copy of data, which was previosly created, the keep only a link to the data
let car1 = {
  model: 2019,
  color: 'red',
};
let car2 = car1;
console.log(car1);
console.log(car2);

car1.model = 2021;

console.log(car1);
console.log(car2);

// To understand the type of data we can use the command typeof
let myVariable = 'Hello world';
console.log(typeof myVariable);
myVariable = 10;
console.log(typeof myVariable);

// If statements
let age = 23;
if (age === 20) {
  console.log('You are 20 years old!');
} else if (age === 21) {
  console.log('You are 21 years old!');
} else {
  console.log('You are neither 20 nor 21 years old');
}

let day = 'Monday';
if (day === 'Sunday') {
  console.log("It's weekend");
} else if (day === 'Satturday') {
  console.log("It's weekend");
} else {
  console.log("It's not weekend. Boo!");
}

// Comparisson in if statements
console.log(1 === 2); //Reads 1=2, which is not right, so result is 'false'
console.log(1 !== 2); //reads 1 is not equal 2, so result is 'true'
console.log(1 < 2); // Reads 1 is less than 2, so result is 'true'
console.log(1 > 2); // Reads 1 is more than 2, so result is 'false'
console.log(1 <= 2); // Reads 1 is less OR equal to 2, so resalt is 'true'
console.log(1 >= 2); // Reads 1 is more OR equal to 2, so result is 'false'

console.log(1 !== 2); // this is true because 1 is NOT equal to 2
console.log(!true); // this is false because it's NOT true

//JavaScript will try to auto-convert any value into a boolean (true or false)
age = 20;
if (age) {
  console.log(
    'This is true statement, cause JS convert the presense of age in condition as boolean true'
  );
}

//JS will convert as true:
if ('text') {
  console.log('This is true cause string is not empty');
}
if (' ') {
  console.log('This is true, cause space is also counted as not empty string');
}
if (42) {
  console.log('This is true, cause any nuber more than 0 JS convert as true');
}
if ([2, 4]) {
  console.log('This is true, cause array JS convert as true statement');
}
if ([]) {
  console.log(
    'This is true, cause JS convert as a true statement even empty arrays'
  );
}
if ({ age: 24 }) {
  console.log('This is true, cause JS convert an object as true');
}
if ({}) {
  console.log(
    'This is true, cause JS convert as true even empty objects without any properties'
  );
}

//JS will convert as false:
if ('') {
  console.log('true');
} else {
  console.log('This is false, cause empty string is converted as false');
}

if (0) {
  console.log('true');
} else {
  console.log('This is false, cause 0 is converted as false');
}

if (null) {
  console.log('true');
} else {
  console.log('This is false, cause "null" is converted as false');
}

if (undefined) {
  console.log('true');
} else {
  console.log('This is false, cause "undefined" is converted as false');
}

// Comparison with two characters (== and !=) will check for the same content and try to convert values if they have different data types.
console.log(10 == '10'); // Will be true, despite different data types
console.log(10 === '10'); // Will be false cause of different data types

// Several conditions with AND OR operators
age = 17;
if (age > 12 && age < 20) {
  console.log('a teenager!');
} // The operator && will only be truthy if both sides are truthy.

//Ternary operator - helps to make if statements more more compact in code
age = 20; // here we don't use "let" cause variable is set before

let result = null;

// This is an example of if statement that can be writen with ternary operator
// if (age > 19) {
//   result = 'It is not teenager';
// } else {
//   result = 'It is teenager';
// }

result = age > 19 ? 'It is not teenager' : 'It is teenager';
console.log(result);

//A loop is used to do something multiple times without having to write it multiple times.
//this loop will return numbers from 1 to 9
for (let i = 1; i < 10; i++) {
  console.log(i);
}
// loop check the value of i, then it check the condition i < 10, then it runs the resukt in {}, then it sets the new value of i i++ (it means i + 1).
// with the new value loop check again the condition and returns result in {}
// it will repeat over and over again until condition is met

//to set a new value we can also use i--, which means i minus 1

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// This is example of loop used for array
// Here i is set to 0 because it means the index (position) of array element. And we alway count here from 0
// condition is ages.length - length property returns the number (amount) of elements in array. In our case we have 5 elements in array. So if i (index/position of array element) is less then 5, we meet the condition
// then loop runs the code in {}, where we ask to console.log array element with index i but minus 2
// the first result will be array element with index(i) 0, which is 20 minus 2 = 18
// then the loop will run the action i++, and set index to 0+1=1
//so it would repeat over and over again until i has a value of 5, at which point it would stop.
let ages = [20, 30, 25, 22, 31];
for (let i = 0; i < ages.length; i++) {
  console.log(ages[i] - 2);
}

// LOOP for array of objects with if statement
let personeAge = [
  { name: 'Lili', age: 28, country: 'Australia' },
  { name: 'John', age: 9, country: 'France' },
  { name: 'Laura', age: 15, country: 'Brasil' },
  { name: 'Kiril', age: 19, country: 'Ukraine' },
];

for (let i = 0; i < personeAge.length; i++) {
  if (personeAge[i].age > 13 && personeAge[i].age < 19) {
    console.log(
      `${personeAge[1].name} is a teenager from ${personeAge[i].country}`
    );
  } else if (personeAge[i].age >= 19) {
    console.log(
      `${personeAge[i].name} is an adult from ${personeAge[i].country}`
    );
  } else {
    console.log(`${personeAge[i].name} is a kid from ${personeAge[i].country}`);
  }
}

// While loops are similar to loops with for. They run the code, while condition is met
// For while loop variable should be set before the loop
// we write condition in ()
// then in {} we write the action that should be run and next action i++ (to add 1 to the value of i)
let i = 1;

while (i < 5) {
  console.log(i);
  i++;
}

// do ... while loops
// check the condition after running the function
i = 1;

do {
  console.log(i);
  i++;
} while (i < 5);

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Functions are used to make it easier to run the code several times without dublicating it
// Function consists of this parts:
// Keyeword function - shows JS that function is going to be used
function printParagraph() {
  document.write(`<ul><li>The function keyword (which announces that a function is being declared)</li>
<li>A function name (here, printArrayDetails)</li>
<li>A set of parentheses to hold any input(s) you want to pass into the function block (these are called parameters and arguments: more on those in a little bit)</li>
<li>A function block surrounded by curly braces (the code that will be executed when the function is used; the thing that the function does)</li></ul>`);
}

// To run the function we need to call it, using the name and ()
printParagraph();

// In () after function name we wright the parameters, that will be used inside the function
function greatingMessage(firstName, lastName) {
  document.write(
    `<p>Hello, my name is ${firstName} and my surename is ${lastName}</p>`
  );
}
// Wen we call the function in () we write arguments, that will be sent to function, so it can use it
greatingMessage(`Ksenia`, `Zhykina`);
greatingMessage(`Richard`, `Bogun`);

// We can use results of function i our firther code
// For example, we define a function that will return a result of summ of two parameters
function sum(parametr1, parameter2) {
  return parametr1 + parameter2;
}

// Then we set a variable, which value will be result of our function.
// At the same point we call the function and send attributes to it
let functionResult = sum(20, 5);
document.write(`<p>${functionResult} - This is result of function</p>`);

// You can assign a function to a variable and then use that variable as a function. It’s called a function expression.
let add = function sumResult(value1, value2) {
  return value1 + value2;
};

// Now we will use the result of variable-finction to set tht value for another variable
let result1 = add(300, 200);
document.write(`<p>${result1} - This is a result of variable-function</p>`); // returns as 500

// let result2 = sumResult(300, 200);
// document.write(`${result2}`); // Uncaught ReferenceError: sumResult is not defined cause sumResult is not set as a function

// We can use functions without name. But in this case it should be assigned to the variable
let message = function (firstName, lastName) {
  document.write(
    `<p>Hello ${firstName} ${lastName}! We are happy to great you with anonymous function</p>`
  );
};
message(`Ksenia`, `Zhykina`);

// Callback function - when result of one function becomes a parame
function function1(x) {
  return x + 15;
}

function function2(x) {
  return x + 3;
}
console.log(function1(2)); //here we call function 1 and set attribute for it 2. Result of function will be 2 + 15 = 17
console.log(function2(function1(6))); // here we call function 2 and set attribute for it - result of function one (with attribute 6).
//Result of function 1 is 6 + 15 = 21. we console log it
//Result of function 2 is 21 + 3 = 24. we console log it

// You can write a function in such as way as to expect an input.
//Then, when the function is called, it will place whatever input it’s given into its code.
// That's how we can use one function for different types of data, not rewriting it over and over again
//For example, we have universal function
function universalFunction(differentData) {
  return differentData * 100;
}
//Now we will call this function for different data
let dataTypeOne = universalFunction(20);
console.log(dataTypeOne);

let dataTypeTwo = universalFunction(50);
console.log(dataTypeTwo);

// Here some example with return
// With the help of return we can use results of function in our future code
function divide(dividend, divisor) {
  if (divisor === 0) {
    return `You’re trying to divide by zero.`;
  } else {
    let result3 = dividend / divisor;
    return result3;
  }
}
console.log(divide(4, 2));
console.log(divide(7, 0));
console.log(divide(1, 4));
console.log(divide(12, -3));

//Variables you define within functions aren’t available outside that function.
//Conversely, anything that’s been defined/declared outside of a function can be used within that function.
let x = 5;

function foo() {
  let y = 10;
  console.log('From inside foo(): x = ' + x);
  console.log('From inside foo(): y = ' + y);
}

foo();
console.log('From outside foo(): x = ' + x);
// console.log('From outside foo(): y = ' + y); //return in console as undefined, cause this variable is defined inside function and is not avaliable outside

// We can also make a declaration of function iside object
// Mention that we don't give a name to the function
let dog = {
  type: 'pug',
  age: 3,
  name: 'Margot',
  speak: function (userName) {
    document.write(
      `Wooff! Hello ${userName}! This is dog speaking with the function inside object`
    );
  },
};
// We call the function with the help of object name and key name (where the function is set)
dog.speak('Ksenia');

// THIS When you specify a function in an object, you can access the other properties or functions of the object inside of the function with this
let dog1 = {
  type: 'pug',
  age: 3,
  name: 'Margot',
  speak: function (userName) {
    document.write(
      `<p>Wooff! Hello ${userName}! This is ${this.name} speaking with the function inside object</p>`
    );
  },
};
dog1.speak('Volodymyr');

//Predefined functions
console.log('Hello!'); // apeare as simple message in console
console.warn('Warning!'); // appear as yelow massage in a yelow line
console.error('Error!'); // appear as red message in a red line

let c = 'hello there';
let d = 'world';
console.log(c.concat(d)); // will connect two strings together in one
console.log(c.slice(3)); // will cut first 3 letters from the string
// console.log(c.substr());
console.log(c.split());
console.log(c.length);
// console.log(c.toUpperCase());

// alert(`Hello, this is result of alert`) // appear as a pop up banner
// let name3 = prompt(`Please eneter your name`) //appear as pop-up with ability for user to write
// console.log(name3) //we will see in consele user input in prompt
// let confirmation = confirm(`Do you confirm this`); // user is able to say yes or no
// console.log(confirmation); // we will see true result, if yes. And false result - if no

// Objects and arrays also come with a set of predefined functions to help with and simplify common operations.
// will return an array of all the properties (or keys) that have been defined in the object reference you pass to the keys function:
let kenny = {
  name: `Anne`,
  age: 38,
  children: [],
};

let allProperties = Object.keys(kenny); // will return an array with key names
console.log(allProperties);

let animals = [`cat`, `dog`, `tiger`, `pig`];
console.log(animals.length); // return the number of items in array
animals.push(`cow`); // will add item to the end of array
console.log(animals);
animals.unshift(`bull`); // add the item at the beginning of array
console.log(animals);
animals.pop(); // removes the LAST item
console.log(animals);
animals.shift(); // removes the FIRST item
console.log(animals);
console.log(animals.indexOf(`tiger`)); // retern the index of item that is in ()
console.log(animals.indexOf(`lion`)); // returns -1 cause there is no such item in array

let numbers = [1, 2, 3, 4];
console.log(numbers.reverse()); // reverses array, puts the last item to the first place
