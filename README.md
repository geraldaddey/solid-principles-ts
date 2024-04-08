# Book Management App

This is a simple book management application built with TypeScript. The project conveys the SOLID principles.

## SOLID Principles

### Single Responsibility Principle (SRP)

Each class in this application has a single responsibility. For example, the `Book` class is only responsible for holding the book's data, while the `BookRepository` class is responsible for managing the books.

### Open-Closed Principle (OCP)

The application is open for extension but closed for modification. For instance, if we want to add new methods for managing the books, we can create a new class that extends the `BookRepository` class.

### Liskov Substitution Principle (LSP)

The application is designed in such a way that we can replace the `BookRepository` class with a subclass without affecting the correctness of the program. For example, we could create a `SpecialBookRepository` subclass of `BookRepository` and use it anywhere a `BookRepository` is used.

### Interface Segregation Principle (ISP)

The `BookRepositoryInterface` interface is client-specific. Classes that implement this interface aren't forced to depend on methods they do not use.

### Dependency Inversion Principle (DIP)

High-level modules in this application do not depend on low-level modules. Both depend on abstractions. For example, if there was a `BookService` class that depended on `BookRepository`, it would depend on the `BookRepositoryInterface` abstraction, not the concrete `BookRepository` class.

## Project Structure

- `src/book.ts`: This file contains the `Book` class.
- `src/bookRepositoryInterface.ts`: This file defines the `BookRepositoryInterface` interface.
- `src/bookRepository.ts`: This file contains the `BookRepository` class which implements `BookRepositoryInterface`.

## How to Run

1. Clone the Project and Install dependencies:

```bash
npm install
``` 

2. Run the Book Management System 
```bash 
npx ts-node src/app.ts 
``` 
