
//add to all_snacks.js

function isAdmin(id){
  const user = Token.check()
  if (user.admin) {
    renderAdmin(id)
  }
}

function renderAdmin(id){
  return `
    <a href="#" class="card-footer-item  delete" id="del${item.id}">Delete snack</a>
  `
}

//add to render snacks

function checkAdmin(){
  const user = Token.check()

}
