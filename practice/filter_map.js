const langs  = ["javascript","css","html","Java"]
// const arr = langs.filter((val)=>langs.indexOf(val)>0)
// console.log(arr)

// const newArr = langs.map((val)=>`${val}:${langs.indexOf(val)}`)
// console.log(newArr)

const nums = [1,2,3,4,5,6,7,8]

// const map = nums.map((val)=>val*10).filter((num)=>num>30)
// console.log(map)

const reducedArray = nums.reduce((acc,curr)=>

    acc+curr)
console.log(reducedArray)