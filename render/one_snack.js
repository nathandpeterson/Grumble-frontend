function renderOneSnack(id) {
  return RequestSnacks.one(id)
    .then(response => {
      document.querySelector("#popup").innerHTML = singleSnackTemplate(response.data)
      document.querySelector('#close-modal').addEventListener('click', (event) => {
        document.querySelector('.modal').classList.remove('is-active')
      })
    })
}
