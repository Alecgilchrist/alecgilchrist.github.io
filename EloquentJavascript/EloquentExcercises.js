// 2.1 triangle of hastags
for(let line = '#'; line.length < 10; line += '#'){
  console.log(line);
}

// 2.2 fizzbuzz
function fizzBuzz() {
   let i = 0;
  while(i<101){
    if(i % 15 === 0){
    console.log("FizzBuzz");
}
    else if(i%3 === 0){
    console.log('Fizz');
}
    else if(i%5 === 0) {
    console.log('Buzz');
    }
    else{
        console.log(i);
    }
  i++;
    
  }
}
fizzBuzz()

// 2.3 chessboard
function chessBoard(num){
let board = '';
let size = num;
for(let x = 0; x < size; x++){
  for(let y = 0; y < size; y++){
    if((x + y) % 2 !== 0){
      board += '#';
    }else{
      board += ' ';
    }
  }
  board += '\n';
}
console.log(board);
}
chessBoard(10)

// 3.1 minimum
function min(a,b){
	if(a < b){
    	return a
    }
  	else{
  		return b
  }
}

// 3.2 recursion of even Number
function isEven(n){
	if(n < 0){
    	 return isEven(-n);
    }
  	else if(n === 0){
    	return true;
    }
  	else if(n === 1){
    	return false;
    }
  return isEven(n - 2);
}

//count Bs
function countBs(str){
  let count = 0;
	for(let i = 0; i < str.length; i++){
    	if(str[i] === 'B'){
        	count++
        }
    }
  return count;
}

// 3.3 Bean Counting 
function countChar(str, letter){
  let count = 0;
	for(let i = 0; i < str.length; i++){
    	if(str[i] === letter){
        	count++
        }
    }
  return count;
}

// 4.1 Range
function range(start, end, step){
  let result = [];
  if(step === undefined){
    if(start < end){
      step = 1;
    }
    else{
      step = -1
    }
  }
  if (step > 0) {
    for (let i = start; i <= end; i += step){
      result.push(i)
    }
  } else {
    for (let i = start; i >= end; i += step){
      result.push(i);
    } 
  }
  return result;

}
 range(10, 1, -2) 

// 4.1 Sum
function sum(arr) {
  return arr.reduce(function(seed, element, i){
    return seed + element
  })
  
}

// 4.2 reverse an Array
function reverseArray(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

// 4.2 Reverse Array in Place
function reverseArrayInPlace(array) {
    let i = 0
    while(i < array.length){
        array.splice(i, 0, array.pop());
        i++
    }
    return array
}

// 4.3 A list
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

// 4.3 List to array
function listToArray(list){
let result = [];
  function worker(list){
  if(list.rest === null){
    result.push(list.value)
    return result  
    
  }
  result.push(list.value)
  return worker(list.rest)
}
  return worker(list)
  
}

// 4.3 prepend
function prepend(value, list) {
  return {value: value, rest: list};
}

// 4.3 recursive nth value of list
function nth(list, num){
    if(!list){
        return undefined;
    }
    else if(num === 0){
        return list.value;
    }
    else{
        return nth(list.rest, --num)
    }
}

// 4.4 Deep Compare
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

// 5.1 Flatten
let arrays = [[1, 2, 3], [4, 5], [6]];
let flattened = arrays.reduce((flat, toFlat) => flat.concat(toFlat),[]);

// 5.2 A Loop
function loop(value, func, update, body){
  for(let i = value; func(value); value = update(value)){
  	body(value);
  }

};
// 5.3 Everything
function every(array, func) {
  for (let element of array) {
    if (!func(element)) return false;
  }
  return true;
}

function secondEvery(array, func) {
  return !array.some(element => !func(element));
}
// 5.4 Dominant writing direction


function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length === 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
// utulity functions for dominant direction
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}
