"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Klass Reader, mis esindab raamatuhuvilist kasutajat
var Reader = /** @class */ (function () {
    // Konstruktor – määrab kasutajanime, loetud raamatud ja TBR-nimekirja
    function Reader(username, booksRead, tbr) {
        this.username = username;
        this.booksRead = booksRead;
        this.tbr = tbr;
    }
    return Reader;
}());
// Ühe lugeja näitde koos mõne loetud raamatu ja TBR-nimekirjaga
var myReader = new Reader("FirstReader", ["Honey Witch", "Imogen, Obviously"], ["Christmas Tree Farm", "The Hunger Games"]);
// Funktsioon uue raamatu lisamiseks loetud raamatute nimekirja
function addNewRead(reader, newBook) {
    reader.booksRead.push(newBook); // Lisatakse loetud raamatute lõppu
}
// Funktsioon uue raamatu lisamiseks TBR-nimekirja
function addToTBR(reader, newBook) {
    reader.tbr.push(newBook); // Lisatakse TBR-nimekirja lõppu
}
// Üks uus loetud raamat ja üks raamat TBR-i
addNewRead(myReader, "Assistant to the Villain");
addToTBR(myReader, "Caraval");
// Väljastab kasutaja andmed koos uuendatud raamatunimekirjadega
console.log(myReader);
