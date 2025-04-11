let user  = {
    name : "Rupa"
}

let array = ["name" , "age"]

Object.prototype.getName = function()
{
    console.log("this is name")
}

Array.prototype.sayHello=function()
{
    console.log("Hello World")
}

//console.log(array.sayHello()) // works

//console.log(user.sayHello()) // doesnt work



// Setting Protypes of Objects 


let userTwo=  {
    age : 34,
    __proto__ : user
}
// console.log ("X " , userTwo.name)

let demoUser  = {
    add : function(a,b)
    {
            console.log(a+b)
    }
}

Object.setPrototypeOf(userTwo,demoUser)

// userTwo.add(5,3)


Object.prototype.getJob = function(job)
{
    return job
}

// console.log(user.getJob("Doctor"))
