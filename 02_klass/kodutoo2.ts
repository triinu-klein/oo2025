import { ListFormat } from "typescript";

class Reader{
    username: string;
    booksRead: string[];
    tbr:string[]; //tbr=to be read 

    constructor(username:string, booksRead:string[], tbr:string[]){
        this.username=username;
        this.booksRead = booksRead;
        this.tbr = tbr;
    }
}

const myReader = new Reader("FirstReader", ["Honey Witch", "Imogen, Obviously"], ["Christmas Tree Farm", "The Hunger Games"]);

function addNewRead(reader: Reader, newBook: string) { 
    reader.booksRead.push(newBook);  
}

function addToTBR(reader: Reader, newBook: string) {
    reader.tbr.push(newBook); 
}

addNewRead(myReader, "Assistant to the Villain");
addToTBR(myReader, "Caraval");


console.log(myReader);