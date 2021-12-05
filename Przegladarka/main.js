let section = document.getElementById('columns');
let losBtn = document.getElementById('roll');
const htmlParzyste = document.createElement('span');
const htmlNieparzyste = document.createElement('span');

losBtn.addEventListener('click', GenerateColumns);

function GenerateColumns() {
    htmlParzyste.innerHTML = '';
    htmlNieparzyste.innerHTML = '';
    let numbers = [];

    for(let i=0; i<20; i++) 
        numbers.push(Math.floor(Math.random() * 100) + 1);

    numbers.sort((a,b) => {return a-b}).forEach(element => {
        if(element % 2 === 0) {
            const row = document.createElement('p');
            row.innerHTML = element;
            htmlParzyste.appendChild(row);
        }
        else {
            const row = document.createElement('p');
            row.innerHTML = element;
            htmlNieparzyste.appendChild(row);
        }
    })
    
    section.appendChild(htmlParzyste);
    section.appendChild(htmlNieparzyste);
}