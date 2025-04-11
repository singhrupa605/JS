const array = []
// %DebugPrint(array)

array[1] = 2
array[3]  = "Rupa"
array[9] = 10

// console.log(array.length)
// console.log(array)


const newArr = new Array(3)
//console.log(newArr) //  3 Holey Empty Items

newArr[2] = "Rupa"  // array type Downgraded to Holey Packed Elements

const arrayTwo = []

arrayTwo.push("Rupa") // Array type Continuous/packed Elements   --- Better approach than above one


const arrayThree =  []
arrayThree.push(NaN)   // Packed/Continuous Double

arrayThree.push(Infinity)  // Packed/Continuous Double
