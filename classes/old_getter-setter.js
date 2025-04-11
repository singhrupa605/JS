function User(email, password) {

    this._email = email
    this.password = password


    Object.defineProperties(User, {

        email:
        {
            get: function () {
                return this._email
            },
            set: function (newEmail) {
                this._email = newEmail
            }
        },
        password:
        {
            get: function () {
                return this._password
            },
            set: function (newPassword) {
                this._password = newPassword
            }
        },


    })

}

const js  = new User("sng@gmail.com","234")
console.log(js.password)