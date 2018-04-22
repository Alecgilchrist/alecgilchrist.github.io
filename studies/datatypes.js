/*
* There are a number of datatypes in JavaScript. We have need of datatypes to allow us to handle tasks that otherwise would not make sense.
* take the following, var x = 'Hello ' + 1; here we are giving the computer a command that would make no sense without datatype. we cant just add
* 1 to Hello, as hello doesnt have any numerical value. beacuse we have defined hello as a string, or a series of characters, the compiler will treat our
* + as a concatenation. so x will = a string "Hello 1". without Datatypes, very simple needs in our program could not happen.
* 5 data types that are primitives, and are copied by value
* Boolean - a true or false value. 
* NaN - a value representing not a number, can occur when aritmetic is preformed on text
* Null - an intentional nothing, never seen in the "wild" it is placed in a program to say this is meant to be nothing
* Undefined - indicates a lack of value, like a declared but unassigned variable, or a function that doesnt return a value.
* Number - Any rational number, some other real numbers are available through methods, 
* String - a series of characters
* and our complex datatypes, that are copied by reference
* primitve datatypes are immutable, we can reassign a variable from a primitive type, but we are replacing, not changing
* Object - a variable that contains many values, stored by key:value pairs. Useful for storing information that we dont need ordered, but need to 
* be accessable. 
let person = {
    nameFirst: 'Alec',
    nameLast: 'Gilchrist',
    favoriteColor: 'orange'
}
* here we dont need to know the location of nameFirst in our object. If it contained hundreds of values, we wouldnt care where the name got buried,
* but we would want to access it by . notation when we look for a specific thing.
* Array - a 0 indexed list
* function - a set of statements that performs a task or resolves to a value. 
* infinity functions much as it does in mathematics
* NEGATIVE infinity has a nummber of rules that make it function differently than mathematical infinity
* The value of Number.NEGATIVE_INFINITY is the same as the negative value of Infinity property.
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