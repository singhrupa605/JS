function setUserName(username)
{
    this.username = username;
}

function createUser(username,email,password)
{
    setUserName.call(this,username)
    this.email = email
    this.password = password
    
}

const user  =  new createUser("rupa","123@gmail.com","r2962")

  console.log(user)