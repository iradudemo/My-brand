// const form = document.getElementById('form');

// const email = document.getElementById('emeyili');

// const password = document.getElementById('pass');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   checkInputDataForLogin();
// });
// function checkInputDataForLogin() {
//   const emailData = email.value.trim();
//   const passwordData = password.value.trim();

//   if (emailData === '') {
//     setErrorTo(email, 'Fill your email');
//   } else {
//     setSuccessTo(email);
//   }
// }
// function setErrorTo(input, message) {
//   const username = input.parentElement;
//   const msg = username.querySelector('small');

//   msg.innerText = message;

//   username.className = 'username error';
// }
function loginFunc(e) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('pwd').value;

  var user = localStorage.getItem('username');
  var data = JSON.parse(user);
  console.log(data);
}
