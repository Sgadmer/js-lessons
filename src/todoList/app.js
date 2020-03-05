const formElement = document
  .querySelector('#form');

const inputElement = document
  .querySelector('#task');

const ulElement = document
  .querySelector('#tasks');

function onInputChange(event) {
  console.log(event.target.value);
}

function onFormSubmit(event) {
  event.preventDefault();
  const value = inputElement.value.trim();
  if (!value) { return; }
  const liElement = createElement('li', value);
  ulElement.appendChild(liElement);
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

