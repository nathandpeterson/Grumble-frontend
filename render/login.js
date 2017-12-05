
class Login {
  constructor(){}
  static activateLoginButton(){
    document.querySelector('#login').addEventListener('click', (e) => {
      e.preventDefault()
      document.querySelector("#popup").innerHTML = loginForm()
        this.activateLoginSubmit()
        this.activateCloseLogin()
        SignUp.activateButtons()
    })
  }
    static activateLoginSubmit(){
      document.querySelector('#login-submit').addEventListener('click', (e) => {
        e.preventDefault()
        let data = this.collectLoginData()
        if(!data.email || !data.password){
          this.missingFields()
        } else{
          Auth.login(data)
        }
      })
    }
    static activateCloseLogin(){
      document.querySelector('#close-modal').addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector('.modal').classList.remove('is-active')
      })
    }
    static collectLoginData(){
      let emailInput = document.querySelector('#email-input').value
      let passwordInput = document.querySelector('#password-input').value
      let data = {email: emailInput,
                  password: passwordInput}
      return data
    }
    static success(){
      document.querySelector('.modal').classList.remove('is-active')
      let name = localStorage.getItem('userName')
      let logoutButton = document.querySelector('#login')
      logoutButton.innerHTML = `Log out`
      logoutButton.addEventListener('click', (e) => {
        e.preventDefault()
        this.logout()
      })
    }
    static logout(){
      localStorage.setItem('token', '')
      localStorage.setItem('userId', '')
      localStorage.setItem('userName', '')
      localStorage.setItem('admin', '')
      let logInButton = document.querySelector('#login')
      logInButton.innerHTML = `Log in`
      document.querySelector('.modal').classList.remove('is-active')
      this.activateLoginButton()
    }
    static errorMessage(){
      document.querySelector('#error-message').innerHTML = `<div class="notification is-danger" id="error-notification">
  <button class="delete"></button>
  Sorry but either your password or your email seem to be wrong...
</div>`
    }
    static missingFields(){
      document.querySelector('#error-message').innerHTML = `<div class="notification is-danger" id="error-notification">
  Hm... Did you forget to enter your email or password?
</div>`
    this.activateLoginSubmit()
    }
}
