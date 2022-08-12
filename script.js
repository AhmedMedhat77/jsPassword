let toggleBtn = document.querySelector("#toggle-btn");
let inputPassword = document.querySelector("#pass");
let lowerCase = document.querySelector("#lower");
let upperCase = document.querySelector("#upper");
let number = document.querySelector("#number");
let spechialChar = document.querySelector("#spechial");
let eightChars = document.querySelector("#eigthcharc");

toggleBtn.onclick = function () {
  if (inputPassword.type === "password") {
    inputPassword.setAttribute("type", "text");
    toggleBtn.classList.add("hide");
  } else {
    inputPassword.setAttribute("type", "password");
    toggleBtn.classList.remove("hide");
  }
};

function checkPassword(data) {
  
  const lower = new RegExp('(?=.*[a-z])');
  const upper = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  const spechial = new RegExp('(?=.*[!@#\$%\^&\*])');
  const lenght = new RegExp('(?=.*{8,})');
  if (lower.test(data)) {
    lowerCase.classList.add("valid");
  }
  else{
    lowerCase.classList.remove("valid");
  }
}
