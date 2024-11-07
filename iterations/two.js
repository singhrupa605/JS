const myObj = {
    "js" :  "javascript",
    "cpp" : "cpp",
    "rb" : "ruby",
    "c#" : "c Sharp"

}

// for(const key in myObj)  // FOR IN lOOP
// {
//     console.log(`${key} : ${myObj[key]}`)
// }

const langs = ["javscript", "java","python", "c++"]

for(const key in langs)  // FOR IN lOOP
{
    console.log(`${key}`)  // Prints 0,1,2,3
    console.log(langs[key])
}


