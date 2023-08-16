document.getElementById("btn-withdraw").addEventListener("click", function () {
  // console.log("withdraw button clicked");
  const inputAmmount = getInputAmmountById("withdraw-field");
  if (isNaN(inputAmmount) || inputAmmount === "") {
    alert("Please Enter a Number");
    return;
  } else if (inputAmmount <= 0) {
    alert("Invalid Amount");
    return;
  }
  const elementAmmount = getElementAmmountById("withdraw-balance");
  const currentBalance = getElementAmmountById("total-balance");
  if (inputAmmount > currentBalance) {
    alert("Insufficient Balance");
    return;
  }
  if (inputAmmount <= 0) {
    alert("Invalid Amount");
    return;
  }
  if (currentBalance <= 500) {
    alert("Cannot Withdraw");
    return;
  }
  const totalAmmount = elementAmmount + inputAmmount;
  const newBalance = currentBalance - inputAmmount;
  setElementValueById("withdraw-balance", totalAmmount);
  setElementValueById("total-balance", newBalance);
});
