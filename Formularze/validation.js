const form = document.getElementById('mainForm');
const author = document.getElementById('bookAuthor');
const title = document.getElementById('bookTitle');
const priority = document.getElementById('bookPriority');
const category = document.getElementById('bookCategory')

form.addEventListener('submit', e => {
    if(!Validate()) {
        e.preventDefault();
    }
});

function Validate() {
    const authorValue = author.value.trim();
    const titleValue = title.value.trim();
    const priorityValue = priority.value;
    const categoryValue = category.selectedIndex;

    if(authorValue.length < 3)
        ShowErrorMessage(author, 'Pole autor musi zawierać minimum 3 znaki');
    else
        ShowSuccess(author);

    if(titleValue.length < 1)
        ShowErrorMessage(title, 'Pole tytuł musi zawierać minimum 1 znak');
    else 
        ShowSuccess(title);
    
    if(priorityValue < 1 || priorityValue > 5) 
        ShowErrorMessage(priority, 'Wartość musi mieścić się w zakresie od 1 do 5');
    else
        ShowSuccess(priority);

    if(categoryValue === 0)
        ShowErrorMessage(category, 'Trzeba wybrać kategorię');
    else
        ShowSuccess(category);
    
    if(titleValue.length >= 0 && authorValue.length >= 3 && (priorityValue >= 1 && priorityValue <= 5) && (categoryValue >=1 && categoryValue <= 3)) 
        return true;
    else 
        return false;
}
function ShowErrorMessage(input, message) {
    const formRow = input.parentElement;
    const small = formRow.querySelector('small');
    formRow.className = 'form-row error';
    small.innerText = message;
}
function ShowSuccess(input) {
    const formRow = input.parentElement;
    formRow.className = "form-row success";
}
