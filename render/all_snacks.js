function renderSnacks() {
  return RequestSnacks.all()
    .then(response => {
      const content = response.data.map(item => snackTemplate(item))
      document.querySelector("#main-container").innerHTML = content.join(" ")
    })
}
