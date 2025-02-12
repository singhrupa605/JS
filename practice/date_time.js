const myDate  = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
const newDate = new Date("4-11-2012")
console.log(newDate.toLocaleString())

console.log(newDate.toLocaleString('default',{month :"long" }))