document.getElementById("btn-submit").addEventListener("click", function () {
  event.preventDefault();
  console.log("Login Button Clicked");
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  if (email == "admin@baaperbank.com" && password == "admin") {
    console.log("Login Successful");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Credentials");
  }
});
