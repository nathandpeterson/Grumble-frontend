function adminRenderOneSnack(id) {
  return RequestSnacks.one(id)
    .then(snack => {
      const content = adminSingleSnackTemplate(snack.data)
      document.querySelector("#popup").innerHTML = content
      //console.log(snack);
      document.querySelector("#editSnack").addEventListener('click', ()=>{
        let thisNewSnack={
          id:snack.data.id,
          name:document.querySelector('#title').value,
          description:document.querySelector('#text').value,
          price:document.querySelector('#price').value,
          //img:document.querySelector('#snackURL').value||"https://i2.wp.com/linda-hoang.com/wp-content/uploads/2014/11/img-placeholder-dark.jpg"
        }
        //console.log(thisNewSnack);
        Admin.editSnack(thisNewSnack)
      })

      document.querySelector('#close-modal').addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('is-active')
        adminRenderSnacks()
      })

  })
}
