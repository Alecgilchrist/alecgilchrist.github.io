/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'Cat';
animal['name'] = 'Whiskers';
animal.noises = [];
console.log(animal)
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises =[];
noises[0] = 'meow';
noises.unshift('growl');
noises.push('chirp');
console.log(noises.length);
console.log(noises.length-1);
console.log(noises)




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
animal.noises.push('yowl')
animal.noises.push('hoot')

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * dot or bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 * direct bracket notation or looping
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck)
console.log(animals);
var dog = { species: 'dog', name: 'Tom', noises: ['yowl', 'bow-wow', 'bark', 'woof'] }
var parrot = { species: 'parrot', name: 'Lizzy', noises: ['scream', 'sing', 'hello', 'yowl'] }
animals.push(dog, parrot);
console.log(animal, animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []; // because its a list
function getRandom(input){
    let max = input.length;
    let index = Math.floor(Math.random() * Math.floor(max));
    return index;
}
var friendsList = (animals[getRandom(animals)].name);
friends.push(friendsList)
console.log(friendsList)
console.log(friends);
animals[0].friends = friends

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
