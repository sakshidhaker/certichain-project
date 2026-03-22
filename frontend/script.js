function login() {

  var email =
  document.getElementById("email").value;

  var password =
  document.getElementById("password").value;

fetch("http://localhost:3000/login", {

method: "POST",

headers: {

"Content-Type": "application/json"

},

body: JSON.stringify({

email: email,

password: password

})

})

.then(response => response.text())

.then(data => {

document.getElementById("message").innerHTML = data;

})

.catch(error => {

console.log(error);

});

}