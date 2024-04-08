

import Book from './book'
import BookRepositoryInterface from './bookRepositoryInterface' 

class BookRepository implements BookRepositoryInterface {
  private books: Book[];

  constructor() {
    this.books = []; // Initialize the books array in the constructor
  }

  addBook(book: Book) {
    console.log(this, this.books);
    this.books.push(book);
  }

  getAllBooks(): Book[] {
    return this.books;
  }
}


export default BookRepository
