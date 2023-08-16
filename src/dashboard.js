document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositAmount = parseInt(depositField.value);
  depositField.value = "";
  if (isNaN(depositAmount) || depositAmount === "") {
    alert("Please Enter a Number");
    return;
  } else if (depositAmount <= 0) {
    alert("Invalid Amount");
    return;
  }
  let depositBalance = parseInt(
    document.getElementById("deposit-balance").innerText
  );
  let totalBalance = parseInt(
    document.getElementById("total-balance").innerText
  );
  const totalDeposit = depositBalance + depositAmount;
  const currentBalance = totalBalance + depositAmount;
  document.getElementById("deposit-balance").innerText = totalDeposit;
  document.getElementById("total-balance").innerText = currentBalance;
});
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawAmount = parseInt(withdrawField.value);
  withdrawField.value = "";
  if (isNaN(withdrawAmount) || withdrawAmount === "") {
    alert("Please Enter a Number");
    return;
  }
  let withdrawBalance = parseInt(
    document.getElementById("withdraw-balance").innerText
  );
  let totalBalance = parseInt(
    document.getElementById("total-balance").innerText
  );
  if (withdrawAmount > totalBalance) {
    alert("Insufficient Balance");
    return;
  }
  if (withdrawAmount <= 0) {
    alert("Invalid Amount");
    return;
  }
  if (totalBalance <= 500) {
    alert("Cannot Withdraw");
    return;
  }
  const totalWithdraw = withdrawBalance + withdrawAmount;
  const currentBalance = totalBalance - withdrawAmount;
  document.getElementById("withdraw-balance").innerText = totalWithdraw;
  document.getElementById("total-balance").innerText = currentBalance;
});
