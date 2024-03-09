// Creating a guest list array
var guestList = ["Duaa", "Areesha", "Huda", "Ayesha"];
// Making variable for those guests who can't come
var dontCome = guestList[0];
// Printing the name of guests who can't come
console.log(dontCome, "Nahi aa saktay hain");
// Add or remove values from guest list array
guestList.splice(0, 1, "Sana");
// Message print for bigger table
console.log("Good news! We have found a bigger table for dinner.");
// Adding a new guest at starting index of array
guestList.unshift("Faiza");
// Adding a new guest at ending index of array
guestList.push("Sundus");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Hayyam");
// Print Message of Updated List
console.log("Updated List of our Guests");
// Sending invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",would you like to have dinner with me")); });
// Informm that only two guests can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");
// Using while-loop to remove guests from the array until two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I can't invite you to dinner"));
}
// Sending invitations to the last two guests on the list
console.log("Invitation to the last two guests");
guestList.forEach(function (lasttwo) { return console.log("Luckily ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two guests from the list
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
