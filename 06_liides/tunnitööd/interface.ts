interface Adder{
    add(nr:number):void; //a method to add number
    getSum():number; //a method to return the sum
    reset():void; //
}
class CharCounter{
    //constructor takes an adder object as a parameter and stores it in a protected variable
    constructor(protected adder: Adder){}
        addWordCharacters(word:String):void { //method designed to take a word 
            this.adder.add(word.length); //word.length - characters's amount
        }
        getCharacterCount():number{ //recieve the character count stored in adder
            return this.adder.getSum(); //call the sum from adder..?
        }
    }
class SimpleAdder implements Adder{
    protected sum: number=0; //initial sum is zero, without initial value sum would be undefined
    add(nr:number){this.sum+=nr;}; //add the given number to sum
    getSum():number{ //return the current sum
        return this.sum;
    };
    reset(){
        this.sum=0;
    }
}

let adder1:Adder=new SimpleAdder();
let counter1:CharCounter=new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
//adder1.add(3);
//adder1.add(5);
//console.log(adder1.getSum());
//adder1.reset();
//console.log(adder1.getSum());