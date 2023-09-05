document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Perform form validation here
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Om" && password === "Om@123") {
      // Redirect to another page on successful validation
      window.location.href = "order_details.html";
    } else {
      alert("Invalid username or password");
    }
  });
