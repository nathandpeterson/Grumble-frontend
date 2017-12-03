function renderSnacks() {
  return RequestSnacks.all()
    .then(response => {
      const content = response.data.map(item => snackTemplate(item))
      document.querySelector("#main-container").innerHTML = content.join(" ")
      readMore()
    })
    .catch(error => console.error("Can't render snacks"))
}

function readMore(){
  document.querySelectorAll('.more').forEach(element => {
    element.addEventListener('click', (event) => {
      const id = parseInt(event.target.id.replace('more', ''))
      renderOneSnack(id)
    })
  })
}
