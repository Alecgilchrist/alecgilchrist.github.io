//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let values = []
    for(var key in object){
        values.push(object[key])
    }
    return values
} 
//or return Object.values(object);

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let output = []
    let itsVals = []
    for(var key in object){
        itsVals.push(object[key])
    }
    let i = 0;
  while(i < itsVals.length){
      if(typeof itsVals[i] === 'string'){
          output.push(itsVals[i])
      }
      i++
      
  }

   return output.join(' ') 
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array'
    }
    else if(typeof collection === 'object'){
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var words = string.split(' ');
    for(var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word[0].toUpperCase() + word.slice(1);
    }
    return words.join(' ');
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let name = object.name[0].toUpperCase() + object.name.slice(1)
    return 'Welcome ' + name + '!'

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let name = object.name[0].toUpperCase() + object.name.slice(1);
    let species = object.species[0].toUpperCase() + object.species.slice(1);
    return name + ' is a ' + species
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
 if(object.hasOwnProperty('noises') && object.noises.length !== 0 && object.hasOwnProperty('noises') === true){
      return object.noises.join(' ')
 }
 return "there are no noises"
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  let storage = string.split(' ');
  return storage.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
   object.friends.push(name);
   return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(Object.keys(object).length !== 0 && object.friends.includes(name)){
        return true
    }
    return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
    for(let person of array){
        if(person.name !== name && !person.friends.includes(name))
        notFriends.push(person.name)
    }
    function noFriends(name, array){
  const notFriends = array.filter(function(person){
    if(person.name !== name && !person.friends.includes(name)){
    return person
    }
  });
 // console.log(notFriends)//
    return notFriends.map(function(person){
        return person.name
        
});

}
*/
function nonFriends(name, array){
     const notFriends = array.filter(person => person.name !== name && !person.friends.includes(name))
     return notFriends.map(person => person.name)
}
    
/*
 function nonFriends(name, array){
    let nonFriend = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].friends.includes(name) === false && array[i].name !== name){
            nonFriend.push(array[i].name)
        }
    }
    return nonFriend
}
/*
*

function nonFriends(name, array) {
    let friends = [];
    let notFriend = [];
    let check = 0;
    for(let i=0; i<array.length; i++){
        if(name === array[i].name){
            check = array[i];
        }else{
            friends.push(array[i].name);
        }
    }

    if(check === 0){
        return friends;
    }

    for(let i=0; i<friends.length; i++){
        if(check.friends.indexOf(friends[i]) === -1){
            notFriend.push(friends[i]);
        }
    }

    return notFriend;
}
*/
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
function removePropertie(object, array){
    for(let prop of array){
        delete object[prop]
    }
    return object
}
*/
function removeProperties(object, array) {
    let props = Object.getOwnPropertyNames(object)
    let toRemove = []
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < props.length; j++){
            if(array[i] === props[j]){
             toRemove.push(props[j])   
            }
       
       }
       for(let k = 0; k < toRemove.length; k++){
            delete object[toRemove[k]]   
    }
}
}
/*
for(let i = 0; i < array.length; i++){
    delete object[array[i]
*/
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
function dedup(array){
  let unique = []
  for(let i=0; i < array.length; i++){
    if(unique.indexOf(array[i]) === -1){
      unique.push(array[i])
    }
  }  
  return unique
  
}

*/
function dedup(array){
let unique = []
    for(let prop of array){
        if(unique.indexOf(prop) === -1){
            unique.push(prop)
    }
   
}
 return unique
}

/*function dedup(array) {
     return Array.from(new Set(array));

}
*/
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}