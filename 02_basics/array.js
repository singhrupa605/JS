// let arr = [4,6,8,1,10, {a:10}];

//*************** Shallow Copy Example ********************** */
// let shallowcopy = [...arr]
// shallowcopy.a = 5;


//*************** Deep Copy Example **************** */

// let deepcopy = JSON.parse(JSON.stringify(arr)); // Json.parse and stringify is used for making deep clone of the array, it breaks the //reference of the clone to the original object
// deepcopy.a = 24
// console.log(deepcopy)

//let array = new Array(1,2,4,5,6,8)
//console.log(array.indexOf(9))
// let newArr = array.join(" ")
// console.log(newArr)