import {Validation} from './validation.js';

const validation = new Validation();
let section = document.getElementById('library');
const form = document.getElementById('mainForm');

form.addEventListener('submit', e => {
    if(!validation.Validate()) {
        e.preventDefault();
    }
});
