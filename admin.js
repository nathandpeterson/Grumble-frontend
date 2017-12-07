let addSnack = document.querySelector("#addSnackButton")
let newSnackWindow = document.querySelector("#popup")
let userTable = document.querySelector('#userTable')
//on page load

document.addEventListener('DOMContentLoaded', ()=>{
  Admin.getUsers().then(data=>{
    //console.log(data.data);
    return userTable.innerHTML = viewActiveUsers(data.data)

  })
  //console.log(userTable)
  })
  //userTable.innerHTML = viewActiveUsers(data)


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
