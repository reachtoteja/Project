if (localStorage.getItem("products") == null) {
  localStorage.setItem("products", JSON.stringify([]));
}

document.getElementById("save").style.display = "none";
var allProducts = JSON.parse(localStorage.getItem("products"));

createBody();

function addData() {
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
      "<td>" +
      "<button onclick='updateProduct(" +
      product.pid +
      ")'>Edit</button>" +
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

function updateProduct(pid) {
  console.log(pid);
  var products = JSON.parse(localStorage.getItem("products"));
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    if (product.pid == pid) {
      document.getElementById("pid").value = product.pid;
      document.getElementById("name").value = product.name;
      document.getElementById("price").value = product.price;
      document.getElementById("imgurl").value = product.imgurl;
      document.getElementById("pid").disabled = true;
      document.getElementById("save").style.display = "inline";
      document.getElementById("add").style.display = "none";

      break;
    }
  }
}

function saveData() {
  event.preventDefault();

  var pid = document.getElementById("pid").value;
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var imgurl = document.getElementById("imgurl").value;

  var products = JSON.parse(localStorage.getItem("products"));

  for (var i = 0; i < products.length; i++) {
    if (products[i].pid == pid) {
      products[i].name = name;
      products[i].price = price;
      products[i].imgurl = imgurl;

      break;
    }
  }

  clearInputFields();
  document.getElementById("save").style.display = "none";
  document.getElementById("add").style.display = "inline";
  document.getElementById("pid").disabled = false;
  localStorage.setItem("products", JSON.stringify(products));
  createBody();
}
