import { Sona, Lause } from './taheloendaja';

describe('Sona klassi testid', () => {
  //Sona-objekt sõnaga "pere"
  const sona = new Sona('pere');

  test('loendab a-tähti (0)', () => {
    expect(sona.loendaTaht('a')).toBe(0);
  });

  test('loendab p-tähti (1)', () => {
    expect(sona.loendaTaht('p')).toBe(1);
  });

  test('loendab e-tähti (2)', () => {
    expect(sona.loendaTaht('e')).toBe(2);
  });

  test('kysiSisu tagastab algse sõna', () => {
    // Kontrollib, et kysiSisu() annab ikka "pere"
    expect(sona.kysiSisu()).toBe('pere');
  });

  test('vigane sisend (rohkem kui üks täht)', () => {
    // Kui sisend on >1 tähemärk, viskab loendaTaht Errori
    expect(() => sona.loendaTaht('ab')).toThrow();
  });
});

describe('Lause klassi testid', () => {
  // Loob Lause-objekti lausega, kus "pere" kordub kaks korda
  const lause = new Lause('pere elab pere linnas');

  test('loendab e-tähti (5)', () => {
    // "pere" annab 2 e, teine "pere" veel 2 e, "elab" annab 1 e → kokku 5
    expect(lause.loendaTaht('e')).toBe(5);
  });

  test('loendab p-tähti (2)', () => {
    // "pere" on kaks korda → 2 korda täht p
    expect(lause.loendaTaht('p')).toBe(2);
  });

  test('loendab a-tähti (2)', () => {
    // "elab" ja "linnas" annavad kumbki 1 a → kokku 2
    expect(lause.loendaTaht('a')).toBe(2);
  });

  test('kysiSisu tagastab kogu lause', () => {
    // Lause.sõnad liidetakse tagasi tühikutega
    expect(lause.kysiSisu()).toBe('pere elab pere linnas');
  });

  test('vigane sisend Lause puhul', () => {
    // Sama käitumine nagu Sona puhul, aga läbi Lause.loendaTaht
    expect(() => lause.loendaTaht('ab')).toThrow();
  });

  test('korduvate sõnade puhul kasutatakse sama objekti', () => {
    const kaks = new Lause('tere tere');
    // @ts-ignore: testib privaatset sonad-massiivi
    const s1 = kaks['sonad'][0];
    // @ts-ignore
    const s2 = kaks['sonad'][1];
    // Kui kaks sama sõna, siis peavad viited olema identsed
    expect(s1).toBe(s2);
  });
});
