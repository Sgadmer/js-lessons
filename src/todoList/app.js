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
  const liElement = createElement('li', value);
  liElement.setAttribute('completed',false);
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

  buttonFilter.forEach((button) => {
    button.setAttribute('isActivated', false);
  })
  elem.setAttribute('isActivated', true);
}


//Переключатель статуса задач

olElement
  .addEventListener('click', olClick);

function olClick(event) {
  let target = event.target;
  if (!target.tagName == 'li') return;

  if (target.getAttribute('completed')=='false') {
    target.setAttribute('completed', true);
  } else { target.setAttribute('completed',false); }
}



