//Q43: Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding 
//  the phrase the Great to each magician’s name. Call show_magicians()
//  to see that the list has actually been modified.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i];
        magicians[i] + "The Great";
    }
}
var magicians3 = ['alia ', 'aqsa', 'fatima'];
make_great(magicians3);
show_magicians(magicians3);
