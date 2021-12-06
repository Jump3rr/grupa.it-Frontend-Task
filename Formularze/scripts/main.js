import {Validation} from './validation.js';
import {Book} from './book.js';
import { Books } from './books.js';

const validation = new Validation();
const form = document.getElementById('mainForm');
const button = document.getElementById('submit');

button.addEventListener('click', e => {
    if(!validation.Validate()) {
        e.preventDefault();
    }
    else {
        addBook();
        form.reset();
    }
});

const books = new Books();
books.renderBooks();

function addBook() {
    const author = document.getElementById('bookAuthor');
    const title = document.getElementById('bookTitle');
    const priority = document.getElementById('bookPriority');
    const category = document.getElementById('bookCategory');
    const book = new Book(title, author, priority, category);
    books.addBook(book);
}
