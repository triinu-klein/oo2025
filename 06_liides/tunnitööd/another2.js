var CharCounter = /** @class */ (function () {
    function CharCounter(adder) {
        this.adder = adder;
    }
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length);
    };
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum();
    };
    return CharCounter;
}());
var StoringAdder = /** @class */ (function () {
    function StoringAdder() {
        this.store = [];
    }
    StoringAdder.prototype.add = function (nr) {
        this.store.push(nr);
    };
    StoringAdder.prototype.getSum = function () {
        var sum = 0;
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
            var amount = _a[_i];
            sum += amount;
        }
        return sum;
    };
    ;
    StoringAdder.prototype.getAverage = function () {
        if (this.store.length > 0) {
            return this.getSum() / this.store.length;
        }
        return 0;
    };
    StoringAdder.prototype.getRange = function () {
        if (this.store.length == 0) {
            return 0;
        }
        var minimum = this.store[0];
        var maximum = minimum;
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
            var amount = _a[_i];
            if (amount < minimum) {
                minimum = amount;
            }
            if (amount > maximum) {
                maximum = amount;
            }
        }
        return maximum - minimum;
    };
    return StoringAdder;
}());
var adder1 = new StoringAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
console.log(adder1.getRange());
