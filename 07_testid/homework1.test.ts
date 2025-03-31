// Importing the BookTracker class from the homework1.ts file for testing.
import { BookTracker } from "./homework1";

// Start of the test suite, will group all tests related to BookTracker.
describe("BookTracker", () => {
    // First test: Checking if we can add a book to the tracker.
    test("should add a book", () => {
        const tracker = new BookTracker();
        tracker.addBook("A Magic Steeped in Poison");
        expect(tracker.books).toHaveProperty("A Magic Steeped in Poison");
    });

    // Second test: Checking if we can rate a book correctly.
    test("should rate a book", () => {
        const tracker = new BookTracker();
        tracker.addBook("Saints of Storm and Sorrow");
        tracker.rateBook("Saints of Storm and Sorrow", 5);
        expect(tracker.books["Saints of Storm and Sorrow"]).toBe(5);
    });

    // Third test: Checking if we can find the highest-rated book.
    test("should find the highest-rated book", () => {
        const tracker = new BookTracker();
        tracker.addBook("Dungeons and Drama");
        tracker.rateBook("Dungeons and Drama", 5);
        tracker.addBook("Fake Dates and Mooncakes");
        tracker.rateBook("Fake Dates and Mooncakes", 4);
        expect(tracker.highestRatedBook()).toBe("Dungeons and Drama");
    });
});
