const coding = ["js","ruby","python","cpp","java"];


//const print = (val)=>console.log(val);

//coding.forEach(print)

//******************************** Reduce ********************* */

const arr = [1,2,3]

const val =  arr.reduce((accumulator, current) =>
    { 
        
      console.log(accumulator) 
      return accumulator+current; 


    } , 0)
// console.log(val)