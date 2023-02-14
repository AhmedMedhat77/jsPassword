// let toggleBtn = document.querySelector("#toggle-btn");
let inputPassword = document.querySelector("#pass");
let lowerCase = document.querySelector("#lower");
let upperCase = document.querySelector("#upper");
let numberEl = document.querySelector("#number");
let specialChar = document.querySelector("#spechial");
let eightChars = document.querySelector("#eigthcharc");
let signUpBtn = document.querySelector(".sign-up-link");
let submitBtn = document.querySelector("#submit-btn");
// toggleBtn.onclick = function () {
//   if (
//     inputPassword.type === "password" ||
//     conformPassword.type === "password"
//   ) {
//     inputPassword.setAttribute("type", "text");
//     toggleBtn?.classList.add("hide");
//   } else {
//     inputPassword.setAttribute("type", "password");
//     toggleBtn.classList.remove("hide");
//   }
// };

function checkPassword(data) {
  const lower = new RegExp("(?=.*[a-z])");
  const upper = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const length = new RegExp("(.{8,})");

  if (
    regexTester(lowerCase, lower, data) &
    regexTester(upperCase, upper, data) &
    regexTester(numberEl, number, data) &
    regexTester(specialChar, special, data) &
    regexTester(eightChars, length, data)
  ) {
    console.log(true);
  }
}

function regexTester(el, regex, data) {
  if (regex.test(data)) {
    el.classList.add("valid");
  } else el.classList.remove("valid");
}
function toogleHTML(el, compare, defaultText) {
  if (el.textContent.indexOf(compare) > -1) {
    el.textContent = defaultText;
  } else {
    el.textContent = compare;
  }
}

signUpBtn.addEventListener("click", () => {
  document.querySelector("#sign-up").classList.toggle("active");
  document.querySelector("#sign-in").classList.toggle("disabled");
  toogleHTML(signUpBtn, "Log In", "Sign Up");
  toogleHTML(submitBtn, "Sign Up", "Login");
});
