const author = document.getElementById('bookAuthor');
const title = document.getElementById('bookTitle');
const priority = document.getElementById('bookPriority');
const category = document.getElementById('bookCategory');

export class Validation {
    Validate() {
        const authorValue = author.value.trim();
        const titleValue = title.value.trim();
        const priorityValue = priority.value;
        const categoryValue = category.selectedIndex;

        if (authorValue.length < 3)
            this.ShowErrorMessage(author, 'Pole autor musi zawierać minimum 3 znaki');
        else
            this.ShowSuccess(author);

        if (titleValue.length < 1)
            this.ShowErrorMessage(title, 'Pole tytuł musi zawierać minimum 1 znak');
        else
            this.ShowSuccess(title);

        if (priorityValue < 1 || priorityValue > 5)
            this.ShowErrorMessage(priority, 'Wartość musi mieścić się w zakresie od 1 do 5');
        else
            this.ShowSuccess(priority);

        if (categoryValue === 0)
            this.ShowErrorMessage(category, 'Trzeba wybrać kategorię');
        else
            this.ShowSuccess(category);

        if (titleValue.length >= 0 && authorValue.length >= 3 && (priorityValue >= 1 && priorityValue <= 5) && (categoryValue >= 1 && categoryValue <= 3))
            return true;
        else
            return false;
    }
    ShowErrorMessage(input, message) {
        const formRow = input.parentElement;
        const small = formRow.querySelector('small');
        formRow.className = 'form-row error';
        small.innerText = message;
    }
    ShowSuccess(input) {
        const formRow = input.parentElement;
        formRow.className = "form-row success";
    }
}
