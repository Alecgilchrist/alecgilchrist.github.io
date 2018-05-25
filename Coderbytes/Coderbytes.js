// 1. Simple Adding, add all the numbers from range 1 - number
function SimpleAdding(num) { 

  return (num*(num+1))/2;
         
}
SimpleAdding(5);

//2. check numbers if a < b, true, if they are the same return  -1, if a > b, false
function CheckNums(num1,num2) { 

 if(num1 < num2){
     return true;
 }
 if(num1 === num2){
     return -1;
 }
 return false;
         
}
CheckNums(10, 1);

//3. Factorial
function FirstFactorial(num){
    if(num === 0){
        return 1;
    }
    return num * FirstFactorial(--num);
}
FirstFactorial(5)
//4. LetterCapitalize
function LetterCapitalize(str) { 
      var words = str.split(' ');
    let i=0;
    while(i < words.length) {
       let word = words[i];
        words[i] = word[0].toUpperCase() + word.slice(1);
        i++;
    }
    return words.join(' ');
         
}
LetterCapitalize('hello world')
//5. Longest Word
function LongestWord(sen) { 
    let longest = '';
    let splitSen = sen.split(' ')
    for(let i = 0; i < splitSen.length; i++){
        if(splitSen[i].length > longest.length){
            longest = splitSen[i];
        }
    }
    return longest
}
//6. Alphabet soup Put str in alphebetic order
 function AlphabetSoup(str) { 
    return str.split('').sort().join('');
}
//7. Kaprekars Constant
function KaprekarsConstant(number){
  function constant(number, counter = 1) { 
    let str = String(number)
    let num = str.split('')
    let larger = num.sort(function(a, b){
        return b - a;
    }).join('')
    let smaller = num.sort(function(a, b){
      return a - b
    }).join('')
  let result = larger - smaller;
 console.log(result)
if(result === 6174){
    return counter;
    }
return constant(result, ++counter)
    }
return Number(constant(number))
}
//8. Pentagonal number
function PentagonalNumber(num) {
 return (num * (num - 1) * 5 / 2 + 1);  
         
}
//9. Time convert
function TimeConvert(num) { 
let hours = String(Math.floor(num / 60));
let mins = String(num % 60);
  if(Number(hours) === 0){
      return mins
  }
  return  hours + ':' + mins
         

}
//10. Letter changes
function LetterChanges(str) { 

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newStr = "";
  let check;

  for (let i = 0; i < str.length; i++) {
    check = alphabet.indexOf(str[i]);
    if (check === 25) {
      newStr = newStr + "a";
    } else if (check === -1) {
      newStr = newStr + str[i];
    } else {          
      newStr = newStr + alphabet[check + 1];
    }
  }
  
  return newStr.replace(/[aeiou]/g, (letter) => {return letter.toUpperCase()});  
         
}
// simple symbols
function SimpleSymbols(str) { 
  let strTest = '#' + str + '#';
  for (var i = 0; i < strTest.length; i++) {
    if (strTest[i].match(/[a-z]/i) !== null) {
      if (strTest[i-1] !== '+' || strTest[i+1] !== '+') { 
        return false;
      }
    }
  }
  return true;
}