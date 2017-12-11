function adminRenderOneSnack(id) {
  return RequestSnacks.one(id)
    .then(snack => {
      const content = adminSingleSnackTemplate(snack.data)
      document.querySelector("#popup").innerHTML = content

      document.querySelector('#close-modal').addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('is-active')
      })
  })
}
