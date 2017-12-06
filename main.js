document.addEventListener('DOMContentLoaded', () => {
  renderSnacks()
  Login.activateLoginButton()
  Token.setButtonText()
})

  // const id = element.id.replace('more', '')
class Token{
  constructor(){
  }
  static check(){
    let data = { name : localStorage.getItem('userName'),
    admin : localStorage.getItem('admin'),
    token : localStorage.getItem('token'),
    userId : localStorage.getItem('userId') }
  return data
  }
  static setButtonText(){
    let data = this.check()
    if(data.token) {
      let logoutButton = document.querySelector('#login')
      logoutButton.innerHTML = `${data.name} <br> Logout`
      logoutButton.addEventListener('click', (e) => {
        e.preventDefault()
        Login.logout()
      })
    }
  }
}

function render(){
  Login.activateLoginButton()
}
