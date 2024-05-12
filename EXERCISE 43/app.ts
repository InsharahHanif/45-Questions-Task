function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
   }   


function make_great(magicians: string[]) {
     return magicians.map(name => `The Great ${name}`);
    }
    let magicians_names = ["Hamza","Yaman","Tahir"];

    let copy_magicians_name = magicians_names.slice()

let copy_magicians_name = make_great(copy_magicians_name);

show_magicians(magicians_names);

show_magicians(copy_magicians_name);