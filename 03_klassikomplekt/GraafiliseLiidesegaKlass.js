var Book = /** @class */ (function () {
    // Konstruktori funktsioon, mis saab sisendiks pealkirja, autori ja joonistatava objekti
    function Book(title, author, g) {
        this.title = title; // Määrab raamatu pealkirja
        this.author = author; // Määrab raamatu autori
        this.g = g; // Määrab joonistamise konteksti
        this.draw(); // Kutsutakse välja joonistamise meetod
    }
    // Joonistamise meetod, mis kuvab raamatu kujutise ja teksti canvasel
    Book.prototype.draw = function () {
        this.g.clearRect(0, 0, 400, 300); // Tühjendab canvase ala (0,0 kuni 400x300)
        this.g.beginPath(); // Alustab uut joonistamisteekonda
        this.g.rect(20, 10, 100, 200); // Joonistab ristküliku (raamatu kujutis)
        this.g.stroke(); // Joonistab ristküliku kontuuri
        this.g.textAlign = "center"; // Teksti joondamine keskele
        this.g.font = "16px Arial"; // Teksti font ja suurus pealkirjale
        this.g.fillText(this.title, 70, 90); // Kuvab raamatu pealkirja määratud koordinaatidel
        this.g.font = "12px Arial"; // Teksti font ja suurus autorile
        this.g.fillText(this.author, 70, 130); // Kuvab raamatu autori määratud koordinaatidel
    };
    // Klõpsu mõistmise meetod, mis reageerib hiireklõpsule canvasel
    Book.prototype.handleClick = function (event) {
        var mouseX = event.offsetX; // Hiire X koordinaat canvasel
        var mouseY = event.offsetY; // Hiire Y koordinaat canvasel
        console.log("Clicked at: (".concat(mouseX, ", ").concat(mouseY, ")")); // Klõpsu koordinaadid konsooli
        // Kontrollib, kas klõps toimus raamatu ristküliku sees
        if (mouseX >= 20 && mouseX <= 120 && mouseY >= 10 && mouseY <= 210) {
            this.title = "Glass Sword"; // Muudab raamatu pealkirja
            this.author = "V. Aveyard"; // Muudab raamatu autori
            this.draw(); // Joonistab uuesti, et kuvada muudatused
        }
    };
    return Book;
}());
