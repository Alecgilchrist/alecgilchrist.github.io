/*
*  ***Arithmetic Operators***
* +	 Addition 
* -	 Subtraction 
* *	 Multiplication	
* /	 Division
* %	 Modulus (division remainder)
* ++ Increment
* -- Decrement
* ***Assignment Operators***
*  = x = y is the same as x = y	x = 5	
* += x += y	 is the same as x = x + y		
* -= x -= y	 is the same as x = x - y		
* *= x *= y	 is the same as x = x * y		
* %= x %= y	 is the same as x = x % y
* /= x /= y	 is the same as x = x / y		
* ***String Operators***
* + and += concatenate strings
* ***Comparison Operators***
* ==	equal to
* ===	equal value and equal type
* !=	not equal
* !==	not equal value or not equal type
* >	greater than
* <	less than
* >=	greater than or equal to
* <=	less than or equal to
* ***Conditional (Ternary) Operator***
* ? the ternary operator assigns a value to a variable based on a condition.
* variablename = (condition) ? value1:value2 ie var overTen = (num < 10) ? 'under 10':'over 10'
* ***Logical Operators***
* && and
* || or
* ! not
* typeof "John" - Returns string 
* typeof 3.14 -  Returns number
* typeof NaN -  Returns number
* typeof false -  Returns boolean
* typeof [1, 2, 3, 4] - Returns object
 -eturns object
* typeof new Date() - Returns object
* typeof function () {} - Returns function
* typeof myCar - Returns undefined (if myCar is not declared)
* typeof null - Returns object
* we can test for object truly by 

function typeOf(value) {
    // YOUR CODE BELOW HERE //
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