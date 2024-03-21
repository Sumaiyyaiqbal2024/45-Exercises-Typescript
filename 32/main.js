// Array of Currrent users
var current_users = ["Usman", "ali", "Areeba", "Zain", "Osama"];
// Array of New users
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
// Loop through new_users to check for usernames availability
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exits and save in our_conditon variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print different messages using If-Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
