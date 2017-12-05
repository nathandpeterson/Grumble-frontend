class SignUp{
  constructor(){}
  static activateButtons(){
    document.querySelector('#sign-up').addEventListener('click', (e) => {
      e.preventDefault()
      document.querySelector("#popup").innerHTML = signUpForm()
      Login.activateCloseLogin()
      document.querySelector('#submit-sign-up-data').addEventListener('click', (e) => {
        e.preventDefault()
        this.submitForm()
      })
    })
  }
  static submitForm(){
    let data = this.collectFormData()
    Auth.signUp(data)
  }
  static collectFormData(){
    let data =
    { first_name: document.querySelector('#first-name-input').value,
    last_name: document.querySelector('#last-name-input').value,
    email: document.querySelector('#email-input').value,
    password: document.querySelector('#password-input').value }
    if(!data.first_name || !data.last_name) return this.errorMessage(`You must enter a first and last name`)
    if(!data.email) return this.errorMessage(`You must enter an email address`)
    if(!data.password) return this.errorMessage(`You must enter a password`)
    if(!this.verifyPasswordMatch()){
      this.errorMessage(`Your passwords don't match`)
    }
  }
  static verifyPasswordMatch(){
    let input1 = document.querySelector('#password-input').value
    let input2 = document.querySelector('#password-verify').value
    return input1 === input2 ? true : false
  }
  static errorMessage(message){
    document.querySelector('#error-message').innerHTML = `<div class="notification is-danger" id="error-notification">
    ${message}
    </div>`
  }
}
