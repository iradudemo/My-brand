const loginForm = document.getElementById('loginForm');
const usernam = document.getElementById('usernam');
const passwor = document.getElementById('pass');
function checkLoginInputs() {
  const usernameValue = usernam.value.trim();
  const passwordValue = passwor.value.trim();

  if (usernameValue === '') {
    setErrorFor(usernam, "Username can't be empty");
    usernam.focus();
  } else {
    setSuccessFor(usernam);
  }
  if (passwordValue === '') {
    setErrorFor(passwor, "password can't be empty");
    password.focus();
  } else {
    setSuccessFor(passwor);
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
  var usernam = document.getElementById('usernam').value;
  var password = document.getElementById('pwd').value;
  var errorMsg = document.getElementById('errorMsg').value;

  var user = localStorage.getItem('signedUpUsers');
  var data = JSON.parse(user);
  console.log(data);

  if (user == null) {
    errorMsg.innerText = 'Wrong username';
  } else if (usernam == data.username && password == data.password) {
    errorMsg.innerHTML = 'logged in';
  } else {
    errorMsg.innerHTML = 'wrong password';
  }
}
