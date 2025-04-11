let des = Object.getOwnPropertyDescriptor(Math, "PI")

let user = {
    username: "Rupa",
    password: "123",
    email: "sng@gmail.com",
    getUsername: function () {
        console.log(username + 123)
    }
}



Object.defineProperties(user, {
    username:

    {

        enumerable: false,

    },
    password:
    {
        enumerable: false,

    },


}
)


// console.log(Object.getOwnPropertyDescriptor(user,"name"))

for (let [key, value] of Object.entries(user)) {
    if (typeof value !== "function") {
        console.log(key, " ", value)
    }

}