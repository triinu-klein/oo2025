// BookTracker klass
export class BookTracker {
    // 'books' deklareerimine, et saaks selles hoida väärtustena pealkirju (võti) ning hinnanguid (võib olla null).
    books: Record<string, number | null>;

    // Konstruktor.
    constructor() {
        this.books = {};  // Alguses raamatu objekt tühi.
    }

    // Meetod, et lisada uus raamat 'books' objekti. Kui raamatut varasemast ei ole lisatakse ta esiti ilma hinnanguta (null).
    addBook(title: string): void {
        if (!this.books[title]) {
            this.books[title] = null;  // null hinnang.
        }
    }

    // Meetod hinnangu lisamiseks 5 palli skaalal. Kui raamat on olemas uuendatakse selle hinnangu andmeid.
    rateBook(title: string, rating: number): void {
        if (this.books[title] !== undefined && rating >= 1 && rating <= 5) {
            this.books[title] = rating;  // hinnang 5-palli skaalal
        } else {
            throw new Error("Invalid book or rating");  // Kui raamatut ei ole või hinnang ei sobi 5 palli skaalale viskab errorit
        }
    }

    // Meetod hinnangute võrdlemise alusel kõrgeima hinnanguga raamatu leidmiseks. Annab tulemuseks 'parima' raamatu pealkirja.
    highestRatedBook(): string | null {
        // Filtreerib välja hinnanguta raamatud.
        const ratedBooks = Object.entries(this.books).filter(([_, rating]) => rating !== null);

        // Kui pole ühtegi hinnanguga raamatut siis tulemus null.
        if (ratedBooks.length === 0) return null;

        // Võrdleb ja annab tulemuse.
        return ratedBooks.reduce((best, current) => 
            (current[1]! > best[1]! ? current : best)  // Võrdleb.
        )[0];  // Annab tulemuse.
    }
}

// Raamatute lisamise ja hinnangute lisamise näide 
const tracker = new BookTracker();
tracker.addBook("The Honey Witch");  
tracker.rateBook("The Honey Witch", 5);  

tracker.addBook("Astrid Parker Doesn't Fail"); 
tracker.rateBook("Astrid Parker Doesn't Fail", 4); 

// Parima leidmise näide
console.log("Highest-rated book:", tracker.highestRatedBook());