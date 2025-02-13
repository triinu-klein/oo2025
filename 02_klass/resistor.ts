//Loo programmiga kolm takistit. Esimese takistus 110 oomi, teise takistus 220 oomi, kolmanda takistus 4700 oomi (ehk 4,7 kilooomi). Arvuta iga takisti puhul vool 5-voldise pinge korral.
//Paiguta need kolm takistit massiivi. Rakenda igaühele pinge 5 volti, liida kokku tekkivad voolud nagu juhtub rööpühenduse korral
class Resistor {
    constructor(protected r: number) {
      this.r = r;
    }
    getCurrent(u: number): number {
      return u / this.r;
    }
  }
  
  let r1: Resistor = new Resistor(110);
  console.log(r1.getCurrent(5));
  let r2: Resistor = new Resistor(220);
  console.log(r2.getCurrent(5));
  let r3: Resistor= new Resistor(4700);
  console.log(r3.getCurrent(5));
  let takistid: Resistor[]=[r1, r2, r3];
  console.log(takistid);
  let voolusumma=0;
  for(let takisti of takistid){
    voolusumma=takisti.getCurrent(5);
  }
  console.log(voolusumma);

  console.log(takistid.reduce((siiani, praegune)=> siiani+praegune.getCurrent(5),0));


//Takistile mõjub pinge 5 volti ning seda läbib vool 2 amprit. Mitu vatti soojust eraldub takistist? - 10

let r11: Resistor = new Resistor(); 
console.log
//Takistile mõjub pinge 4 volti ning sealt eraldub võimsus 6 vatti. Mitu amprit voolu läbib takistit? - 1.5
//Mitu oomi on eelneva takisti takistus? - 


