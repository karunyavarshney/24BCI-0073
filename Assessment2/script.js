const lengthSlider = document.getElementById("length");
const lenVal = document.getElementById("lenVal");

lengthSlider.addEventListener("input", () => {
  lenVal.textContent = lengthSlider.value;
});

function generatePassword() {
  const length = lengthSlider.value;
  const uppercase = document.getElementById("uppercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;

  let chars = "abcdefghijklmnopqrstuvwxyz";

  if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers) chars += "0123456789";
  if (symbols) chars += "!@#$%^&*()";

  if (chars.length === 0) {
    alert("Select at least one option!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("password");

  if (!passwordField.value) {
    alert("Generate a password first!");
    return;
  }

  passwordField.select();
  document.execCommand("copy");
  alert("Password copied!");
}
