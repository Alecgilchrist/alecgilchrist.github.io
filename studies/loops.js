/* Loops are the basis of many manipulations done in Javascript. The ability to move through a set of data predictably allows us to take advantage of 
* the speed that computations can be done. By combining the ability to loop, or move through a container like an array incrementally,
* or, print a string of numbers to the console, and conditional statement chains, ie: if, else if, else. 
* We can manipulate any number of given data points within, so long as we can resolve the state they are to 
* a boolean. a good example is seen in the classic "fizzbuzz" problem. 

 first we define a function fizzbuzz
*/
function fizzBuzz() {
// next we initialize a for loop, setting our increment, or i as = 1. we then give the termination condition, in this case i < 101
/* this loop will start at 1, and while it runs, it will check to see if i is < 101, since i is 1, it will execute the code below. 
 we also add 1 to i for each iteration, in order to make the loop achieve the termination condition. here seen as i++
*/   
    for (var i = 1; i < 101; i++) {
        //we then set a conditional statement to check against. in this case if i is divisible by 15 without a remainder
        if (i % 15 === 0) {
          console.log("Fizzbuzz");
        /*we console.log a string fizzbuzz if the result is 0
         our next two conditional statements do the same, for 3 and 5, and strings fizz, buzz, respectively    
         */
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
        // here, if none of our conditions are met, we just log the number that i currently is.
        console.log(i);
        }
    }
    }
    fizzBuzz();
/* this program will print the numbers 1 - 100, replacing certain numbers with words, when the number meets our specifications.
* this is a powerful tool as it allows us to handle large data sets predictably, and quickly. above we just logged our output. while nice to see
* that our tool works. It is much more useful to have your loop store the values in some way. that way we can utilize the reults later, if needed.
* in the next example. we do a very similar action, usuing a while loop, rather than a for loop, to iterate through a defined range of numbers, and then
* rather than output those numbers to the console, we store them in an array. which we could then use/manipulate further. We want to accept 2 numbers
* if num1 is smaller than num2, we want an array that counts up from num1 to num2. if num2 is greater, we want an array counting down to num1.
*/
  function range(start, end) {
/* here, we want our function to accept 2 parameters. we will call them start and end, as they are going to be create a group of numbers that exists
  between 2 numbers.
*/ 
    let rangeArray = [];
// we start by creating a variable rangeArray, as an empty array literal
    if(start < end){
        let i = start;
        while(i < end + 1){
            rangeArray.push(i);
            i++;
        }
/*above, we initialize our while loop inside a conditional if statement. we dont want the loop to run here if end is larger
*/
        return rangeArray;
/* if it passes, and start is < end, we let our increment become start, our first number, and until it is less than end + 1, add i to the rangeArray
*/     
    }
    else if(end < start){
      let i = start;
      while(i > end - 1){
        rangeArray.push(i);
        i--;
      }
/*the above else if only runs if the first number is larger, and if so, 
counts down backwards, adding itself every iteration to rangeArray      
*/
      return rangeArray;
    }
}
range(40, 20);

// we can also loop over objects. using a for in loop 
function printObjectValues(object) {
  for(var key in object){
    console.log(object[key]);
  }
}
// we can even loop over an array of arrays, or even an array of objects.

let arrOfObjects =[{one: 1, two: 2, three: 3}, {one: 4, two: 5, three: 6},{one: 7, two: 8, three: 9}]
function printValuesOfNested(array){
    let values = [];
    for(let i = 0; i < array.length; i++){
        values.push(array[i].two)
        
    }
    console.log(values);
}
printValuesOfNested(arrOfObjects);

/*here we have created a function that allows us to populate an new array values, and populate it with the key named two from our objects
* inside of arrOfObjects. Loops can be utilized in many ways. we have been incrementing by one on our loops,but we can increment in any value
* that we want. we can do i + 2 to skip over every other item. we can start our index at any set location, we can dynamically set it using data
* from another source. ie: for(let i = arrOfObjects.length / 2; i < array.length; i + 4). We can combine variations on these manipulations to modify 
* data from deep within containers. hitting each one, or skipping over known and unneeded data
* we can also approach this from a recursive side, and use a recursive function to achieve the same result. 
*/

var test =[1, 2, 3, 4, 5, 6, 7, 8, 9];

function printArrayValuesInRecurse(array, i = 0) {
  if(i === array.length)return;
    
    console.log(array[i]);
    printArrayValuesInRecurse(array, ++i);
  
}
printArrayValuesInRecurse(test);