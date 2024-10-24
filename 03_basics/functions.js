//*******************************  Rest Operator ******************* */

function calc(...val)
{
    return val;
}

//console.log(calc(200,700,56))  // can pass multiple arguments with one variable as a argument



// ********************************** Interesting part ****************************


//console.log(calc(2))  // This is accessible before function's declaration
function calc(value)
{ 
   return value+1
}


//console.log(calcVal(5)) // This is not accessible before function's declaration  - ERROR!
const calcVal = function(val)
{
   return val+1;
}

//****************************** This Keyword ****************************** */

function print()
{
   let user = "Rupa"
   console.log(this.user)  // prints undefined
   console.log(this) // prints window object
}

//print()  

const func = function()
{
   let user = "rupa"   // prints undefined
   console.log(this.user)
   console.log(this) // prints window object
}

//func(); 

const arrowFunc = ()=>
{
   let user = "rupa"   // prints undefined
   console.log(this.user) // prints empty object  !!Important
   console.log(this)
}

arrowFunc()
