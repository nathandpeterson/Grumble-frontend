
function activateLoginButton() {
  document.querySelector('#login').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector("#popup").innerHTML = loginForm()
    activateLoginSubmit()
    activateCloseLogin()
  })
}

function activateLoginSubmit(){
  document.querySelector('#login-submit').addEventListener('click', (e) => {
    e.preventDefault()
    let data = collectLoginData()
    Auth.login(data)
  })
}

function activateCloseLogin(){
  document.querySelector('#close-modal').addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked')
    document.querySelector('.modal').classList.remove('is-active')
  })
}

function collectLoginData(){
  let emailInput = document.querySelector('#email-input').value
  let passwordInput = document.querySelector('#password-input').value
  let data = {email: emailInput,
              password: passwordInput}
      return data
}
