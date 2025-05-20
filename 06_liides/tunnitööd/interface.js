var CharCounter = /** @class */ (function () {
    //constructor takes an adder object as a parameter and stores it in a protected variable
    function CharCounter(adder) {
        this.adder = adder;
    }
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length); //word.length - characters's amount
    };
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum(); //call the sum from adder..?
    };
    return CharCounter;
}());
var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0; //initial sum is zero, without initial value sum would be undefined
    }
    SimpleAdder.prototype.add = function (nr) { this.sum += nr; };
    ; //add the given number to sum
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    ;
    SimpleAdder.prototype.reset = function () {
        this.sum = 0;
    };
    return SimpleAdder;
}());
var adder1 = new SimpleAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
//adder1.add(3);
//adder1.add(5);
//console.log(adder1.getSum());
//adder1.reset();
//console.log(adder1.getSum());
