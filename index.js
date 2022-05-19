// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }
};

Person.prototype.poop = function () {
  this.stomach = [];
};

Person.prototype.toString = function personToString() {
  return `${this.name}, ${this.age}`;
};

const personOne = new Person("Mary", 50);

personOne.eat("Beef burger");
personOne.eat("Tuna sandwitch");
personOne.eat("Bread");
personOne.eat("Pasta");
personOne.eat("Shrimp Alfredo");
personOne.eat("Salad");
personOne.eat("Fruit");
personOne.eat("Ice cream");
personOne.eat("Banana");
personOne.eat("Orange");
personOne.eat("Pop tart");
personOne.eat("Fries");
personOne.eat("Onion rings");

console.log("task 1-", personOne.toString());
console.log("task 1--", personOne.stomach);
personOne.poop();
console.log("task 1---", personOne.stomach);
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  return (this.tank = this.tank + gallons);
};

Car.prototype.drive = function (distance) {
  if (this.tank === 0) {
    return `I ran out of fuel at ${this.odometer} miles!`;
  } else {
    return (this.odometer = this.odometer + distance);
  }
};
const hondaAccord = new Car(2014, "30 m/g");

console.log("task 2- ", hondaAccord.fill(0), hondaAccord.drive(77000));
console.log("task2-- ", hondaAccord);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};

const baby1 = new Baby("Anthony", 3, "train toy");
console.log("task 3- ", baby1);
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. window binding 
    - If we don't tell JavaScript what 'this' is it will return the window, except if use strict mode it will return undefined.
  2. implicit binding
    - usually we use it when we have an object with a method built in it, in this case this. will refer to whatever to the left of the dot in the function invokation line.
  3. explicit binding
    - We do that using .call(), .apply(), or .bind() to explicitly pass in an argument to tell JS what object we want this to refer to.
  4. new binding
    - when we want to make a Child construction function from a parent construction function in this case we use this to refer to the newly created object.  
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  console.log("its working!");
  return "bar";
}
foo();
module.exports = {
  foo,
  Person,
  Car,
  Baby,
};
