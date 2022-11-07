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