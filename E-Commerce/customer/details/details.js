if (localStorage.getItem("currentProduct") === null) {
  location.replace("../dashboard/dashboard.html");
} else {
  var product = JSON.parse(localStorage.getItem("currentProduct"));

  var details = document.getElementById("details");

  var image = "<img width='250px' height='300px' src=" + product.imgurl + ">";

  details.innerHTML =
    "<h3> Product Id: " +
    product.pid +
    "</h3><h3>" +
    product.name +
    "</h3>" +
    image +
    "<h4>Price:" +
    product.price +
    " INR</h4>";
}

function goBack() {
  localStorage.removeItem("currentProduct");
  location.replace("../dashboard/dashboard.html");
}
