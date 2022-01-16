const loginForm = document.getElementById('loginForm');
const username = document.getElementById('usernam');
const password = document.getElementById('pass');
function checkLoginInputs() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, "Username can't be empty");
    username.focus();
  } else {
    setSuccessFor(username);
  }
  if (passwordValue === '') {
    setErrorFor(password, "password can't be empty");
    password.focus();
  } else {
    setSuccessFor(password);
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement; //  here the parennnt is .form-control
  const small = formControl.querySelector('small');
  // add error message inside small
  small.innerText = message;

  //error class  added
  formControl.className = 'form-control error';
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  // small.innerText = message;
  formControl.className = 'form-control success';
}
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkLoginInputs();
});

function loginFunc(e) {
  event.preventDefault();
  var username = document.getElementById('usernam').value;
  var password = document.getElementById('pwd').value;
  var errorMsg = document.getElementById('errorMsg').value;

  var user = localStorage.getItem('signedUpUsers');
  var data = JSON.parse(user);
  console.log(data);

  if (user == null) {
    errorMsg.innerText = 'Wrong username';
  } else if (username == data.username && password == data.password) {
    errorMsg.innerHTML = 'logged in';
  } else {
    errorMsg.innerHTML = 'wrong password';
  }
}
