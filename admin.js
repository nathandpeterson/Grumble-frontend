let addSnack = document.querySelector("#addSnackButton")
let newSnackWindow = document.querySelector("#popup")
let userTable = document.querySelector('#userTable')
let delSnack = document.querySelector('#delSnackButton')
//on page load

document.addEventListener('DOMContentLoaded', ()=>{
  //this will bring up the users table to read who that are and option to delete them
  Admin.getUsers().then(data=>{
    userTable.innerHTML = viewActiveUsers(data.data)
    //adding event listener to delete buttons
    let delUserButton = document.querySelectorAll('.delUserButton')
    for (var i = 0; i < delUserButton.length; i++) {
      let button = delUserButton[i]
      button.addEventListener('click', ()=>{
        console.log(button.value)
        window.Admin.delUserWreviews(button.value)
      })
    }
    })
  })

//brings up add snack Window
addSnack.addEventListener('click', function(){
  newSnackWindow.innerHTML = addSnackTemp({name: "New Snack"})
  document.querySelector('#close-modal').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('is-active')
  })
  let thisSnack={
    name: document.querySelector("#snackName"),
    description: document.querySelector("#snackDescription"),
    price: document.querySelector("#snackPrice"),
    img: document.querySelector("#imgURL")
  }
  let post = document.querySelector("#addSnackPost")

//sends a post request to add new snack on add snack click

  post.addEventListener('click', function(){
    let name = thisSnack.name.value
    let description = thisSnack.description.value
    let price = thisSnack.price.value
    let img = thisSnack.img.value

    window.Admin.postSnack({name, description, price, img})
    document.querySelector('.modal').classList.remove('is-active')
  })
})

delSnack.addEventListener('click', ()=>{

})
