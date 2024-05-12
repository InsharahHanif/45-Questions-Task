function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Hamza", "Yaman", "Tahir"];
var great_magiacians = make_great(magicians_names);
console.log(great_magiacians);
