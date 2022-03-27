var user = JSON.parse(localStorage.getItem("currentUser"));
console.log(user);

function redirect() {
  if (user === null) {
    location.replace("../login/login.html");
  }
}
redirect();

document.getElementById("welcome").innerHTML =
  "Welcome " + user.username + " ..!";

function LogoutUser() {
  localStorage.removeItem("currentUser");
  location.replace("../login/login.html");
}
