function adminRenderOneSnack(id) {
  return RequestSnacks.one(id)
    .then(snack => {
      const content = adminSingleSnackTemplate(snack.data)
      document.querySelector("#popup").innerHTML = content
      console.log(snack);
      document.querySelector("#editSnack").addEventListener('click', ()=>{
        let thisNewSnack={
          id:snack.data.id,
          name:document.querySelector('#title').value,
          description:document.querySelector('#text').value,
          price:document.querySelector('#price')
        }

        Admin.editSnack(thisNewSnack)
      })

      document.querySelector('#close-modal').addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('is-active')
      })

  })
}
