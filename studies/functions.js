
/*
* Functions are one of our most utilized building blocks in JavaScript at the most basic level, a function takes an argument, and returns 
* a value. A function declaration, or function statement consists of the function keyword, followed by
* The name of the function. A list of parameters to the function, enclosed in parentheses and separated by commas,
* and the JavaScript statements that define the function, enclosed in curly brackets, { }. 
*/
function add(number, number2){ // here we declare and name a function add, that accepts 2 arguments, here our parameter show we expect numbers
    return number + number2; // here we give the action to be passed to our parameters, and the value for our function to return once called
}// here we end the code block that define the function
var added = add(2, 2); // here we call, or use the function passing in 2 2's as arguments. these arguments replace our parameters

/* 
* we now have a variable, added that contains the value that our function resolves to. in this case, as we passed in 2, and 2, our function
* has taken them and added them. Now we can use added anywhere in our code, and we can use the function add as many times as we need throughout
* we dont always need to name a function. we can declare it inside a function and create closures on the parent function to retain the use of 
* passed arguments far later in the code, and outside of our anon functions scope. We also dont have to pass in any arguments. we can define a
* function to pull from a variable in the global scope. here we have our variable added being reassigned by * 2. we can use the  
*/
console.log(added);

function multiply(){
    added*= 2;
}
multiply();

console.log(added);
/*
*Some of the above can have unintended side effects. Added is available on the global scope, we can run into problems with it being modified 
* by other things. We can take advantage of closures here, and nest all of this together. JavaScript supports nested functions, and they
* are a powerful tool in allowing us to have more predictable code, and more pure functions. we can utilize nested functions to allow us to save 
* the values by reference, allowing us to make changes, while keeping some privacy, and utilizing closure, we can do some pretty cool things.
* make changes rather than having functions splayed everywhere through our code, we have ways of encasing, or nesting them together. in
* the above, our variable added no longer makes much sense, it may have been an added number at one point. but now its a multiplied number. and 
* we changed the value by reassigning the variable with a simple dataype. Our original added value is no longer usable. what if we need to see what 
* changes happen to a number as we make changes to it. The below code, makes use of closure, when a function uses a variable from outside its scope,
* ie a function using a parameter from its parent function. Here, we can have a number, and manipulate it in multiple ways, saving some, or all of its 
* changes, and because we make use of copy by reference, and closures abilitys to keep things seperate, we can easily return to our original value
*/
function manipulateNumber(number){
  let manipulated = number;
  return{
    add: function(numberToAdd){
      manipulated += numberToAdd;
  },
    show: function(){
      return manipulated;
    },
    set: function(newNumber){
      manipulated = newNumber;
        
    },
    multiplier: function(numberToMultiply){
      manipulated *= numberToMultiply;
    },
    reset: function(){
      manipulated = number;
    },
    save: function(){
      numberStorage.push(manipulated);
    }
  };
}
var numberStorage = [];
var number1 = manipulateNumber(5); // here we pass in the number 5 to our manipulate number function by assigining it to a variable 
console.log(number1.show()); // here we can use our show function, to check the value
number1.set(10); //here we can change the value of our number in manipulation
console.log(number1.show()); //check the changes
number1.save(); //push the changes to our storage array
number1.multiplier(10); // multiply by 10 
console.log(number1.show());
number1.save(); //push the new change to our array
number1.reset(); //return the number to its original value
console.log(number1.show());
console.log(numberStorage); //check the list of changes


