const Login = {

  activateLoginButton() {
    document.querySelector('#login').addEventListener('click', (e) => {
      e.preventDefault()
      document.querySelector("#popup").innerHTML = loginForm()
      this.activateLoginSubmit()
      this.activateCloseLogin()
      SignUp.activateButtons()
    })
  },
  activateLoginSubmit() {
    document.querySelector('#login-submit').addEventListener('click', (e) => {
      e.preventDefault()
      let data = this.collectLoginData()
      if (!data.email || !data.password) {
        this.missingFields()
      } else {
        Auth.login(data)
      }
    })
  },
  activateCloseLogin() {
    document.querySelector('#close-modal').addEventListener('click', (e) => {
      e.preventDefault()
      document.querySelector('.modal').classList.remove('is-active')
    })
  },
  collectLoginData() {
    let data = {
      email: document.querySelector('#email-input').value,
      password: document.querySelector('#password-input').value
    }
    return data
  },
  success() {
    document.querySelector('.modal').classList.remove('is-active')
    let name = localStorage.getItem('userName')
    let logoutButton = document.querySelector('#login')
    logoutButton.innerHTML = `Hi, ${name}<br>Log out`
    logoutButton.style.padding = '1.5rem'
    logoutButton.addEventListener('click', (e) => {
      e.preventDefault()
      this.logout()
    })
    checkIfAdmin()
  },
  logout() {
    localStorage.setItem('token', '')
    localStorage.setItem('userId', '')
    localStorage.setItem('userName', '')
    localStorage.setItem('admin', '')
    let logInButton = document.querySelector('#login')
    logInButton.innerHTML = `Log in`
    logInButton.style.padding = ''
    document.querySelector('.modal').classList.remove('is-active')
    this.activateLoginButton()
  },
  errorMessage() {
    document.querySelector('#error-message').innerHTML = `<div class="notification is-danger" id="error-notification">
      <button class="delete"></button>
      Sorry but either your password or your email seem to be wrong...
      </div>`
  },
  missingFields() {
    document.querySelector('#error-message').innerHTML = `<div class="notification is-danger" id="error-notification">
        Hm... Did you forget to enter your email or password?
        </div>`
  }
}
