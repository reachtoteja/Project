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

var products = JSON.parse(localStorage.getItem("products"));
var productsContent = "";
var display = document.getElementById("display");

for (var i = 0; i < products.length; i++) {
  var image =
    "<img width='80px' height='100px' src=" + products[i].imgurl + ">";
  productsContent =
    productsContent +
    "<div onclick=displayDetails(" +
    i +
    ")><p>" +
    products[i].name +
    "</p>" +
    image +
    "<p>Price: " +
    products[i].price +
    " INR</p></div>";
}

display.innerHTML = productsContent;

function displayDetails(index) {
  localStorage.setItem("currentProduct", JSON.stringify(products[index]));
  location.replace("../details/details.html");
}
