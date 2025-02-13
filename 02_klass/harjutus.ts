//Lisa takistile väli lubatud maksimumvõimsuse kohta. Selle sisestamine on vajalik konstruktoris.
//Loo käsk kontrollimaks, kas parameetrina antud pinge on vastava takisti puhul lubatud - st. kas pingestamisel eralduv võimsus jääb lubatud maksimuvõimsuse piiresse
//Koosta takistitest massiiv. Koosta funktsioon, mis loob uue massiivi takistitest, mille lubatud võimsus jääb etteantud pinge korral lubatud piiresse.

class Resistor {
    takistus: number;
    maxVoimsus: number;
  
    constructor(pinge: number, maxPower: number) {
      this.takistus = pinge;
      this.maxVoimsus = maxPower;
    }
    lubatudPinge(pinge: number): boolean {
        const voimsus=(pinge*pinge)/this.takistus;
        return voimsus <= this.maxVoimsus;
    }
  }
  
  function takistiPinge(resistors: Resistor[], pinge: number): Resistor[] {
    return resistors.filter(resistor => resistor.lubatudPinge(pinge));
  }
  const resistors: Resistor[] = [
    new Resistor(100, 0.5), 
    new Resistor(200, 1),  
    new Resistor(50, 2), 
  ];
  
  const pinge = 10;
  const lubatudTakistid = takistiPinge(resistors, pinge);
  
  console.log("Takistid, mis sobivad:", lubatudTakistid);