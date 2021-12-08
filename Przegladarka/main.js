let section = document.getElementById('columns');
let losBtn = document.getElementById('roll');
const htmlParzyste = document.createElement('span');
const htmlNieparzyste = document.createElement('span');

losBtn.addEventListener('click', GenerateColumns);

function GenerateColumns() {
    let numbers = [];
    htmlParzyste.innerHTML = 'Liczby parzyste:';
    htmlNieparzyste.innerHTML = 'Liczby nieparzyste:';

    for (let i = 0; i < 20; i++)
        numbers.push(Math.floor(Math.random() * 100) + 1);

    numbers.sort((a, b) => { return a - b }).forEach(element => {
        element % 2 === 0 ? AddToHTMLElement(htmlParzyste, element) : AddToHTMLElement(htmlNieparzyste, element);
    });

    section.appendChild(htmlParzyste);
    section.appendChild(htmlNieparzyste);
}

function AddToHTMLElement(htmlElement, number) {
    const row = document.createElement('p');
    row.innerHTML = number;
    htmlElement.appendChild(document.createElement('hr'));
    htmlElement.appendChild(row);
}