/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables 
 * are named identifiers that can point to values of a particular type, like a Number, String, 
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we 
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our 
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName; 

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized 
 * it to anything 
 */ 
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john


// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString"

/*there are multiple ways to declare a variable, and where they are, and what scope we want them to interact with, as well as if we want them 
* to be mutable plays into which of these declarations we use. var will hoist to the top of its scope. this can be useful, but can also cause  
* unwanted side effects. Javascript does not use block scoping for var. though var will not hoist past its parent function.
* when we are declaring variables, in particular inside of loops, and conditionals. where var will be hoisted, it can be better
* to use the declaration let. let is block scoped. and can be a little easier to manage where it will go, and what will happen to it
* var's declaration is hoisted to the top of its scope. so we have access to it earlier in the code than it actually is. The assigned value of the variable
* is NOT hoisted. just the declaration. variables declared with var will not leave the local scope of the function they are in. 
* they will however ignore block scope. we can simulate block scoping with anonymous functions, but this wont always solve our issue. let comes in as a 
* good way to handle this, as it will not hoist past block scoping. We can therefore use it in if, else statements without having unintended side
* effects. 
* 
* console.log(thisOne) here, we will recieve an error, as the variable this one will not leave the local scope of its function 
* function wontJump(){
*    var thisOne = 1;
* }
* 
* if this were not a function, but instead say an if statement, we would be able to console thisOne. it will remain undefined, but will
* NOT throw an error.
*
* console.log(thatOne)
* if(something we want to happen){
*    var thatOne = 2
* }
* here, we can access thatOne. it again will remain undefined, but we could access and use that variable, we can assign it a value higher up in our code
* and use it any way we like. but we may not want for our variables to be able to be hoisted. we can use let, or const. As they are blocked scoped, we
* wont have the same issues.
*
* console.log(thirdOne)
* if(something else we want to happen){
*    let thirdOne = 3
* }
*
* here we are back to getting an error, just as in our function example above. Being able to lock variables into a scope can help us prevent
* unintended side effects from happening. and can allow us to use the same name for variables within seprate structures. we can use let/const to 
* allow us to have a variable that is much more predictable, as well as using the same name for variable that do the same work within different
* structures.
*/

function luckyNumber (firstNumber, secondNumber) {
    var numMessage = "Your lucky number is ";
    // this inner function has access to the outer function's variables, including the parameter
function calculateLucky () {
    return numMessage + (firstNumber + 2*(secondNumber));
}
  return calculateLucky()
}
luckyNumber(10,32)

/* here we create a closure. our function luckyNumber, has 2 parameters firstNumber and secondNumber. we declare and define a variable numMessage
* that says 'Your lucky number is ' we then declare a function to calculate our lucky number. our nested function calculateLucky, has access to 
* all of luckyNumbers parameters and variables. even after luckyNumber has been used, we can use calculateLucky. the variables are stored by reference
* not by value. so even if they change value later on in the code, we still have access to them in our calculateLucky()
*/