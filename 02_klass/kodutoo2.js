"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reader = /** @class */ (function () {
    function Reader(username, booksRead, tbr) {
        this.username = username;
        this.booksRead = booksRead;
        this.tbr = tbr;
    }
    return Reader;
}());
var myReader = new Reader("FirstReader", ["Honey Witch", "Imogen, Obviously"], ["Christmas Tree Farm", "The Hunger Games"]);
function addNewRead(reader, newBook) {
    reader.booksRead.push(newBook);
}
function addToTBR(reader, newBook) {
    reader.tbr.push(newBook);
}
addNewRead(myReader, "Assistant to the Villain");
addToTBR(myReader, "Caraval");
console.log(myReader);
