export class Localstorage {
    constructor() {
        this.lsBooksKey = 'books';
    }
    saveBooks(books) {
        localStorage.setItem(this.lsBooksKey, JSON.stringify(books));
    }
    
    getBooks() {
        const booksFromLocalStorage = JSON.parse(localStorage.getItem(this.lsBooksKey));

        if(booksFromLocalStorage)
            return booksFromLocalStorage;
        else
            return [];
    }
}