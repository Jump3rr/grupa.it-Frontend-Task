export class Library {
    addBook(book) {
        const htmlBook = this.createBook(book);
        const container = document.getElementById('library');
        container.appendChild(htmlBook);
    }
    createBook(book) {
        const htmlBook = document.createElement('div');
        const htmlTitle = document.createElement('span');
        const htmlAuthor = document.createElement('span');
        const htmlPriority = document.createElement('span');
        const htmlCategory = document.createElement('span');

        htmlBook.classList.add('book');
        htmlTitle.classList.add('longFields');
        htmlAuthor.classList.add('longFields');
        htmlPriority.classList.add('shortFields');
        htmlCategory.classList.add('longFields');

        htmlTitle.innerHTML = book.title;
        htmlAuthor.innerHTML = book.author;
        htmlPriority.innerHTML = book.priority;
        htmlCategory.innerHTML = book.category;
        htmlBook.appendChild(htmlTitle);
        htmlBook.appendChild(htmlAuthor);
        htmlBook.appendChild(htmlPriority);
        htmlBook.appendChild(htmlCategory);

        return htmlBook;
    }
}