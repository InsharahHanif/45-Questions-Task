function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
   }   


function make_great(magicians: string[]) {
     return magicians.map(name => `The Great ${name}`);
    }
    let magicians_names = ["Hamza","Yaman","Tahir"];

    let great_magiacians = make_great(magicians_names);

    console.log(great_magiacians)