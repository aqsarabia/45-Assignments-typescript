// Q29:Favorite Fruit: Make a array of your favorite fruits, and then write a series
//  of independent if statements that check for certain fruits in your array.
// Make a array of your three favorite fruits and call it favorite_fruits.
var favourite_fruits = ["Apple", "Banana", "pineapple"];
// Write five if statements. Each should check whether a certain kind of fruit is
//in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
if (favourite_fruits.includes("Apple")) {
    console.log("i really like Apple");
}
else if (favourite_fruits.includes("Banana")) {
    console.log("I really like Bananas");
}
else if (favourite_fruits.includes("cherry")) {
    console.log("I really like cherry");
}
else if (favourite_fruits.includes("Pineapple")) {
    console.log("I really like Pineapple");
}
else {
    console.log("I really like Berry");
}
