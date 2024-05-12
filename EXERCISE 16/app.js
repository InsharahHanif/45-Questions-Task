// creating a guest list array
var guestList = ["Yusra ", "Anum ", "Ayesha "];
//making variable for those guest who cant come  
var dontcome = guestList[1];
// print the name of guest who cant come
console.log(dontcome, "nahi ah sakti");
//add or remove values from guest list array
guestList.splice(1, 2, "Shazia ");
//print message for bigger table.
console.log("Good news ! We have found a bigger table for dinner");
//adding a new value at starting index of array
guestList.unshift("Abida ");
//adding a new value at ending index of array
guestList.push("Yumna ");
//get a middle index of our array
var middleindex = Math.floor(guestList.length / 2);
//addind a new guest to middle index of array
guestList.splice(middleindex, 0, "Yaman ");
//print message of updated list 
console.log("updated list of our guests");
//sendind a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("SALAM ".concat(oneguest, ",Would you like to dinner with me ?")); });
