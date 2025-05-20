// Abstraktne klass, mis määratleb muusikalise ajastu põhistruktuuri
abstract class TaylorEra {
  // Ajastu või albumi nimi
  constructor(
    public name: string,
    // Ajastu kestvus aastates
    public period: string
  ) {}

  // Tagastab kirjelduse 'eerast'
  abstract describeEra(): string;
  // Tagastab ajastu tuntuima laulu
  abstract topSong(): string;

  // Prindib konsooli kokkuvõtte: nime, perioodi, stiili ja laulu
  summary(): void {
    console.log(`${this.constructor.name} (${this.period}):`);
    console.log(`Kirjeldus: ${this.describeEra()}`);
    console.log(`Tuntuim laul: ${this.topSong()}`);
    console.log('---');
  }
}

// Esimese albumi ajastu
class Taylor_Swift extends TaylorEra {
  // Nimi “Taylor Swift”, ajavahemik 2006–2008
  constructor() {
    super("Taylor Swift", "2006–2008");
  }
    describeEra(): string {
    return "Debüüdi puhul keskendub tugevale kantrirootsile ja otsekohesusele.";
  }
    topSong(): string {
    return "Tim McGraw";
  }
}

// „Fearless“ ajastu
class Fearless extends TaylorEra {
  constructor() {
    super("Fearless", "2008–2010");
  }
    describeEra(): string {
    return "Romantika ja unistused, meeldejäävad refräänid ning kaunid armastuslaulud.";
  }
    topSong(): string {
    return "You Belong With Me";
  }
}

// „Speak Now“ ajastu
class SpeakNow extends TaylorEra {
  constructor() {
    super("Speak Now", "2010–2012");
  }
    describeEra(): string {
    return "Täielikult ise kirjutatud lood, sirgumine superstaariks ja armastusteemad.";
  }
    topSong(): string {
    return "Long Live";
  }
}

// Kogu muusikaliste ajastute loend
const eras: TaylorEra[] = [
  new Taylor_Swift(),
  new Fearless(),
  new SpeakNow(),
];

// Iga ajastu kohta konsoolile kuvamiseks kokkuvõtte
eras.forEach(era => era.summary());
