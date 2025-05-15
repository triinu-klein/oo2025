// Salati koostisosade ja toiduainete klassid

export class Toiduaine {
    constructor(
      public nimi: string,
      public valgud: number,
      public rasvad: number,
      public sysivesikud: number
    ) {
      if (valgud + rasvad + sysivesikud > 100) {
        throw new Error("Toitainete kogus ei tohi ületada 100%");
      }
    }
  }
  
  export class Toidukomponent {
    constructor(public toiduaine: Toiduaine, public kogus: number) {}
  
    valgud(): number {
      return this.toiduaine.valgud * this.kogus / 100;
    }
  
    rasvad(): number {
      return this.toiduaine.rasvad * this.kogus / 100;
    }
  
    sysivesikud(): number {
      return this.toiduaine.sysivesikud * this.kogus / 100;
    }
  }
  
  export class Toit {
    constructor(public nimetus: string, public komponendid: Toidukomponent[]) {}
  
    mass(): number {
      return this.komponendid.reduce((sum, k) => sum + k.kogus, 0);
    }
  
    valgud(): number {
      return this.komponendid.reduce((sum, k) => sum + k.valgud(), 0);
    }
  
    rasvad(): number {
      return this.komponendid.reduce((sum, k) => sum + k.rasvad(), 0);
    }
  
    sysivesikud(): number {
      return this.komponendid.reduce((sum, k) => sum + k.sysivesikud(), 0);
    }
  
    korrutatud(kordaja: number): Toidukomponent[] {
      return this.komponendid.map(k => new Toidukomponent(k.toiduaine, k.kogus * kordaja));
    }
  }
  
  // Siin defineerime toiduained
  export const Jääsalat = new Toiduaine("Jääsalat", 0.8, 0.12, 2.1);
  export const Kaste = new Toiduaine("Caesari salatikaste", 1.53, 24.5, 8.1);
  export const Kana = new Toiduaine("Kanafilee", 31.1, 2, 0);
  export const Tomat = new Toiduaine("Tomat", 0.6, 0.3, 3.5);
  export const Parmesan = new Toiduaine("Parmesan", 40.6, 29.7, 0);
  
  // Basa retsept Ceasari salati jaoks
  export const ceasariSalat100g = new Toit("Ceasari salat", [
    new Toidukomponent(Kana, 35),
    new Toidukomponent(Jääsalat, 30),
    new Toidukomponent(Kaste, 20),
    new Toidukomponent(Parmesan, 10),
    new Toidukomponent(Tomat, 5),
  ]);
  