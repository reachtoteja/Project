var user = JSON.parse(localStorage.getItem("currentUser"));
console.log(user);

document.getElementById("welcome").innerHTML =
  "Welcome " + user.username + " ..!";

function LogoutUser() {
  localStorage.removeItem("currentUser");
  location.replace("../login/login.html");
  var curUser = JSON.parse(localStorage.getItem("currentUser"));
}
