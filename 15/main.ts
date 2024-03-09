let guestList = ["Duaa","Areesha","Huda","Ayesha"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi Aa sakta");

guestList.splice(0, 1, "Sana");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to have dinner with me?`));