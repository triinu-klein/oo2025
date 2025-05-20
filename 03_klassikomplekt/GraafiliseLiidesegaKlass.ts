declare var book1: Book;  // Deklareerib muutuja book1 tüüpi Book

class Book {
    // Kaitstud omadused raamatu pealkirja, autori ja joonistamise konteksti jaoks
    protected title: string;
    protected author: string;
    protected g;  // Joonistamise kontekst (nt canvas 2D context)

    // Konstruktori funktsioon, mis saab sisendiks pealkirja, autori ja joonistatava objekti
    constructor(title: string, author: string, g: object) {
        this.title = title;   // Määrab raamatu pealkirja
        this.author = author; // Määrab raamatu autori
        this.g = g;           // Määrab joonistamise konteksti
        this.draw();          // Kutsutakse välja joonistamise meetod
    }

    // Joonistamise meetod, mis kuvab raamatu kujutise ja teksti canvasel
    draw() {
        this.g.clearRect(0, 0, 400, 300);  // Tühjendab canvase ala (0,0 kuni 400x300)
        this.g.beginPath();                // Alustab uut joonistamisteekonda
        this.g.rect(20, 10, 100, 200);    // Joonistab ristküliku (raamatu kujutis)
        this.g.stroke();                   // Joonistab ristküliku kontuuri
        this.g.textAlign = "center";      // Teksti joondamine keskele
        this.g.font = "16px Arial";       // Teksti font ja suurus pealkirjale
        this.g.fillText(this.title, 70, 90); // Kuvab raamatu pealkirja määratud koordinaatidel
        this.g.font = "12px Arial";       // Teksti font ja suurus autorile
        this.g.fillText(this.author, 70, 130); // Kuvab raamatu autori määratud koordinaatidel
    }

    // Klõpsu mõistmise meetod, mis reageerib hiireklõpsule canvasel
    handleClick(event: MouseEvent) {
        let mouseX = event.offsetX;  // Hiire X koordinaat canvasel
        let mouseY = event.offsetY;  // Hiire Y koordinaat canvasel
        console.log(`Clicked at: (${mouseX}, ${mouseY})`); // Klõpsu koordinaadid konsooli
        // Kontrollib, kas klõps toimus raamatu ristküliku sees
        if (mouseX >= 20 && mouseX <= 120 && mouseY >= 10 && mouseY <= 210) {
            this.title = "Glass Sword";  // Muudab raamatu pealkirja
            this.author = "V. Aveyard";  // Muudab raamatu autori
            this.draw();                 // Joonistab uuesti, et kuvada muudatused
        }
    }
}
