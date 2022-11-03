alert('Hello world');

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

