let loginMessage = document.getElementById('loginTxt');


function loginUser() {
  loginMessage.innerText = "Welcome back, User"
}

document.getElementById('loginBtn').addEventListener('click', loginUser)