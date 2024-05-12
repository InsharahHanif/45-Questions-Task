function make_sandwaich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(','), "."));
}
make_sandwaich("ham", "cheese");
make_sandwaich("turkey", "lecttuce", "tomato");
make_sandwaich("avocado", "sprouts", "mustard", "mayo");
