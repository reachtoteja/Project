function validateUser() {
  event.preventDefault();

  var emailId = document.getElementById("emailId").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");

  var users = JSON.parse(localStorage.getItem("users"));

  var userNo = -1;
  for (var i = 0; i < users.length; i++) {
    if (users[i].emailId === emailId) {
      userNo = i;
    }
  }

  if (emailId === "") {
    error.textContent = "Email filed Should not be empty";
  } else if (userNo === -1) {
    console.log("please enter valid emailId");
    error.innerHTML = "please enter valid emailId";
  } else if (password === "") {
    error.textContent = "Password field should not be empty";
  } else {
    if (password === users[userNo].password) {
      console.log(users[userNo].username);
      localStorage.setItem("currentUser", JSON.stringify(users[userNo]));
      location.replace("../dashboard/dashboard.html");
    } else {
      console.log("incorrect password");
      error.textContent = "incorrect password";
    }
  }
}
