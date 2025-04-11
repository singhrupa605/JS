class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get password() {
        return `#&!!!${this._password}***`
    }

    set password(newPassword) {
        this._password = newPassword
    }
    get email() {
        return this._email.toUpperCase()
    }

    set email(newEmail) {
        this._email = newEmail
    }

}




const Rupa = new User("sng@gmail.com", "!23");

console.log(Rupa.email)