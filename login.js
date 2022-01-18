const LoginErrorMsg = document.getElementById("login-error-msg");

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "ritik" && password == "ritik") {
        alert("Login successfully");

        location.reload();
    }
    else {

        alert("Login Failed");



    }
}
