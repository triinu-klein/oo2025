// Exporting the BookTracker class from the current file (homework1.ts).
export class BookTracker {
    // Declaring a property 'books' to store book titles as keys and their ratings (or null if no rating) as values.
    books: Record<string, number | null>;

    // The constructor initializes the 'books' object, which will hold the books and their ratings.
    constructor() {
        this.books = {};  // Initially, the books object is empty.
    }

    // Method to add a new book to the 'books' object. If the book doesn't exist, it's added with no rating (null).
    addBook(title: string): void {
        if (!this.books[title]) {
            this.books[title] = null;  // Book is added without a rating (null).
        }
    }

    // Method to assign a rating (between 1 and 5) to a book. If the book exists, it will have its rating updated.
    rateBook(title: string, rating: number): void {
        if (this.books[title] !== undefined && rating >= 1 && rating <= 5) {
            this.books[title] = rating;  // Update book rating if valid (between 1 and 5).
        } else {
            throw new Error("Invalid book or rating");  // Throw an error if the book doesn't exist or the rating is invalid.
        }
    }

    // Method to find the highest-rated book by comparing ratings. Returns the title of the highest-rated book.
    highestRatedBook(): string | null {
        // Filter out the books that don't have ratings (i.e., ratings are null).
        const ratedBooks = Object.entries(this.books).filter(([_, rating]) => rating !== null);

        // If there are no rated books, return null.
        if (ratedBooks.length === 0) return null;

        // Compare the ratings of all books and return the title of the highest-rated book.
        return ratedBooks.reduce((best, current) => 
            (current[1]! > best[1]! ? current : best)  // Compare ratings and return the best one.
        )[0];  // Return the title of the highest-rated book.
    }
}

// Sample usage: Adding books and printing the highest-rated one
const tracker = new BookTracker();
tracker.addBook("The Honey Witch");  
tracker.rateBook("The Honey Witch", 5);  

tracker.addBook("Astrid Parker Doesn't Fail"); 
tracker.rateBook("Astrid Parker Doesn't Fail", 4); 

// Print the highest-rated book to the console
console.log("Highest-rated book:", tracker.highestRatedBook());