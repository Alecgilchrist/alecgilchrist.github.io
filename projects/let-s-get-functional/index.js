// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-alecgilchrist');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */
 // nested arrays to smaller nested arrays
    function chunks(arr, chunkLen){
        var chunkList = [];
        var chunkCount = Math.ceil(arr.length/chunkLen);
        for(var i = 0; i < chunkCount; i++){
            chunkList.push(arr.splice(0, chunkLen));
        }
    return chunkList;
}
// nested arrays to strings
    function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
};
// counting function
// function countValues(array) {
 
// 	var counted = [];
// 	// make a copy of the input array
// 	var copy = array.slice(0);
 
// 	// first loop goes over every element
// 	for (var i = 0; i < array.length; i++) {
 
// 		var myCount = 0;	
// 		// loop over every element in the copy and see if it's the same
// 		for (var w = 0; w < copy.length; w++) {
// 			if (array[i] == copy[w]) {
// 				// increase amount of times duplicate is found
// 				myCount++;
// 				// removes copies
// 				delete copy[w];
// 			}
// 		}
 
// 		if (myCount > 0) {
// 			var a = new Object();
// 			a.item = array[i];
// 			a.count = myCount;
// 			counted.push(a);
// 		}
// 	}
 
// 	return counted;
// };
var maleCount = function(array) { 

 const filtered = _.filter(array, function(person, i, people){
	if(person.gender === 'male'){
	    return person.gender
	}
 });
 return filtered.length;
};

// var maleCount = function(array) {
//     let count = 0
//     _.filter(array, function(value, i, collection){
//         if(value.gender === 'male'){
//         count++
//         }
//     })
// return count
// };

var femaleCount = function(array){
    const genders = _.map(array, function(person, i, people){
        return person.gender;
    })
   const counts = _.reduce(genders, function(total, gender){
        if(!total[gender]){
            total[gender] = 1
        }else{
            total[gender] += 1
        }
        return total
    }, {})
    return counts.female
    
};

var oldestCustomer = function(array){
    let oldestAge = 0;
  return _.reduce(array, function(total, value, i){
        if(value.age > oldestAge){
            oldestAge = value.age
            total = value.name
        }
        return total;
    }, '');
}

var youngestCustomer = function(array){
    let youngestAge = 100;
  return _.reduce(array, function(name, value, i){
        if(value.age < youngestAge){
            youngestAge = value.age
            name = value.name
        }
        return name;
    }, '');
}

var averageBalance = function(array){
    let count = array.length
    let sum = function(sum, account) {
        return sum + Number(account.balance.replace(/[^0-9\.-]+/g,""));
    }
    
    return _.reduce(array, sum, 0) / array.length
}

var firstLetterCount = function(array, letter){
    let count = 0;
    _.each(array, function(person, i, collection){
        let personName = person.name.toLowerCase();
        if(personName[0] === letter.toLowerCase()){
            count++
        }
    });
    return count;
};
var friendFirstLetterCount  = function(array, customer, letter){
    let count = 0
    _.each(array, function(person, i, people){
        if(person.name.toLowerCase() === customer.toLowerCase()){
            _.each(person.friends, function(friend, i, friends){
                let target = friend.name
                if(target[0].toLowerCase() === letter.toLowerCase()){
                    count++
                }
            })
        }
      })
  return count
};

var friendsCount = function(array, name){
    const peoples = _.map(array, function(person, i, people){
        return person.name
    })
    let ourFriends = []
     _.each(array, function(person, i, people){
                _.each(person.friends, function(friend, i, friends){
                    if(friend.name === name){
                        ourFriends.push(person.name)
                    }
                })
               
     })
     return ourFriends
}
          
var topThreeTags = function(array){
        const tags = _.map(array, function(person, i, people){
        return person.tags
    })
    // attempt to use reduce
    let topThree = []
     const mergedTag = flatten(tags)
     const reduced = _.reduce(mergedTag, function(total, tag, i){
         if(!total[tag]){
             total[tag] = 1
         }else{
             total[tag] = total[tag] + 1
         }
         return total
     }, {})
     _.each(reduced, function(value, key, collection){
         if(value > 2){
             topThree.push(key)
         }
     })
     return topThree

     
//     let topTags = []
//     const mergedTag = flatten(tags)
//     const singleTags = _.unique(mergedTag)
//     const tagsCheck = chunks(mergedTag, 1)
//     const mergeSingles = flatten(tagsCheck)
//     const counted = countValues(mergeSingles)
//     _.each(counted, function(value, key, counted){
//         if(value.count > 2){
//             topTags.push(value.item)
//         }
//     })
// return topTags
// }
};

var genderCount = function(array){
    const genders = _.map(array, function(person, i, people){
        return person.gender;
    });
    return _.reduce(genders, function(total, gender, i){
        if(!total[gender]){
            total[gender] = 1;
        }else{
            total[gender] = total[gender] + 1;
        }
        return total;
    }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
