/* Loops are the basis of many manipulations done in Javascript. The ability to move through a set of data predictably allows us to take advantage of 
* the speed that computations can be done. By combining the ability to loop, or move through a container like an array incrementally,
* or, print a string of numbers to the console, and conditional statement chains, ie: if, else if, else. 
* We can manipulate any number of given data points within, so long as we can resolve the state they are to 
* a boolean. a good example is seen in the classic "fizzbuzz" problem. 
*/
// first we define a function fizzbuzz
function fizzBuzz() {
// next we initialize a for loop, setting our increment, or i as = 1. we then give the termination condition, in this case i < 101
// this loop will start at 1, and while it runs, it will check to see if i is < 101, since i is 1, it will execute the code below. 
// we also add 1 to i for each iteration, in order to make the loop achieve the termination condition. here seen as i++
    for (var i = 1; i < 101; i++) {
        //we then set a conditional statement to check against. in this case if i is 
        if (i % 15 === 0) {
          console.log("Fizzbuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
        console.log(i);
        }
    }


  
}
