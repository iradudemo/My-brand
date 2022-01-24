window.onload = () => {
  if (localStorage.loggedInUser) {
    const loggedInUser = JSON.parse(localStorage.loggedInUser);
    if (loggedInUser.username != "admin") {
      window.location = "../index.html";
    }
  } else {
    window.location = "../index.html";
  }
};
