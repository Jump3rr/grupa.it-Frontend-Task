form.addEventListener('submit', e => {
    e.preventDefault();
    
    Validate();
});

export class Validation {

    Validate() {
        const author = document.getElementById('bookAuthor');
        const title = document.getElementById('bookTitle');

        const authorValue = author.value.trim();
        const titleValue = title.value.trim();

        if(authorValue.length < 3) {
            this.ShowErrorMessage(author, 'Pole autor musi zawierać minimum 3 znaki')
        }
        if(titleValue.length < 1) {
            this.ShowErrorMessage(title, 'Pole tytuł musi zawierać minimum 1 znak')
        }
    }
    ShowErrorMessage(input, message) {
        const formRow = input.parentElement;
        const small = formRow.querySelector('small');
        small.innerText = message;
    }
}