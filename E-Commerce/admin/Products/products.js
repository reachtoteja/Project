if (localStorage.getItem("products") == null) {
  localStorage.setItem("products", JSON.stringify([]));
}

var allProducts = JSON.parse(localStorage.getItem("products"));

createBody();

function add() {
  event.preventDefault();
  var pid = document.getElementById("pid").value;
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var imgurl = document.getElementById("imgurl").value;

  var product = {
    pid: pid,
    name: name,
    price: price,
    imgurl: imgurl,
  };

  allProducts.push(product);
  localStorage.setItem("products", JSON.stringify(allProducts));
  clearInputFields();
  createBody();
}

function clearInputFields() {
  document.getElementById("pid").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("imgurl").value = "";
}

function createBody() {
  var tbody = document.getElementById("tbody");

  var tbodyContent = "";

  var products = JSON.parse(localStorage.getItem("products"));

  for (var i = 0; i < products.length; i++) {
    var product = products[i];

    var image = "<img width='80px' height='100px' src=" + product.imgurl + ">";

    tbodyContent =
      tbodyContent +
      "<tr>" +
      "<td>" +
      product.pid +
      "</td>" +
      "<td>" +
      product.name +
      "</td>" +
      "<td>" +
      product.price +
      "</td>" +
      "<td>" +
      image +
      "</td>" +
      '<td><i onclick="deleteProduct(' +
      i +
      ')" class="fa fa-trash"></i></td>' +
      "</tr>";
  }
  tbody.innerHTML = tbodyContent;
}

function deleteProduct(index) {
  var confirmation = confirm(
    "Do you want to delete Item: " +
      allProducts[index].pid +
      " (" +
      allProducts[index].name +
      ")"
  );
  if (confirmation === true) {
    allProducts.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(allProducts));
  }
  createBody();
}
