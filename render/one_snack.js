function renderOneSnack(id) {
  return RequestSnacks.oneWithReviews(id)
    .then(response => {
      const snack = response[0].data
      const reviewsArray = response[1].data
      const content = singleSnackTemplate(snack, reviewsArray)
      document.querySelector("#popup").innerHTML = content
      document.querySelector('#close-modal').addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('is-active')
      })
      document.querySelector('.action-btn').addEventListener('click',
    (event) => {
      if(event.target.id === "addReview"){
        const user = Token.check()
        console.log(user.userId);
      };
    })
  })
}
