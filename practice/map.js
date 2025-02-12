const map = new Map();
map.set("Name","Rupa")
map.set("age",26)
map.set("Address","Hyderabad")
map.set("Occupation","Engineer")

// for(const [key, value] of map)
// {
//   console.log(key, " : ", value)
// }

const myObject = {
    "javascript" : ".js",
    "ruby" : ".rb",
    "java" : ".java",
    "python" : ".py",
    "css" : ".css",

}

// for(const key in myObject)
// {
//     console.log(`${key} : ${myObject[key]}`)
// }

const langs  = ["javascript","css","html","Java"]

// for(const key in langs)
    
//     {
//         console.log(langs[key])
//     }

langs.forEach((val)=>
{
    console.log(val)
})