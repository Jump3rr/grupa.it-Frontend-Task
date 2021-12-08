export class Library {
    addBook(book) {
        const htmlBook = this.createBook(book);
        const table = document.getElementById('libraryTableBody');
        table.appendChild(htmlBook);
    }
    createBook(book) {
        const htmlBook = document.createElement('tr');
        const htmlTitle = document.createElement('td');
        const htmlAuthor = document.createElement('td');
        const htmlPriority = document.createElement('td');
        const htmlCategory = document.createElement('td');
        
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