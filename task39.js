// Q39:City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
var c1 = city_country('lahore', 'pakistan');
var c2 = city_country('tokyo', 'japan');
var c3 = city_country('abudhabi', ' Dubai');
console.log(c1);
console.log(c2);
console.log(c3);
