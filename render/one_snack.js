function renderOneSnack(id) {
  return RequestSnacks.one(id)
    .then(response => {
      console.log(response.data)
      document.querySelector("#popup").innerHTML = singleSnackTemplate(response.data)
      document.querySelector('#close-modal').addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('is-active')
      })
    })
}
