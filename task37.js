// Q37:Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
//  that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//   and a shirt of any size with a different message.
function makeShirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'Hello'; }
    console.log("you order a ".concat(size, " that says ").concat(text, " "));
}
makeShirt();
makeShirt('medium');
