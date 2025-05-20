// Impordime BookTracker klassi failist homework1.ts testimiseks.
import { BookTracker } from "./Testimine";

// Testikomplekti algus – siia alla tulevad kõik BookTrackeriga seotud testid.
describe("BookTracker", () => {

    // Esimene test: Kontroll, kas saab raamatu edukalt lisada.
    test("peaks lisama raamatu", () => {
        const tracker = new BookTracker();
        tracker.addBook("A Magic Steeped in Poison");
        expect(tracker.books).toHaveProperty("A Magic Steeped in Poison");
    });

    // Teine test: Kontroll, kas saab raamatule õigesti hinnangu anda.
    test("peaks hindama raamatut", () => {
        const tracker = new BookTracker();
        tracker.addBook("Saints of Storm and Sorrow");
        tracker.rateBook("Saints of Storm and Sorrow", 5);
        expect(tracker.books["Saints of Storm and Sorrow"]).toBe(5);
    });

    // Kolmas test: Kontroll, kas leitakse kõrgeima hinnanguga raamat.
    test("peaks leidma kõrgeima hinnanguga raamatu", () => {
        const tracker = new BookTracker();
        tracker.addBook("Dungeons and Drama");
        tracker.rateBook("Dungeons and Drama", 5);
        tracker.addBook("Fake Dates and Mooncakes");
        tracker.rateBook("Fake Dates and Mooncakes", 4);
        expect(tracker.highestRatedBook()).toBe("Dungeons and Drama");
    });
});
