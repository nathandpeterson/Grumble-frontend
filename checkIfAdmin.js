function checkIfAdmin(){
  let admin = localStorage.getItem('admin')
  if(admin=='true') location.assign('admin.html')
}

checkIfAdmin()
