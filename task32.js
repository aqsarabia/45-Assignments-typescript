// Q32:Checking Usernames: Do the following to create a program that simulates 
// how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of 
// the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print
//  a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
var currentId = ["aqsa", "Sehar", "Dua", "fatima"];
var newusers = ["Amna", "aqsa", "fatima", "Shaista"];
var currentId_lower = currentId.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, newusers_1 = newusers; _i < newusers_1.length; _i++) {
    var newuser = newusers_1[_i];
    if (currentId_lower.includes) {
        newuser.toLowerCase();
    }
    {
        console.log("Sorry. ".concat(newusers, ", that name is already taken "));
    }
    {
        console.log("yes ".concat(newuser, " is still in list "));
    }
}
