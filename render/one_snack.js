function renderOneSnack(id) {
  return RequestSnacks.one(id)
    .then(response => {
      document.querySelector("#popup").innerHTML = singleSnackTemplate(response.data)
    })
}
