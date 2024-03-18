// //  Q 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// //  If you want to try more comparisons, write more tests. Have at least one True and 
// //  one False result for each of the following:
console.log("33_3==30? I predict true");
console.log(33 - 3 == 30);
// // • Tests for equality and inequality with strings
var name1 = "Aqsa";
var name2 = "Rabia";
var name3 = "Aqsa";
if (name1 == name3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name1 != name2) {
    console.log("names are not equal");
}
else {
    console.log("names are equal");
}
// • Tests using the lower case function
if (name3 != name1) {
    console.log("names are not equal");
}
else {
    console.log("names are equal");
}
// // :Numerical tests involving equality and inequality, greater than and less than,
// //  greater than or equal to, and less than or equal to
var age0 = 18;
var age1 = 16;
if (age0 == 18) {
    console.log("eligible for game");
}
else if (age0 != 18) {
    console.log(" not eligible for game");
}
if (age1 == 16) {
    console.log("not eligible");
}
else if (age1 != 16) {
    console.log("eligible");
}
// // • Tests using "and" and "or" operators
var age3 = 18 && 35;
var age4 = 12 && 17;
if (age3) {
    console.log("person is allowed");
}
else if (age4) {
    console.log("person are not allowed");
}
// // • Test whether an item is in a array
var fruits = ["Apple", "Banana", "grapes"];
if ("Apple") {
    console.log("Apple is in basket");
}
// // • Test whether an item is not in a array
if ("strawberry") {
    console.log("strawberry is not in basket");
}
