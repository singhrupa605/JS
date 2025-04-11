const User = {
    
        __email : "sng@gmail.com",
        __password : "3289",

        get email()
        {
            return this.__email
        },
        set email(newEmail)
        {
            this.__email = newEmail
        },
        get password()
        {
            return this._password
        },
        set password(newPassword)
        {
            this._password = newPassword
        },



}

let rupa = Object.create(User)

console.log(rupa.__email)