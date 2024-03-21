// Array of Currrent users
let current_users = ["Usman" , "ali" , "Areeba" , "Zain" , "Osama"]

// Array of New users
let new_users = ["Hamza" , "Ayesha" , "Ali" , "Mahad" , "Areeba"]


// Loop through new_users to check for usernames availability
new_users.forEach(new_one_user => {
    // Making a condition for username already exits and save in our_conditon variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
        
     // Print different messages using If-Else statements
    if(our_condition){
                    console.log(`Sorry ${new_one_user} is already taken!`)
        }else{
            console.log(`This Username ${new_one_user} is available`)
        }
})