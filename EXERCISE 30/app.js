// creating a array
var userNames = ["Saima", "Sara", "Areesha", "Admin", "yusra"];
// using foreach loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", Thankyou for logging in again."));
    }
});
