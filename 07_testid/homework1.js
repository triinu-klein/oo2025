"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTracker = void 0;
// Importing the BookTracker class from the current file (homework1.ts).
var BookTracker = /** @class */ (function () {
    // The constructor initializes the 'books' object, which will hold the books and their ratings.
    function BookTracker() {
        this.books = {}; // Initially, the books object is empty.
    }
    // Method to add a new book to the 'books' object. If the book doesn't exist, it's added with no rating (null).
    BookTracker.prototype.addBook = function (title) {
        if (!this.books[title]) {
            this.books[title] = null; // Book is added without a rating (null).
        }
    };
    // Method to assign a rating (between 1 and 5) to a book. If the book exists, it will have its rating updated.
    BookTracker.prototype.rateBook = function (title, rating) {
        if (this.books[title] !== undefined && rating >= 1 && rating <= 5) {
            this.books[title] = rating; // Update book rating if valid (between 1 and 5).
        }
        else {
            throw new Error("Invalid book or rating"); // Throw an error if the book doesn't exist or the rating is invalid.
        }
    };
    // Method to find the highest-rated book by comparing ratings. Returns the title of the highest-rated book.
    BookTracker.prototype.highestRatedBook = function () {
        // Filter out the books that don't have ratings (i.e., ratings are null).
        var ratedBooks = Object.entries(this.books).filter(function (_a) {
            var _ = _a[0], rating = _a[1];
            return rating !== null;
        });
        // If there are no rated books, return null.
        if (ratedBooks.length === 0)
            return null;
        // Compare the ratings of all books and return the title of the highest-rated book.
        return ratedBooks.reduce(function (best, current) {
            return (current[1] > best[1] ? current : best);
        } // Compare ratings and return the best one.
        )[0]; // Return the title of the highest-rated book.
    };
    return BookTracker;
}());
exports.BookTracker = BookTracker;
// Sample usage: Adding books and printing the highest-rated one
var tracker = new BookTracker();
tracker.addBook("The Honey Witch");
tracker.rateBook("The Honey Witch", 5);
tracker.addBook("Astrid Parker Doesn't Fail");
tracker.rateBook("Astrid Parker Doesn't Fail", 4);
// Print the highest-rated book to the console
console.log("Highest-rated book:", tracker.highestRatedBook());
