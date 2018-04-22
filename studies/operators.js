/*
*  ***Arithmetic Operators***
* +	 Addition 
* -	 Subtraction 
* *	 Multiplication	
* /	 Division
* %	 Modulus (division remainder)
* ++ Increment
* -- Decrement
* we can stack as many Arithmetic operators as needed to achieve our result
function maths(number){
    return (number + number - ((number/2) % number)) * number
}
maths(10) ~ 150

* ***Assignment Operators***
*  = x = y is the same as x = y	x = 5	
* += x += y	 is the same as x = x + y		
* -= x -= y	 is the same as x = x - y		
* *= x *= y	 is the same as x = x * y		
* %= x %= y	 is the same as x = x % y
* /= x /= y	 is the same as x = x / y		
* ***String Operators***
* + and += concatenate strings
* < and > compare the ASCII values of the characters. The higher alphebetical order, the lower the numerical value
* ***Comparison Operators***
* ==	equal to(doesnt take type into account, and thus should be avoided)
* ===	equal value and equal type
* !=	not equal(no type here either, another to avoid)
* !==	not equal value or not equal type
* >	greater than
* <	less than 
* >=	greater than or equal to
* <=	less than or equal to

2 < 4

* ***Conditional (Ternary) Operator***
* ? the ternary operator assigns a value to a variable based on a condition.
* variablename = (condition) ? value1:value2 ie var overTen = (num < 10) ? 'under 10':'over 10'
* ***Logical Operators***
* && and
* || or
* ! not

if(2 > 1 && 3 > 2){
    return true
}

* typeof "Alec" - Returns string 
* typeof 3.14 -  Returns number
* typeof NaN -  Returns number
* typeof false -  Returns boolean
* typeof [1, 2, 3, 4] - Returns object
* typeof new Date() - Returns object
* typeof function () {} - Returns function
* typeof myThing - Returns undefined (if myThing is not declared)
* typeof null - Returns object
* we can test for object truly by 

function typeOf(value) {
    if(value === null){
        return 'null';
    }
    else if(value instanceof Date){
        return 'date';
    }
    else if(Array.isArray(value)){
        return 'array';
    }
    else{
        return typeof value;
    }
}
*/