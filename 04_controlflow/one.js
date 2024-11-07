// const temp = 500;
// if(temp>=500) console.log("Greater"),   // Bad code writing
// console.log("No")  


/// ******************** Switch Case ******************************

const month = 3;
switch(3)
{
    case 1 :
        return "January"
    case 2 :
        return "February"
    case 3:
        console.log("March")
            break        
    case 4 :
        return "April"
    default :
    return "Incorrect Input"
}


/// **************************88 Nullish Coalescing operator *************************8


/// if value if undefined ,assigns a value written after ??
var val
let res = val??"Undefined"
// console.log(res)

/// *************************** Conditional Operator ************************************8

const quantity = 5;
const price = quantity>3?3*5:0;
console.log(price)