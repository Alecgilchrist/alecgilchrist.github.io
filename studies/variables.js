/*Variables
* A variable is a way for us to store information in our programs.
* they start with a declaration
var a;
const b = 2;
let c;
* As seen above, we have 3 ways we can declare a variable. We dont always have to assign a value right away t a variable, sometimes, we
* need to declare them, so they are available, but we dont need them to have a value yet. declaring with const, is a bit different, as
* we must assign it an unchanging value when we declare it. We can then assign a value to our variables
a = 1
c = 3
* since we have already declared our variables, we can use an assignment operator to give them a value. we can also reassign var or let variables
* by use of another assigment operator.

a = 3 
c = 4
* we can pass our variables into functions, or even into the assignments of other variables
c = a + a

*
* where they are, and what scope we want them to interact with, as well as if we want them 
* to be mutable plays into which of these declarations we use. var will hoist the declaration to the top of its scope. this can be useful, but can also cause  
* unwanted side effects, such as interference from other functions, or a varible getting reassigned or changed inadvertantly. 
* Javascript does not use block scoping for var. though var will not hoist past its parent function.
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

