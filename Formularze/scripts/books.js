import { Localstorage } from "./localstorage.js";
import { Library } from "./library.js";

export class Books {
    localstorage = new Localstorage();
    booksArr = this.localstorage.getBooks();
    library = new Library();

    addBook(book) {
        this.booksArr.push(book);
        this.localstorage.saveBooks(this.booksArr);
        this.library.addBook(book);
    }
    renderBooks() {
        this.booksArr.forEach(book => {
            this.library.addBook(book);
        });
    }
}
