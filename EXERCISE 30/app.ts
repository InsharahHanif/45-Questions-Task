// creating a array
let userNames = ["Saima","Sara","Areesha","Admin","yusra"];

// using foreach loop on array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, Would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, Thankyou for logging in again.`)
    }
})