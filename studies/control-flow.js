/*Control flow structures are another fundamental in programming, and JavaScript is no exception. The ability to specify when our code will run, 
* and what states dictate what will be executed. There are many control structures, including conditionals, loops and functions. 
* These tools allow us to save time by not writing a seperate function for each action we need. Given the below array, we can access the values using
* bracket notation.
*/
var arr = [1,2,3,4];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

/* the above doesnt raise any problems. we get a nice clean console output of the first three values, but its easy to see how this could become a problem. 
* we are working with a small list here, so its not the worst way to access things, its quick and to the point. but we know the position of the
* values we want. and we know the location within the array. what if our array is larger. and what if we dont know what exactly is in it. we need 
* to be able to have the ability to check through the array, and we need to be able to check for a condition. often this boils down to checking 
* for a boolean. if(some state exists){run this code} is a powerful way to conditionally apply code. if the boolean is true, the code gets run.
*/ 

var fibonacci = [ 0,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,];
function listNumbers(arr, i = 0){
    if(i === arr.length)return;
    console.log(arr[i]);
    listNumbers(arr, ++i);
    
}
listNumbers(fibonacci);

/*Here we pass the work off to the computer. we use a function, because we want to do something. we declare listNumbers, accepting an argument, and an
* assignment to our variable i, which we will use to index through the array. we then set up a conditional statement if i equals the length of the 
* array passed in when we call it, we return. since i = 0, our function will console log the value of the argument at our current index, or i value
* we then recursively call the function, but we increment i by 1 as it calls. this causes us to move through the array, 1 item at a time and output them
* we can chain together any number of these, we can include if else statement chains, we can use loops to dictate actions, we can assign, or change
* variables. we can call functions inside functions. endless combinations can be stacked to enable a myriad of processes
* with control structures we can create a complex flow of proccessing in only a few lines of code. our fizzbuzz example works well here also
* with its chain of if, else if, else. dictating the flow of the program.
* we can also use a switch statement. if we have a limited number of cases, that wont change, a switch may be the best option, ie the days of the week
*/
let time = '14';
let message = '';
switch (new Date().getDay()) {
    case 0:
    if(time < 12){
        message = "good morning"
    }
        break;
    case 1:
    if(time < 16){
        message = "Good Afternoon"
    }
        break;
    case 2:
        if(time < 24){
        message = "Good Evening"
    }
}

// in the above we will get the message "Good Afternoon"