import Book from './book';


class NonFictionBook extends Book {
    getType(): string { 
     return "Non-Fiction Book"   
    }
}

export default NonFictionBook


/* With the Open-Closed Principle, we can add new types of books (e.g., FantasyBook, BiographyBook) without modifying the existing code. This promotes code flexibility and reusability. */
