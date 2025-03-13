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
var CountingAdder = /** @class */ (function () {
    function CountingAdder() {
        this.sum = 0; //initial sum is zero, without initial value sum would be undefined
        this.count = 0;
    }
    CountingAdder.prototype.add = function (nr) {
        this.sum += nr; //add the given number to sum
        this.count++;
    };
    CountingAdder.prototype.getSum = function () {
        return this.sum;
    };
    ;
    CountingAdder.prototype.getAverage = function () {
        if (this.count > 0) {
            return this.sum / this.count;
        }
        else {
            return 0;
        }
    };
    return CountingAdder;
}());
var adder1 = new CountingAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
