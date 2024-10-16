let date = new Date();
//console.log(date.toLocaleDateString(
 //   "en-In"))

   

    // const myDate = new Date(2023,1,23)
    // console.log(myDate.toDateString())
    // console.log(myDate.toLocaleDateString("en-In")

    // )
    // const myDate2 = new Date(2023,1,23,15,14,87)
    // console.log(myDate2.toDateString())
    // console.log(myDate2.toLocaleTimeString("en-In")
    // )
    // const myDat3 = new Date("01/23/2024") 
    // console.log(myDat3.toDateString())//Tue Jan 23 2024
    // console.log(myDat3.toLocaleDateString("en-In") //23/1/2024

    // )


    //********************************************* TIME STAMP ********************************************************//


        // let dateObject = new Date("01/23/2024")
        // let timestamp1  = dateObject.getTime()
        // let timestamp2 = Date.now()

   ///Now both timestamps can be compared

    //********************************************* Other Methods ********************************************************//


    let dateObject = new Date("01/23/2024")
    console.log(dateObject.getDay())
    console.log(dateObject.toDateString().split(" ")[1]) // to get the Month Name