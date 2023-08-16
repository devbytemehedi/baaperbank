document.getElementById("btn-deposit").addEventListener("click", function () {
  const inputAmmount = getInputAmmountById("deposit-field");
  if (isNaN(inputAmmount) || inputAmmount === "") {
    alert("Please Enter a Number");
    return;
  } else if (inputAmmount <= 0) {
    alert("Invalid Amount");
    return;
  }
  const elementAmmount = getElementAmmountById("deposit-balance");
  const currentBalance = getElementAmmountById("total-balance");
  const totalAmmount = elementAmmount + inputAmmount;
  const newBalance = currentBalance + inputAmmount;
  setElementValueById("deposit-balance", totalAmmount);
  setElementValueById("total-balance", newBalance);
});
