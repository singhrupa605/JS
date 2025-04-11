class User{


    constructor(username)
    {
         this.username = username;
    }

     logMe()
     {
        console.log(`My name is : `, this.username)
     }
}


class Teacher extends User
{
    constructor(username,name,email,password)
    {   super(username)
        this.name = name;
        this.email = email
        this.password = password
    }
}

const tutor = new Teacher("RS" , "Rupa",  "sng@gmail.com","123abc")
tutor.logMe()