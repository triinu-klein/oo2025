/* 
* koosta funktsioon, kus antakse ette kahe ainekursuse ainepunktid ja hinded. Arvuta nende põhjal kaalutud keskmine.

* klassile saab lisada sooritatud ainete hindeid ja ainepunkte, välja küsida nende andmete põhjal parasjagu arvutatud kaalutud keskmins.

* loo kasutajaliides: kasutaja valib hinde (A-F) ja sisestab ainepunktide arvu. Joonisel on näha ainete kaalutud keskmine, 
    samuti ained ristkülikuna, mille laiuseks on ainepunktide arv ning kõrguseks hinde numbriline väärtus (A-5...F-1). 
*/ 


// Klass, mis hoiab hinnete ja ainepunktide andmeid
class AinepunktidHinded {
    private kursused: { ainepunktid: number; hinne: string }[];

    // Konstruktor, mis võtab vastu kursuste nimekirja
    constructor(kursused: { ainepunktid: number; hinne: string }[]) {
        this.kursused = kursused;
    }

    // Funktsioon, mis lisab kursuse hinde ja ainepunktide arvu
    public lisaKursus(ainepunktid: number, hinne: string): void {
        this.kursused.push({ ainepunktid, hinne });
    }

    // Hinde numbriks teisendamise funktsioon
    private hinneNumbriks(hinne: string): number {
        const hinneteTabel: { [key: string]: number } = {
            "A": 5, "B": 4, "C": 3, "D": 2, "E": 1, "F": 0
        };
        return hinneteTabel[hinne.toUpperCase()];
    }

    // Funktsioon kaalutud keskmise arvutamiseks
    kaalutudKeskmine(): number {
        let punktideSumma = 0; // Kõikide kursuste ainepunktide summa
        let kaalutudSumma = 0; // Kõikide kaalutud hinnete summa

        // Läbib kõik kursused ja arvutab kaalutud keskmise
        for (const { ainepunktid, hinne } of this.kursused) {
            const hinneVäärtus = this.hinneNumbriks(hinne);

            // Arvutab kaalutud hinne * ainepunktid
            kaalutudSumma += hinneVäärtus * ainepunktid;
            punktideSumma += ainepunktid;
        }

        // Kui ainepunktide summa on 0, siis ei saa keskmist arvutada, tagastab 0
        return punktideSumma === 0 ? 0 : kaalutudSumma / punktideSumma;
    }
}

// AinepunktidHinded objekt, kus on kursused koos hinnetega
const kursused = [
    { ainepunktid: 3, hinne: "A" },
    { ainepunktid: 4, hinne: "B" },
    { ainepunktid: 2, hinne: "C" }
];

// Objekt, mille kaudu pääseb funktsioonide juurde
const ainepunktidHindedObjekt = new AinepunktidHinded(kursused);

// Kaalutud keskmise kuvamise funktsioon
function uuendaKaalutudKeskmine() {
    const kaalutudKeskmine = ainepunktidHindedObjekt.kaalutudKeskmine();
    (document.getElementById('kaalutudKeskmine') as HTMLSpanElement).textContent = kaalutudKeskmine.toFixed(2);
}

// Kursus on lisatud ja kaalutud keskmine uuendatakse
function lisaKursus() {
    const hinne = (<HTMLSelectElement>document.getElementById('hinne')).value;
    const ainepunktid = parseInt((<HTMLInputElement>document.getElementById('ainepunktid')).value);

    // Kontrollime, kas sisend on korrektne
    if (isNaN(ainepunktid) || ainepunktid <= 0) {
        alert("Palun sisesta korrektne ainepunktide arv!");
        return;
    }

    // Lisame kursuse
    ainepunktidHindedObjekt.lisaKursus(ainepunktid, hinne);

    // Kaalutud keskmine uuendamine
    uuendaKaalutudKeskmine();
}
