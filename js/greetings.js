const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const main = document.querySelector("main");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function paintGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hi, ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

function onLoginSubmit(event) {
  event.preventDefault();
  main.classList.remove(HIDDEN_CLASS);
  loginForm.classList.add(HIDDEN_CLASS);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreeting();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  // show the login form
  main.classList.add(HIDDEN_CLASS);
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // greet with the saved username
  loginForm.classList.add(HIDDEN_CLASS);
  paintGreeting();
}
