"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTracker = void 0;
// BookTracker klass
var BookTracker = /** @class */ (function () {
    // Konstruktor.
    function BookTracker() {
        this.books = {}; // Alguses raamatu objekt tühi.
    }
    // Meetod, et lisada uus raamat 'books' objekti. Kui raamatut varasemast ei ole lisatakse ta esiti ilma hinnanguta (null).
    BookTracker.prototype.addBook = function (title) {
        if (!this.books[title]) {
            this.books[title] = null; // null hinnang.
        }
    };
    // Meetod hinnangu lisamiseks 5 palli skaalal. Kui raamat on olemas uuendatakse selle hinnangu andmeid.
    BookTracker.prototype.rateBook = function (title, rating) {
        if (this.books[title] !== undefined && rating >= 1 && rating <= 5) {
            this.books[title] = rating; // hinnang 5-palli skaalal
        }
        else {
            throw new Error("Invalid book or rating"); // Kui raamatut ei ole või hinnang ei sobi 5 palli skaalale viskab errorit
        }
    };
    // Meetod hinnangute võrdlemise alusel kõrgeima hinnanguga raamatu leidmiseks. Annab tulemuseks 'parima' raamatu pealkirja.
    BookTracker.prototype.highestRatedBook = function () {
        // Filtreerib välja hinnanguta raamatud.
        var ratedBooks = Object.entries(this.books).filter(function (_a) {
            var _ = _a[0], rating = _a[1];
            return rating !== null;
        });
        // Kui pole ühtegi hinnanguga raamatut siis tulemus null.
        if (ratedBooks.length === 0)
            return null;
        // Võrdleb ja annab tulemuse.
        return ratedBooks.reduce(function (best, current) {
            return (current[1] > best[1] ? current : best);
        } // Võrdleb.
        )[0]; // Annab tulemuse.
    };
    return BookTracker;
}());
exports.BookTracker = BookTracker;
// Raamatute lisamise ja hinnangute lisamise näide 
var tracker = new BookTracker();
tracker.addBook("The Honey Witch");
tracker.rateBook("The Honey Witch", 5);
tracker.addBook("Astrid Parker Doesn't Fail");
tracker.rateBook("Astrid Parker Doesn't Fail", 4);
// Parima leidmise näide
console.log("Highest-rated book:", tracker.highestRatedBook());
