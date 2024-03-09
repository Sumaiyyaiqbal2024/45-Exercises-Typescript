var guestList = ["Duaa", "Areesha", "Huda", "Ayesha"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi Aa sakta");
guestList.splice(0, 1, "Sana");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to have dinner with me?")); });
