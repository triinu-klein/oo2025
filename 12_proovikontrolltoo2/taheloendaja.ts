// Liides, mis määrab, et igal tekstil peab olema meetod tähtede loendamiseks
export interface Taheloendaja {
  // Meetod, mis võtab sisendiks ühe tähe ja tagastab selle esinemiste arvu tekstis
  loendaTaht(taht: string): number;
}

// Abstraktne klass, mis realiseerib Taheloendaja liidese.
export abstract class Tekst implements Taheloendaja {
  // Abstraktne meetod, mis peab tagastama kogu teksti sisu ühe stringina
  abstract kysiSisu(): string;

  // Üldine loogika: kontrollib sisendi pikkust ja loeb tähtede arvu
  loendaTaht(taht: string): number {
    if (taht.length !== 1) {
      // Kui sisend ei ole täpselt üks täht, viskab vea
      throw new Error("Sisend peab olema üksainus täht.");
    }
    // Jagab kogu sisu tähekaupa ja filtreerib välja sobivad tähemärgid
    return this.kysiSisu().split('').filter(c => c === taht).length;
  }
}

// Alamklass, mis esindab üksikut sõna
export class Sona extends Tekst {
  // Hoidja sõna enda sees
  constructor(private sisu: string) {
    super();
  }

  // Tagastab selle konkreetse sõna
  kysiSisu(): string {
    return this.sisu;
  }
}

// Alamklass, mis esindab tervet lauset
export class Lause extends Tekst {
  // Siia salvestub iga unikaalse sõna kohta ühe Sona-objekt
  private sonad: Sona[];

  constructor(lause: string) {
    super();

    // Kasutab Map-i, et korduvate sõnade puhul ei tekiks mitut objekti
    const sonaMap = new Map<string, Sona>();

    this.sonad = lause
      .split(/\s+/)               // jagab sisendi tühikute alusel sõnadeks
      .filter(s => s.length > 0) // eemaldab tühjad tulemused
      .map(s => {
        // kui sõna Map-is puudub, loob uue Sona-objekti
        if (!sonaMap.has(s)) {
          sonaMap.set(s, new Sona(s));
        }
        // tagastab olemasoleva või just loodud objekti
        return sonaMap.get(s)!;
      });
  }

  // Koostab sõnadest uuesti terve lause, et Tekst.loendaTaht toimiks
  kysiSisu(): string {
    return this.sonad.map(s => s.kysiSisu()).join(' ');
  }
}
