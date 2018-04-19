/*
* There are a number of datatypes in JavaScript. We have need of datatypes to allow us to handle tasks that otherwise would not make sense.
* take the following, var x = 'Hello ' + 1; here we are giving the computer a command that would make no sense without datatype. we cant just add
* 1 to Hello, as hello doesnt have any numerical value. beacuse we have defined hello as a string, or a series of characters, the compiler will treat our
* + as a concatenation. so x will = a string "Hello 1". without Datatypes, very simple needs in our program could not happen.
* 5 data types that are primitives
* Boolean - a true or false value. 
* NaN - a value representing not a number
* Null - an intentional nothing, never seen in the "wild" it is placed in a program to say this is meant to be nothing
* Undefined - indicates a lack of value, like a declared but unassigned variable, or a function that doesnt return a value.
* Number - Any rational number, some other real numbers are available through methods, 
* String - a series of characters
* and our complex datatypes
* Object - a variable that contains many values
* Array - a 0 indexed list
* infinity functions as it does in mathematics
* NEGATIVE infinity has a nummber of rules that make it function differently than mathematical infinity
* The value of Number.NEGATIVE_INFINITY is the same as the negative value of the global object's Infinity property.
* Any positive value, including POSITIVE_INFINITY, multiplied by NEGATIVE_INFINITY is NEGATIVE_INFINITY.
* Any negative value, including NEGATIVE_INFINITY, multiplied by NEGATIVE_INFINITY is POSITIVE_INFINITY.
* Any positive value divided by NEGATIVE_INFINITY is negative zero.
* Any negative value divided by NEGATIVE_INFINITY is positive zero.
* Zero multiplied by NEGATIVE_INFINITY is NaN.
* NaN multiplied by NEGATIVE_INFINITY is NaN.
* NEGATIVE_INFINITY, divided by any negative value except NEGATIVE_INFINITY, is POSITIVE_INFINITY.
* NEGATIVE_INFINITY, divided by any positive value except POSITIVE_INFINITY, is NEGATIVE_INFINITY.
* NEGATIVE_INFINITY, divided by either NEGATIVE_INFINITY or POSITIVE_INFINITY, is NaN.
* Infinities can be particularly useful in defining edges, as in Dijkstra's Algorithm
*/