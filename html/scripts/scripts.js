const formElement = document
.querySelector('#form');

const inputElement = document
.querySelector('#task');

const ulElement = document
.querySelector('#tasks');


inputElement
    .addEventListener('input', onInputChange); //название и действие событиz

formElement
    .addEventListener('submit', onFormSubmit);


function onInputChange (event) {
    console.log(`Значение: ${event.target.value}`);
}

function onFormSubmit (event) {
    event.preventDefault();
    const value = inputElement.value.trim();
    if (!value) {return;}
    const liElement = createElement('li', value);
    ulElement
     .appendChild(liElement); //добавить ребенка (в массив)
    inputElement.value = '';
}

function createElement (elementName, elementText){
    const newElement = document
     .createElement(elementName); // создать элемент
    newElement.innerText = elementText; //добавить к нему текст
    return newElement;
}