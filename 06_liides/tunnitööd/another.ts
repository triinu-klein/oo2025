interface Adder {
    add(nr: number): void; // meetod, mis lisab arvu
    getSum(): number; // meetod, mis tagastab summa
    getAverage(): number; // meetod, mis tagastab keskmise
}

class CharCounter {
    // konstruktor võtab parameetriks Adder tüüpi objekti ja salvestab selle kaitstud muutujasse
    constructor(protected adder: Adder) {}

    addWordCharacters(word: String): void { // meetod, mis töötleb antud sõna
        this.adder.add(word.length); // word.length – tähtede arv sõnas
    }

    getCharacterCount(): number { // tagastab tähtede koguarvu, mis on salvestatud adderi sees
        return this.adder.getSum(); // kutsub välja summa adderist
    }
}

class CountingAdder implements Adder {
    protected sum: number = 0; // algväärtus summale on null, ilma selleta oleks sum määramata
    protected count: number = 0;

    add(nr: number) {
        this.sum += nr; // lisab antud arvu summale
        this.count++;   // suurendab loendurit ühe võrra
    }

    getSum(): number { // tagastab hetke summa
        return this.sum;
    }

    getAverage() {
        if (this.count > 0) {
            return this.sum / this.count; // arvutab ja tagastab keskmise
        } else {
            return 0; // kui midagi pole lisatud, on keskmine 0
        }
    }
}

// Loome CountingAdderi instantsi
let adder1: Adder = new CountingAdder();
// Loome CharCounteri ja anname talle adderi
let counter1: CharCounter = new CharCounter(adder1);

// Lisame mõned sõnad
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");

// Väljastame tähemärkide koguarvu ja keskmise pikkuse
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
