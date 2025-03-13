interface Adder{
    add(nr:number):void; //a method to add number
    getSum():number; //a method to return the sum
    getAverage():number;
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
class CountingAdder implements Adder{
    protected sum: number=0; //initial sum is zero, without initial value sum would be undefined
    protected count:number=0;
    add(nr:number){
        this.sum+=nr;  //add the given number to sum
        this.count++;
    }
    getSum():number{ //return the current sum
        return this.sum;
    };
    getAverage(){
        if(this.count>0){
            return this.sum/this.count;
        } else{
            return 0;
        }
    }
}

let adder1:Adder=new CountingAdder();
let counter1:CharCounter=new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());