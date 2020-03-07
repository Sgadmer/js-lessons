const formElement = document
  .querySelector('#form');

const inputElement = document
  .querySelector('#task');

const olElement = document
  .querySelector('#tasks');

function onInputChange(event) {
  console.log(event.target.value);
}

function onFormSubmit(event) {
  event.preventDefault();
  const value = inputElement.value.trim();
  if (!value) { return; }

  const spanElement = createElement('span', value);
  const deleteBTN = createElement('button', 'DELETE');
  const liElement = createElement('li', '');
  liElement
    .addEventListener('click', olClick);

  deleteBTN
    .addEventListener('click', deleteFunc);

  liElement.setAttribute('completed', false);

  liElement.appendChild(spanElement);
  liElement.appendChild(deleteBTN);
  olElement.appendChild(liElement);
  inputElement.value = '';
}

function createElement(elementName, elementText) {
  const newElement = document
    .createElement(elementName);
  newElement.innerText = elementText;
  return newElement;
}

inputElement
  .addEventListener('input', onInputChange);


formElement
  .addEventListener('submit', onFormSubmit);



//Кнопки

const buttonFilter = document
  .querySelectorAll('button[filter]');

const todo = document
  .querySelector('#todo-list');

buttonFilter.forEach((elem) => {
  elem.addEventListener('click', onFilterButtonClick);
});

function onFilterButtonClick(event) {
  let elem = event.target;
  let filterRule = elem.getAttribute('filter');
  todo.setAttribute('filterMode', filterRule);
}


//Переключатель статуса задач


function olClick(event) {
  let target = event.currentTarget;
  let target2 = event.target;

  if (target2.innerText != 'DELETE') {
    if (target.getAttribute('completed') == 'false') {
      target.setAttribute('completed', true);
    } else { target.setAttribute('completed', false); }
  }

}


function deleteFunc (event){

  const target = event.target;
  
}
