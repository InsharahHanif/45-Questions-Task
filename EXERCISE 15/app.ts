let guestList = ["Yusra Api", "Anum Ani", "Ayesha Ani"];
let dontcome = guestList[1];
console.log(dontcome,"nahi ah sakta");
guestList.splice(1,1,"Shazia Ani");
guestList.forEach(guest => console.log(`SALAM ${guest},Would you like to dinner with me ?`));