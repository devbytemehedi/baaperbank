function getInputAmmountById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = inputField.value;
  const inputAmmount = parseInt(inputValue);
  inputField.value = "";
  return inputAmmount;
}

function getElementAmmountById(elementId) {
  const elementField = document.getElementById(elementId);
  const elementValue = elementField.innerText;
  const elementAmmount = parseInt(elementValue);
  return elementAmmount;
}

function setElementValueById(elementId, newValue) {
  const elementField = document.getElementById(elementId);
  elementField.innerText = newValue;
}
