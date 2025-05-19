import { ListFormat } from "typescript";

// Klass Reader, mis esindab raamatuhuvilist kasutajat
class Reader {
    username: string;        // Kasutajanimi
    booksRead: string[];     // Loetud raamatute nimekiri
    tbr: string[];           // TBR (to be read) – raamatud, mida soovib veel lugeda

    // Konstruktor – määrab kasutajanime, loetud raamatud ja TBR-nimekirja
    constructor(username: string, booksRead: string[], tbr: string[]) {
        this.username = username;
        this.booksRead = booksRead;
        this.tbr = tbr;
    }
}

// Ühe lugeja näitde koos mõne loetud raamatu ja TBR-nimekirjaga
const myReader = new Reader(
    "FirstReader",
    ["Honey Witch", "Imogen, Obviously"],
    ["Christmas Tree Farm", "The Hunger Games"]
);

// Funktsioon uue raamatu lisamiseks loetud raamatute nimekirja
function addNewRead(reader: Reader, newBook: string) { 
    reader.booksRead.push(newBook);  // Lisatakse loetud raamatute lõppu
}

// Funktsioon uue raamatu lisamiseks TBR-nimekirja
function addToTBR(reader: Reader, newBook: string) {
    reader.tbr.push(newBook);  // Lisatakse TBR-nimekirja lõppu
}

// Üks uus loetud raamat ja üks raamat TBR-i
addNewRead(myReader, "Assistant to the Villain");
addToTBR(myReader, "Caraval");

// Väljastab kasutaja andmed koos uuendatud raamatunimekirjadega
console.log(myReader);
