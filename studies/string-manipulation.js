//strings are text in javascript. If we need a value to be a word, phrase, character, or we want compiler to understand, these are words not commands.
var message = 'I am a string'
/*when used, the value of message remains as those characters, including whitespace, indexed justg like an array.
*we can use bracket notation to pull out a specific char, or we can loop over the string via the index just like we would an array
*ie in console.log(message[0]); would give us "I". we can use this index access parts of a string, but
*strings are immutable. You cannot change a character within a string with something like var myString = "abbdef"; myString[2] = 'c'. 
*The string manipulation methods such as trim, slice return new strings.so assihgning a new variable, and running a manipulation on a string allows us
*to make changes to our code, without changing the original string. 
*charAt()	Returns the character at the specified index (position)
*charCodeAt()	Returns the Unicode of the character at the specified index
*concat()	Joins two or more strings, and returns a new joined strings
*endsWith()	Checks whether a string ends with specified string/characters
*fromCharCode()	Converts Unicode values to characters
*includes()	Checks whether a string contains the specified string/characters
*indexOf()	Returns the position of the first found occurrence of a specified value in a string
*lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
*localeCompare()	Compares two strings in the current locale
*match()	Searches a string for a match against a regular expression, and returns the matches
*repeat()	Returns a new string with a specified number of copies of an existing string
*replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
*search()	Searches a string for a specified value, or regular expression, and returns the position of the match
*slice()	Extracts a part of a string and returns a new string
*split()	Splits a string into an array of substrings
*startsWith()	Checks whether a string begins with specified characters, often combined with toLowerCase() to enable strict compare
*substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
*substring()	Extracts the characters from a string, between two specified indices
*toString()	Returns the value of a String object
*toUpperCase()	Converts a string to uppercase letters
*trim()	Removes whitespace from both ends of a string
*valueOf()	Returns the primitive value of a String object
*various manipulations are shown below using methods, and operators like < > +
*/
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    var charNew = char.toLowerCase();
    var stringNew = string.toLowerCase();
    return stringNew.endsWith(charNew);


    
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    return stringOne + stringTwo




}

/**
 * Given any number of Strings, return all of them joined together seperated by a space.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "my name is Ben";

 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    return args.join(' ');

}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if(stringOne.length > stringTwo.length){
        return stringOne;
    }
    else {
    return stringTwo;
}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if(stringOne === stringTwo) {
        return 0
    }
    else if(stringOne < stringTwo){
        return 1
    }
    else {
        return -1;
    }
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if(stringOne === stringTwo) {
        return 0
    }
    else if(stringOne > stringTwo){
        return 1
    }
    else {
        return -1;
    }
}



