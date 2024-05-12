function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Hamza", "Yaman", "Tahir"];
var copy_magicians_name = magicians_names.slice();
var copy_magicians_name = make_great(copy_magicians_name);
show_magicians(magicians_names);
show_magicians(copy_magicians_name);
