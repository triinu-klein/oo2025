import Chart from 'chart.js/auto';

// Klass, mis hoiab hinnete ja ainepunktide andmeid
class AinepunktidHinded {
    public kursused: { ainepunktid: number; hinne: string }[];

    // Konstruktor, mis võtab vastu kursuste nimekirja
    constructor(kursused: { ainepunktid: number; hinne: string }[]) {
        this.kursused = kursused;
    }

    // Funktsioon, mis lisab kursuse hinde ja ainepunktide arvu
    public lisaKursus(ainepunktid: number, hinne: string): void {
        this.kursused.push({ ainepunktid, hinne });
    }

    // Hinde numbriks teisendamise funktsioon
    public hinneNumbriks(hinne: string): number {
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
const kursused: { ainepunktid: number; hinne: string }[] = [
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

    // Uuenda joonistatud diagrammi
    uuendaDiagramm();
}

// Funktsioon, mis uuendab diagrammi, et kuvada iga ainepunktide ja hinde suhet
function uuendaDiagramm() {
    const hindedAndAinepunktid = ainepunktidHindedObjekt.kursused.map(kursus => {
        const hinneNumbriks = ainepunktidHindedObjekt["hinneNumbriks"](kursus.hinne); // Privaatne funktsioon
        return {
            ainepunktid: kursus.ainepunktid,
            hinneVäärtus: hinneNumbriks
        };
    });

    const ctx = (document.getElementById('diagramm') as HTMLCanvasElement).getContext('2d');
    if (ctx !== null) {
        // Kui kontekst on kehtiv, siis loo uus diagramm
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: hindedAndAinepunktid.map(kursus => `${kursus.ainepunktid} ainepunkti`),
                datasets: [{
                    label: 'Kursus ja Hinne',
                    data: hindedAndAinepunktid.map(kursus => kursus.hinneVäärtus),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Täitevärv
                    borderColor: 'rgba(75, 192, 192, 1)', // Piirjoone värv
                    borderWidth: 2, // Piirjoone laius
                    hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)', // Hover täitevärv
                    hoverBorderColor: 'rgba(75, 192, 192, 1)', // Hover piirjoone värv
                    hoverBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
