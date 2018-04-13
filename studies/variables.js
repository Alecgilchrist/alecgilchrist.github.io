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

/* there are multiple ways to declare a variable, and where they are, and what scope we want them to interact with, as well as if we want them 
*to be mutable plays into which of these declarations we use. var will hoist to the top of its scope. this can be useful, but can also cause  
*unwanted side effects. Javascript does not use block scoping for var. though var will not hoist past its parent function.
*when we are declaring variables, in particular inside of loops, and conditionals. where var will be hoisted, it can be better
*to use the declaration let. let is block scoped. and can be a little easier to manage where it will go, and what will happen to it
*
*
*/

