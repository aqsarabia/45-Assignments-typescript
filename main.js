//Q2:Personal Message: Store a person’s name in a variable,
//  and print a message to that person. Your message should be simple,
//  such as, “Hello Eric, would you like to learn some Python today?”
//  let Personname:string="aqsa"
// console.log('hello' ,Personname,"would you like to learn some typescript today");
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q3:Name Cases: Store a person’s name in a variable, and then print that person’s 
// name in lowercase, uppercase, and titlecase.
// let personName="Aqsa";
// console.log(personName.toLowerCase());
// console.log(personName.toUpperCase());
// console.log(personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase());
// console.log("aqsa\nAQSA\nAqsa");
// Q4:Name Cases: Store a person’s name in a variable, and then
//  print that person’s name in lowercase, uppercase, and titlecase.
// console.log("'Allama Iqbal once said'","Destiny is the prison and chain of the ignorant")
// Q6:Stripping Names: Store a person’s name, and include some whitespace 
// characters at the beginning and end of the name. Make sure you use each 
// character combination, "\t" and "\n", at least once. Print the name once, 
// so the whitespace around the name is displayed. Then print the name after 
// striping the white spaces.
// let WhiteSpace ="\n\tAqsa Rabia\n\t";
// console.log(WhiteSpace);
// let withoutWhiteSpace=WhiteSpace.trim();
// console.log(WhiteSpace);
// Q7:Number Eight: Write addition, subtraction, multiplication,
//  and division operations that each result in the number 8. Be sure to
//  enclose your operations in print statements to see the results.
// console.log(4+4);
// console.log(10-2);
// console.log(2*4);
// console.log(16/2);
// Q8:You should create four lines that look like this:
// console.log(5+3);
// console.log(3-1);
// console.log(3*5);
// console.log(36/6);
// Q9:avorite Number: Store your favorite number in a variable. Then,
//  using that variable, create a message that reveals your favorite number.
//  Print that message.
// let Favouritenumber=3
// console.log("'My favourite number is'",Favouritenumber);
// var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
//     if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
//         if (ar || !(i in from)) {
//             if (!ar) ar = Array.prototype.slice.call(from, 0, i);
//             ar[i] = from[i];
//         }
//     }
//     return to.concat(ar || Array.prototype.slice.call(from));
// };
// Q10:Adding Comments: Choose two of the programs you’ve written,
//  and add at least one comment to each. If you don’t have anything specific to write because your
//  programs are too simple at this point, just add your name and the current date at the
//  top of each program file. Then write one sentence describing what the program does
// var whitespace = "\n\tAqsa Rabia\t\n";
// console.log(whitespace);
// var withoutwhitespace = whitespace.trim();
// console.log(withoutwhitespace);
// // Q11:Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time
// var friendsname = ["Aqsa", "Areeba", "Alia", "Fatima", "Sehar"];
// console.log(friendsname[0]);
// console.log(friendsname[1]);
// console.log(friendsname[2]);
// console.log(friendsname[3]);
// console.log(friendsname[4]);
// Q12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// var guys = ["Aqsa", "Areeba", "alia", "Fatima", "Sehar"];
// var message = ("How was the day,welcome to my Website");
// var pronouns = ("HEY");
// console.log(pronouns, guys[0], message);
// console.log(pronouns, guys[1], message);
// console.log(pronouns, guys[2], message);
// console.log(pronouns, guys[3], message);
// console.log(pronouns, guys[4], message);
// // Q13:our Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// var favouritecar = ["fortuner", "landcruiser"];
// var sentence = ("I cannot wait to drive and flex my new");
// var statement = ("I care a lot about my");
// console.log(sentence, favouritecar[0]);
// console.log(statement, favouritecar[1]);
// // Q14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you
//  invite? Make a list that includes at least three people you’d like to invite to dinner.
//   Then use your list to print a message to each person, inviting them to dinner.
// var guestname = ["Ayesha", "Fatima", "Rabia",];
// var main = ("you are invited");
// var invitation = ("\nplease join us for rehearsel Dinner Honouring\n");
// var time = ("\n8:00\n");
// var date = ("\n3-march-2023\n");
// var place = ("\nTaj hotel\n");
// var mainmessage = ("\nFatima and Rabia are also invited'we'll enjoy more\n");
// var mainmessage1 = ("\nAyesha and Rabia are also invited'we'll enjoy more\n");
// var mainmessage2 = ("\nAyesha and fatima are also invited'we'll enjoy more\n");
// console.log(guestname[0], main, invitation, time, date, place, mainmessage);
// console.log(guestname[1], main, invitation, time, date, place, mainmessage1);
// console.log(guestname[2], main, invitation, time, date, place, mainmessage2);
// // Q15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// var guestName = ["Ayesha", "Fatima", "Saba", "Rida"];
// var highLight = ("There is a changing in our program cause Rabia is not coming cause of her personal issue and my two friends Saba and Rida are arriving");
// var Sentence = ("\nplease join us for rehearsel dinner honouring\n");
// var Punctuation = ("8:00-3-march-2023-Taj Hotel");
// console.log(guestName[0], highLight);
// console.log(guestName[1], highLight);
// console.log(guestName[2], Sentence, Punctuation);
// console.log(guestName[3], Sentence, Punctuation);
// // Q16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner
// var guestlist = ["Tuba", "Ayesha", "Fatima", "Saba", "Rida"];
// var highlight = ("we found a bigger table");
// var punctuation = ("8:00_3-march-2024_Taj Hotel");
// console.log(guestlist[0], highlight, punctuation);
// console.log(guestlist[1], highlight, punctuation);
// console.log(guestlist[2], highlight, punctuation);
// console.log(guestlist[3], highlight, punctuation);
// console.log(guestlist[4], highlight, punctuation);
// // // Q17Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// var Guestlist = ["saba", "Rida"];
// var Highlight = ("we cant arrange a bigger table");
// var removeguest = ["Tuba", "Ayehsa", "Fatima"];
// console.log(guestlist[0], highlight, "but you're still invited for the dinner");
// console.log(guestlist[1], highlight, "but you're still invited for the dinner");
// console.log(removeguest[0], removeguest[1], removeguest[2], highlight, "Sorry you're not invited");
// Q18:Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var placetovisit = ['tokyo', 'japan', 'france', 'turkey'];
console.log("original order", placetovisit);
console.log("Alphabetical order:", __spreadArray([], placetovisit, true).sort());
console.log("original order after sorting:", placetovisit);
console.log("Reverse alphabetical order:", [placetovisit].sort().reverse());
console.log("original order after reverse sorting:", placetovisit);
// // // Q19: Dinner Guests: Working with one of the programs from Exercises 14 through 18
// // // , print a message indicating the number of people you are inviting to dinner;
// // let guests=["Tuba","Ayesha"];
// // console.log("there are two guests are invited to dinner",guests[0],guests[1]);
// // // Q20:Think of something you could store in a array. For example,
// // //  you could make a list of mountains, rivers, countries, cities, 
// // //  languages, or anything else you’d like.
// // //  Write a program that creates a list containing these items.
// // let countries=["\nPakistan\n","\nEngland\n","\nSaudi\n","\nJapan\n","\nChina\n"];
// // console.log("list of countries",countries[0],countries[1],countries[2],countries[3],countries[4]);
//  //  Q 21: They think of something you could store in a TypeScript Object. Write a program that
// // //  creates Objects containing these items.
// // let personID:{name: string, gender: string, age:number,fname:string}
// // ={name:"Aqsa",gender:"Female",age:21,fname:"Babul"};
// // console.log(personID)  
// // // Q22:Intentional Error: If you haven’t received an array index error in
// // //  one of your programs yet, try to make one happen.
// // //   Change an index in one of your programs to produce an index error
// // // . Make sure you correct the error before closing the program.
// // const seasons : string[]=["Summer","Winter","spring",'Autumn'];
// // // console.log(seasons[4]);
// // console.log(seasons[0],seasons[1],seasons[2],seasons[3]);
// // //Q23: Conditional Tests: Write a series of conditional tests. 
// // // Print a statement describing each test and your prediction for the
// // //  results of each test.
// // // let car = 'subaru';
// // let car = 'landcruiser'
// // // console.log("Is car == 'subaru'? I predict True.")
// // console.log("is car == landcruiser'? I predict True.");
// // // console.log(car == 'subaru')
// // console.log (car == 'landcruiser');
// // // • Look closely at your results, and make sure you understand why each line
// // //  evaluates to True or False.
// // // • Create at least 10 tests. Have at least 5 tests evaluate to True and another
// // //  5 tests evaluate to False.
// // console.log("is 5<2? I predict false");
// // console.log(5<2);
// // console.log("is 5>2? I predict true");
// // console.log( 5>  2);
// // console.log("is 66< 22? I predict false");
// // console.log(66<22);
// // console.log("is 45+5=50? I predict true");
// // console.log(45+5==50);
// // console.log("is 2*2==6? I predict false");
// // console.log(2*2==6);
// // console.log("9/3==3? I predict true");
// // console.log(9/3==3);
// // console.log("is 8-4==4? I predict true");
// // console.log (8-4==4);
// console.log("is 8+4==4? I predict false");
// console.log (8+4==4);
// console.log("9/3==5? I predict false");
// console.log(9/3==5);
// console.log("is 2*2==4? I predict true");
// console.log(2*2==4);
// //  Q 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// //  If you want to try more comparisons, write more tests. Have at least one True and 
// //  one False result for each of the following:
// console.log("33_3==30? I predict true");
// console.log(33-3==30);
// // • Tests for equality and inequality with strings
// let name1:string="Aqsa";
// let name2:string="Rabia";
// let name3:string="Aqsa";
// if(name1==name3){
//     console.log("names are equal")
// } else{
//     console.log ("names are not equal")
// }
// if (name1!=name2){
//     console.log("names are not equal")
// } else{
//     console.log("names are equal")
// }
// // • Tests using the lower case function
// if (name3!=name1){
//     console.log("names are not equal")
// } else{
//     console.log("names are equal")
// }
// // • Numerical tests involving equality and inequality, greater than and less than,
// //  greater than or equal to, and less than or equal to
// let age0:number= 18;
// let age1:number=16;
// if(age0 == 18){
//     console.log("eligible for game")
// }else if (age0!=18){
//     console.log(" not eligible for game")
// }
// if (age1==16){
//     console.log("not eligible")
// }else if (age1!=16){
//     console.log("eligible");
// }
// // • Tests using "and" and "or" operators
// let age3:number=18&&35
// let age4:number=12&&17;
// if (age3){
//     console.log("person is allowed")
// }else if (age4){
//     console.log("person are not allowed")
// }
// // • Test whether an item is in a array
// let fruits:string[]=["Apple","Banana","grapes"];
// if (fruits){
//     console.log("Apple is in basket")
// }
// // • Test whether an item is not in a array
// if (fruits){
//     console.log("strawberry is not in basket")
// }
// //Q25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a 
// // variable called alien_color and assign 
// // it a value of 'green', 'yellow', or 'red'.
// let alien_color= "yellow"
// // • Write an if statement to test whether the alien’s color is green. If it is
// // , print a message that the player just earned 5 points.
// if (alien_color=="yellow"){
//     console.log("you've just earned 5 points")
// }
// // • Write one version of this program that passes the if test and another that fails.
// //  (The version that fails will have no output.)
// if (alien_color=="green"){
//     console.log("no output")
// }
// //Q26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an 
// // if-else chain.
// let aliencolor:string=("green")
// // • If the alien’s color is green, print a statement that the player just earned 
// // 5 points for shooting the alien.
// if (aliencolor="green"){
//     console.log("you've just earned 5 points for shhoting the alien")
// }
// // • If the alien’s color isn’t green, print a statement that the player just earned
// //  10 points.
// else if (aliencolor!="green"){
//     console.log("you've just earned 10 points")
// }
// // • Write one version of this program that runs the if block and another that runs the else
// //  block
// let aliencolor1="red"
// if ( "green"){
//     console.log("you've just earned 5 points")
// }else if ("red"){
//     console.log("you are  fired")
// }
//     //Q27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//     // • If the alien is green, print a message that the player earned 5 points.
//     // • If the alien is yellow, print a message that the player earned 10 points.
//     // • If the alien is red, print a message that the player earned 15 points.
//     // • Write three versions of this program, making sure each message is printed 
//     // for the appropriate color alien.
// let Aliencolor4:string="green"
// if ("green"){
//     console.log("you've just earned 5 points ")
// } else if ("yellow"){
//     console.log("you've just earned 10 points")
// }else if ("red"){
//     console.log("you've just earned 15 points")
// 
//  Q28: stages of Life: Write an if-else chain that determines a person’s stage of life.
//  Set a value for the variable age, and then:
// let age=68
// • If the person is less than 2 years old, print a message that the person is a
//  baby.
// if (age>2){
// console.log("the person is a baby")
// }
// • If the person is at least 2 years old but less than 4, print a message that
//  the person is a toddler.
// else if (age>4){
//     console.log("the person is a toddler")
// }
// // • If the person is at least 4 years old but less than 13, print a message that
// //  the person is a kid.
// else if (age > 13){
//     console.log("The person is a kid")
// }
// // • If the person is at least 13 years old but less than 20, print a message that
// //  the person is a teenager.
// else if (age>13){
//     console.log("The person is a Teenager")
// }
// // • If the person is at least 20 years old but less than 65, print a message that
// // the person is an adult.
// else if (age >20 ){
//     console.log("The person is adult")
// }
// // • If the person is age 65 or older, print a message that the person is an
// //  elder.
// else if (age>65) {
//     console.log("The person is Elder")
// } else {
//     console.log("The person is older ")
// }
// Q29:Favorite Fruit: Make a array of your favorite fruits, and then write a series
//  of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
// let favourite_fruits:string[]=["Apple","Banana","pineapple"]
// Write five if statements. Each should check whether a certain kind of fruit is
//in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
// if (favourite_fruits.includes("Apple")){
// console.log("i really like Apple")
// }
//  else if (favourite_fruits.includes("Banana")){
//     console.log("I really like Bananas")
// }
//   else if (favourite_fruits.includes("cherry")){
// console.log("I really like cherry")
// }
//   else if (favourite_fruits.includes("Pineapple")){
//     console.log("I really like Pineapple")
// }
// else {
// console.log("I really like Berry")
// }
// // 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'
// // . Imagine you are writing code that will print a greeting to each user
// let users:string[]=["Admin","Rabia","saira","Ifra","Ayesha"]
// // after they log in to a website. Loop through the array, and print a greeting to each
// //  user:
// // • If the username is 'admin', print a special greeting, such as Hello admin, would 
// // you like to see a status report?
// // • Otherwise, print a generic greeting, such as Hello Eric,
// //  thank you for logging in again.
// for(let user of users){
//     if (user==="Admin"){
//         console.log("Hello Admin would you like to see a status report")
//     }
// } else  {
//     console.log('Hello, ${users}, Thank u for logging in again')
// }
// Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is
//  not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure 
// the correct message is printed.
// let usernames:string [] =["ayesha",'fatima','alia']
// let user :string="Admin"
// if(usernames.length==0){
//     console.log("we need to find some users")
// }else {
//     for( user of usernames){
//         if ( usernames ==== ("Admin")) {
//             console.log(" Hello admin would you like to see some status report")
//         }else {
//             console.log("hello  thank u for logging in again")
//         }
//     }
// }
// Checking Usernames: Do the following to create a program that simulates 
// how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of 
// the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print
//  a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
// let currentId:string[]=["aqsa","Sehar","Dua","fatima"];
// let newId:string[]=["Amna","aqsa","fatima","Shaista"]
// let currentId_lower:string[]= currentId.map(user => user.toLowerCase())
// for(let newId of newId){toLowerCase
// if (currentId_lower.includes {newId.toLowerCase()}){
// console.log(`Sorry. ${newId} that name is already taken `)
// }else console.log(`yes ${newId} is still in list `)
// }
//Q33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read 
// "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let numbers:number[]=[1,2,3,4,5,6,7,8,9]
// for (let number of numbers){
// if (number ===  1){
// console.log (`${number}st`)
// }else if (number ===2){
// console.log(`${number}nd`)
// }else if (number ===3){
//  
//  
//  Q34:Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
//  and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name 
// of the pizza. For each pizza you should have one line of output containing a simple statement like
//  I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza.
//  The output should consist of three or more lines about the kinds of pizza you
//  like and then an additional sentence, such as I really love pizza!
// let favouritepizza:string[]=["peproni","malaiboti","tikka"]
// for (  let pizza of favouritepizza){
//     console.log(pizza)
// }
// console.log("\n")
// for (let pizza of favouritepizza){
// console.log(`i really like ${pizza} pizza`)
// }
// console.log("\nI really like to eat pizza\n")
//  Q35:Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
//   • Modify your program to print a statement about each animal, such as A dog would make a great pet. •
//    Add a line at the end of your program stating what these animals have in common.
//     You could print a sentence such as 
// Any of these animals would make a great pet!
// let petanimals:string[]=['cat','dog','cow']
// for(let animal of animals){
//     console.log(animal)
// }
// console.log("\n")
// for (let animal of animals){
//     console.log(`A ${animal} is a pet animal`)
// }
// console.log("A cow is a great pet ")
// Q36:T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
//  that should be printed on the shirt. The function should print a sentence summarizing
//   the size of the shirt and the message printed on it. Call the function
// function makeShirt(size:string,text:string): void{
//     console.log(` you order a shirt ${size} that says ${text}`)
// }
// makeShirt('large','"hello"')
// makeShirt('medium','"Hello Eric"')
// Q37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
//  that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//   and a shirt of any size with a different message.
// function makeShirt (size:string='large',text:string='Hello'):void{
//     console.log(`you order a ${size} that says ${text} `)
// }
// makeShirt ();
// makeShirt ('medium')
// Q38:Cities: Write a function called describe_city() that accepts the name of a city and its country.
//  The function should print a simple sentence, such as Karachi is in Pakistan. 
//  Give the parameter for the country a default value. Call your function for three different cities,
//   at least one of which is not in the default country.
// function describe_city(city:string , country:string ="pakistan"):void{
//     console.log (`${city} is in ${country}`)
// }
// describe_city('karachi')
// describe_city('france','europe')
// describe_city('lahore','punjab')
// / Q39:City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// function city_country(city:string ,country:string): string {
// return `${city},${country}`
// }
// let c1= city_country('lahore','pakistan')
// let c2= city_country ('tokyo','japan')
// let c3= city_country ('abudhabi',' Dubai')
// console.log(c1)
// console.log(c2)
// console.log(c3)
// Q40: Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title,
// and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
// function make_album(artist:string,title:string):{artist:string,title:string} {
//     const dictionaries ={
//         artist:artist.charAt(0).toUpperCase() +artist.slice (1), 
//         title:title.charAt(0).toUpperCase() +title.slice (1)
//     };
//     return dictionaries;
// }
// // let album0=make_album('Atif','sang e mah')
// // console.log(album0)
// // let album1=make_album('Ali Zafar','jhoom')
// // console.log(album1)
// // let album2=make_album('Bilal','Baari')
// // console.log(album2)
// // Q41:Magicians: Make a array of magician’s names.
// //  Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// function show_magicians(magicians:string[]): void {
//     for (const magician of magicians) {
//         console.log(magician.charAt(0).toUpperCase() + magician .slice(1));
//     }
// }
//  const magician:string[] =['alia ','aqsa', 'fatima']
// show_magicians(magician)
//Q42: Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding 
//  the phrase the Great to each magician’s name. Call show_magicians()
//  to see that the list has actually been modified.
// function make_great(magicians:string[]): void{
//     for (let i = 0; i< magicians.length; i++){
//         magicians[i];magicians[i] + "The Great"
//     }
// }
// let magicians3:string[] = ['alia ','aqsa', 'fatima'];
// make_great (magicians3);
//  show_magicians(magicians3);
// 
// }
// 
// / Q43:Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names
// . Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of 
//  the original names and one array with the Great added to each magician’s name.
// function make_great2(magicians:string[]):string[] {
//     const greatMagicians:string[] = [];
//     for (let i = 0; i < magicians.length; i++) {
//         greatMagicians.push(magicians[i] + 'The great ');
//     }
//     return greatMagicians
// }
//     var magicians3 = ['alia ', 'aqsa', 'fatima'];
// var magicians2 = make_great2(magicians3);
// show_magicians(magicians3);
// show_magicians(magicians2);
//  Q44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich
//  The function should have one parameter that collects as many items as the function call provides,
//   and it should print a summary of the sandwich that is being ordered. Call the function three times,
//  using a different number of arguments each time.
// function sandwich(...items:string[]):void {
//     console.log("sandwich order:")
//     for (let i = 0;i <items.length; i++) {
//          console.log(` = ${items[i]}`)
//     }
// }
// console.log('Enjoy your meal sir')
// sandwich('capsicum' , 'cucumber','mayonnaise')
// sandwich('tomato','chicken','garlic')
// sandwich('mayo suce','cheese')
//  Q45:Cars: Write a function that stores information about a car in a Object.
//The function should always receive a manufacturer and a model name.
//It should then accept an arbitrary number of keyword arguments.
//Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned 
// to make sure all the information was stored correctly.
// type car = {
//     manufacture:string
//     model:string
//     [key:string]:any;
// }
// function createCar(manufacture:string,model:string,optional: Record < string, any>) :car{
//     return{
//         manufacture,
//         model,
//         ...optional
//     }
// }
// const mycar: car = createCar("Toyota","Honda", {color:"black",year:"2024"})
// console.log(mycar )
